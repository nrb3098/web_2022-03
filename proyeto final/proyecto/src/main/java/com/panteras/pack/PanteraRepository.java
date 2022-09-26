package com.panteras.pack;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface PanteraRepository extends PagingAndSortingRepository<Pantera, Integer> {
    Pantera findById(int idPantera);
}
