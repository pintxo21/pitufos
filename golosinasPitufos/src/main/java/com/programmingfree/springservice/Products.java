package com.programmingfree.springservice;

import javax.persistence.*;

/**
 * Created by pin69 on 18-Sep-16.
 */


@Entity
@Table(name="products")
public class Products {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="product_id")
    private int id;

    @Column(name="product_category")
    private String productCategory;

    @Column(name="product_subcategory")
    private String productSubcategory;

    @Column(name="product_name")
    private String productNAme;

    @Column(name="product_description")
    private String productDescription;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getProductCategory() {
        return productCategory;
    }

    public void setProductCategory(String productCategory) {
        this.productCategory = productCategory;
    }

    public String getProductSubcategory() {
        return productSubcategory;
    }

    public void setProductSubcategory(String productSubcategory) {
        this.productSubcategory = productSubcategory;
    }

    public String getProductNAme() {
        return productNAme;
    }

    public void setProductNAme(String productNAme) {
        this.productNAme = productNAme;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }
}
