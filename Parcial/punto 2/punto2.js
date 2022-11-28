function agregar(){
    escogido=document.getElementById('ingredientes-lista');
    for (i=0; opt=escogido.options[i]; i++)
        if (opt.selected) {
            valor=opt.value; 
            texto=escogido.options[i].text; 
            escogido.options[i]=null;
            agregado=document.getElementById('ingredientes-escogido');
        if (agregado.options[0].value=='vacio') 
            agregado.options[0]=null;
            opc = new Option(texto,valor);
            eval(agregado.options[agregado.options.length]=opc);            
    } 
}

function quitar(){
    
    eliminado=document.getElementById('ingredientes-escogido');
    for (i=0; opt=eliminado.options[i]; i++)
        if (opt.selected) {
            valor=opt.value; 
            texto=eliminado.options[i].text; 
            eliminado.options[i]=null;
            devuelto=document.getElementById('ingredientes-lista');
        if (devuelto.options[0].value=='vacio') 
            devuelto.options[0]=null;
            opc = new Option(texto,valor);
            eval(devuelto.options[devuelto.options.length]=opc);            
    } 

}