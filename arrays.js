//arrays
/*let frutas=["banana", "manzana", "pera"];
document.write(frutas[1]);*/
//arrays asociativos    
/*let pc={
    nombre:"Al",
    procesador:"intel i9",
    ram:"16gb",
    espacio:"1tb"
};
let nombre=pc["nombre"];
let frase=`el nombre del pc es: ${nombre} <br>`;
document.write(frase);*/
//while
/*let numero=0;
while(numero<10){
    numero++;
    document.write(numero + "<br>")
    if (numero==6){
        break;
    }
}*/
//do while
/*do { 
    document.write(numero + "<br>")
    numero++;
}
while(numero<10)*/
//for
/*for (let i = 0; i < 6; i++) {
    if (i==3){
        continue;
    }

    document.write(i + "<br>");
}*/

//for in/off
/*let animales=["gato", "perro","dinosaurio"];
for (animal in animales) {
    document.write(animales);
    
}
document.write("<br>")
for (animal of animales) {
    document.write(animal);
}*/
//label
/*let array1=["maria","josefa","roberta"];
let array2=["pedro","marcelo",array1];
forRancio:
for(let array in array2){
    if(array == 2){
        for (let array of array1) {
            document.write(array + "<br>") 
            break forRancio; 
        }
    }else{document.write(array2[array] + "<br>")}
}*/