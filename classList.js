const contenedor = document.querySelector(".contenedor");

const parrafo=document.createElement("P").innerHTML="parrafo";
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML="Titulo";

const h2_viejo=document.querySelector(".h2");

// contenedor.replaceChild(h2_nuevo,h2_viejo)

// contenedor.removeChild(h2_viejo)

let respuesta = h2_viejo.hasChildNodes();

if(respuesta){
    document.write("Tiene hijos")
}else{
    document.write("no tiene hijos")
}
