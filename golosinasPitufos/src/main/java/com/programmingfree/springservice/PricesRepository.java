package com.programmingfree.springservice;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by pin69 on 18-Sep-16.
 */
public interface PricesRepository extends CrudRepository<Provider, Integer> {

    List<Prices> findByProviderArchived();
}

