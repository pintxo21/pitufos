package com.programmingfree.springservice;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Created by pin69 on 18-Sep-16.
 */
public interface ProductsRepository extends CrudRepository<Products, Integer> {

    //List<Products> findByProviderArchived();
}
