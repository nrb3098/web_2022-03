package com.panteras.pack;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.ArrayList;
import java.util.List;

public interface PanteraRepository extends CrudRepository <Pantera, Integer> {
@Query ("SELECT p FROM Pantera p WHERE p.name LIKE %?1%")
    List<Pantera> findBynameLike(String name);

}
