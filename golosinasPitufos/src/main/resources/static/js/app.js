var taskManagerModule = angular.module('taskManagerApp', ['ngAnimate']);

taskManagerModule.controller('taskManagerController', function ($scope,$http) {
	
	var urlBase="";
	$scope.toggle=true;
	$scope.selection = [];
	$http.defaults.headers.post["Content-Type"] = "application/json";

    function findAllProducts() {
         //get all tasks and display initially
         $http.get(urlBase + '/productss').
             success(function (data) {
                 if (data._embedded != undefined) {
                     $scope.products = data._embedded.productss;
                 } else {
                     $scope.products = [];
                 }
             });
    }

    findAllProducts();

    function findAllProviders() {
        //get all providers and display initially
        $http.get(urlBase + '/providers').
            success(function (data) {
                if (data._embedded != undefined) {
                    $scope.providers = data._embedded.providers;
                } else {
                    $scope.providers = [];
                }
                for (var i = 0; i < $scope.providers.length; i++) {

                    $scope.selection.push($scope.providers[i].providerId);

                }
                $scope.providerName="";
                $scope.providerAddress="";
                $scope.providerPhone="";

            });
    }

    findAllProviders();

	// //add a new task
	// $scope.addTask = function addTask() {
	// 	if($scope.taskName=="" || $scope.taskDesc=="" || $scope.taskPriority == "" || $scope.taskStatus == ""){
	// 		alert("Insufficient Data! Please provide values for task name, description, priortiy and status");
	// 	}
	// 	else{
	// 	 $http.post(urlBase + '/tasks', {
     //         taskName: $scope.taskName,
     //         taskDescription: $scope.taskDesc,
     //         taskPriority: $scope.taskPriority,
     //         taskStatus: $scope.taskStatus
     //     }).
	// 	  success(function(data, status, headers) {
	// 		 alert("Task added");
     //         var newTaskUri = headers()["location"];
     //         console.log("Might be good to GET " + newTaskUri + " and append the task.");
     //         // Refetching EVERYTHING every time can get expensive over time
     //         // Better solution would be to $http.get(headers()["location"]) and add it to the list
     //         findAllTasks();
	// 	    });
	// 	}
	// };

    //add a new provider
    $scope.addProvider = function addProvider() {
        if($scope.providerName=="" || $scope.providerAddress=="" || $scope.providerPhone == "" ){
            alert("Insufficient Data! Please provide values for name, address and number");
        }
        else{
            $http.post(urlBase + '/providers', {
                providerName: $scope.providerName,
                providerAddress: $scope.providerAddress,
                providerPhone: $scope.providerPhone
            }).
                success(function(data, status, headers) {
                    alert("Provider added");
                    var newTaskUri = headers()["location"];
                    console.log("Might be good to GET " + newTaskUri + " and append the task.");
                    // Refetching EVERYTHING every time can get expensive over time
                    // Better solution would be to $http.get(headers()["location"]) and add it to the list
                    findAllProviders();
                });
        }
    };
    // // toggle selection for a given task by task id
    // $scope.toggleSelection = function toggleSelection(taskUri) {
	 //    var idx = $scope.selection.indexOf(taskUri);
    //
	 //    // is currently selected
    //     // HTTP PATCH to ACTIVE state
	 //    if (idx > -1) {
	 //      $http.patch(taskUri, { taskStatus: 'ACTIVE' }).
		//   success(function(data) {
		//       alert("Task unmarked");
    //               findAllProviders();
		//     });
	 //      $scope.selection.splice(idx, 1);
	 //    }
    //
	 //    // is newly selected
    //     // HTTP PATCH to COMPLETED state
	 //    else {
	 //      $http.patch(taskUri, { taskStatus: 'COMPLETED' }).
		//   success(function(data) {
		// 	  alert("Task marked completed");
    //               findAllProviders();
		//     });
	 //      $scope.selection.push(taskUri);
	 //    }
	 //  };
	  
	
    // // Archive Completed Tasks
    // $scope.archiveTasks = function archiveTasks() {
    //       $scope.selection.forEach(function(taskUri) {
    //           if (taskUri != undefined) {
    //               $http.patch(taskUri, { taskArchived: 1});
    //           }
    //       });
    //       alert("Successfully Archived");
    //       console.log("It's risky to run this without confirming all the patches are done. when.js is great for that");
    //       findAllTasks();
	 //  };
	
});

//Angularjs Directive for confirm dialog box
taskManagerModule.directive('ngConfirmClick', [
	function(){
         return {
             link: function (scope, element, attr) {
                 var msg = attr.ngConfirmClick || "Are you sure?";
                 var clickAction = attr.confirmedClick;
                 element.bind('click',function (event) {
                     if ( window.confirm(msg) ) {
                         scope.$eval(clickAction);
                     }
                 });
             }
         };
 }]);

