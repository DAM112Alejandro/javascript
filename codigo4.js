const contenedor=document.querySelector(".flex-container");

function crearLLaves(nombre, modelo,precio){
    nombre=`<h2>${nombre}</h2>`;
    modelo=`<h3>${modelo}</h3>`;
    precio=`<p>Precio: <b>${precio}</b></p>`
    return[nombre,modelo,precio]
}

let documentFragment=document.createDocumentFragment();

for(let i=0; i<20;i++){
    let div=document.createElement("DIV");
    div.classList.add(`item-${i}`, 'flex-item');
    let modeloRandom=Math.round(Math.random()*1000000);
    let precioRandom=Math.round(Math.random()*10+30);  
    let llave=crearLLaves(`Llave${i}`,`modelo ${modeloRandom}`,`${precioRandom}`) 
    div.innerHTML=llave[0]+llave[1]+llave[2];
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);