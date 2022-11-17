package PruebasAutomaticas;

import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.panteras.pack.PanteraRepository;

import net.bytebuddy.asm.Advice.AssignReturned.ToArguments;

@SpringBootTest(webEnviroment = WebEnviroment.RANDOM_PORT)
public class PanteraControllerIntegrationTest {

    @LocalServerPort
    private int puerto;

    @Autowired
    PanteraRepository panteraRepository;


    @Autowired
    TestRestTemplate rest;

    @Test
    void crearPanteraTest(){
        Pantera pa = new Pantera("Pantera Test");

        boolean crearP = rest.getForObject("http://localhost:"+puerto+"/CrearPantera", Boolean.class);

        assertEquals(true, crearP);

    }

    @Test
    void eliminarPanteraPorIdTest(){

        Integer id = 1;

        String direccion = "http://localhost:"+puerto+"/eliminarPantera/{"+id+"}";

        boolean eliminarP = rest.getForObject(direccion, Boolean.class);

        assertEquals(true, eliminarP);

    }
}
