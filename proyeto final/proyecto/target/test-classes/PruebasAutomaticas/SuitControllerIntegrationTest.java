package PruebasAutomaticas;

import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;

import com.panteras.pack.PanteraRepository;

import net.bytebuddy.asm.Advice.AssignReturned.ToArguments;

@SpringBootTest(webEnviroment = WebEnviroment.RANDOM_PORT)
public class SuitControllerIntegrationTest {

    @LocalServerPort
    private int puerto;

    @Autowired
    SuitRepository suitRepository;


    @Autowired
    TestRestTemplate rest;

    @Test
    void crearSuitTest(){
        
        boolean crearS = rest.getForObject("http://localhost:"+puerto+"//CrearSuit", Boolean.class);

        assertEquals(true, crearP);

    }

}
