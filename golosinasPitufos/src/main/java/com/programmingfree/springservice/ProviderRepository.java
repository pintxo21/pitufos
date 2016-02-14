package com.programmingfree.springservice;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ProviderRepository extends CrudRepository<Provider, Integer> {

    List<Provider> findByProviderArchived(@Param("archivedfalse") int providerArchivedFalse);

}