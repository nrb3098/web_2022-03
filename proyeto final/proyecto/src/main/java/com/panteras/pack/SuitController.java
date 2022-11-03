package com.panteras.pack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class SuitController {
     // This means that this class is a Controller
    // This means URL's start with /demo (after Application path)

        @Autowired // This means to get the bean called userRepository
        private SuitService suitService;


        @GetMapping("/suits")
        public @ResponseBody Iterable<Suit> getAllSuits() {
            // This returns a JSON with the users
            return suitService.getSuit();
        }

        @PostMapping("/CrearSuit")
        public boolean crearSuit(@RequestBody Suit nuevo){
            return suitService.crearSuit(nuevo);
        }

        @PutMapping( "/prestarSuit")
        public void prestarSuit(@RequestBody Suit suit){
        suitService.prestar(suit);
    }



}
