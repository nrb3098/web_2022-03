package PruebasAutomaticas;

import org.hibernate.annotations.UpdateTimestamp;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.panteras.pack.PanteraRepository;

import net.bytebuddy.asm.Advice.AssignReturned.ToArguments;

@SpringBootTest(webEnviroment = WebEnviroment.RANDOM_PORT)
public class PanteraControllerIntegrationTest {

    private ChromeDriver driver;
    private WebDriverWait wait;


    @Autowired
    PanteraRepository panteraRepository;

    String URL = "http://localhost:4200";

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
