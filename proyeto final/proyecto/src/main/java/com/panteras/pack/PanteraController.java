package com.panteras.pack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController // This means that this class is a Controller
 // This means URL's start with /demo (after Application path)
public class PanteraController {
    @Autowired // This means to get the bean called userRepository
    private PanteraService panteraService;


    @GetMapping("/home")
    public @ResponseBody Iterable<Pantera> getAllPanteras() {
        // This returns a JSON with the users
        return panteraService.getPantera();
    }

    @PostMapping("/CrearPantera")
    public boolean crearPantera(@RequestBody Pantera nuevo){
        return panteraService.crearPantera(nuevo);
    }

    @DeleteMapping( "/eliminarPantera/{id}")
    public HttpStatus borrarPantera(@PathVariable  Integer id){
        return panteraService.eliminarPanteraById(id)? HttpStatus.ACCEPTED : HttpStatus.BAD_REQUEST;
    }
    @PutMapping( "/actualizar")
    public void actualizarEstudiante(@RequestBody Pantera pantera){
        panteraService.actualizar(pantera);
    }

}