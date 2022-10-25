package com.panteras.pack;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class PanteraService {
    @Autowired
    PanteraRepository repositoryPantera;
    private static final Logger log = LoggerFactory.getLogger(PanteraService.class);

    public Iterable<Pantera>getPantera(){

        Iterable<Pantera> panteras = new ArrayList<>();
        panteras = repositoryPantera.findAll();
        return panteras;
    }
    public boolean crearPantera(Pantera pantera) {
        try {
            if (pantera != null) {
                repositoryPantera.save(pantera);//OJO QUE NO FUNCIONO PARA XMLS
                return true;
            }
        }catch (Exception e){}
        return false;
    }

    public boolean eliminarPanteraById(Integer id){
        try{
            repositoryPantera.deleteById(id);
            return true;
        }catch(Exception err){
            System.out.println(err);
            return false;
        }
    }
    public void actualizar(Pantera pantera){
        repositoryPantera.save(pantera);
    }
}
