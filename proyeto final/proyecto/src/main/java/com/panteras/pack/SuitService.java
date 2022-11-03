package com.panteras.pack;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
@Service
public class SuitService {
    @Autowired
    SuitRepository repositorySuit;
    private static final Logger log = LoggerFactory.getLogger(SuitService.class);

    public Iterable<Suit>getSuit(){

        Iterable<Suit>suits = new ArrayList<>();
        suits = repositorySuit.findByEstado();
        return suits;
    }

    public boolean crearSuit(Suit suit) {
        try {
            if (suit != null) {
                repositorySuit.save(suit);//OJO QUE NO FUNCIONO PARA XMLS
                return true;
            }
        }catch (Exception e){}
        return false;
    }

    public void prestar(Suit suit){
        repositorySuit.save(suit);
    }

}
