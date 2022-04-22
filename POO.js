class Animal{
    constructor(especie,edad,color){
        this.especie=especie;
        this.edad=edad;
        this.color=color;
        this.informacion=`soy ${this.especie}, tengo ${this.edad} y soy  de color ${this.color}`
    }
    verInfo(){
        document.write(this.informacion + "<br>");
    }
    
}

class Perro extends Animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza=null;
    }
   
    set setRaza(newName){
        this.raza=newName;
    }
    get getRaza(){
        return this.raza;
    }

}
const perro = new Perro("perro",5,"rojo","doberman");
const gato = new Animal("gato",4,"gris");

perro.setRaza = "Pedro";
document.write(perro.getRaza);