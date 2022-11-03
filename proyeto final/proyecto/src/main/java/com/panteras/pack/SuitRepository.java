package com.panteras.pack;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface SuitRepository extends CrudRepository<Suit, Integer> {
    @Query("SELECT s FROM Suit s WHERE s.estado = com.panteras.pack.Estado.DISPONIBLE")
    List<Suit>findByEstado();

}
