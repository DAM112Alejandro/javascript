// class telefono{
//     constructor(color, peso, resolP, resolC, Ram){
//         this.color=color;
//         this.peso=peso;
//         this.resolP=resolP;
//         this.resolC=resolC;
//         this.Ram=Ram;
//         this.endido=false;
//     }
//     encender(){
//         if (this.endido == false){
//             alert("El telefono esta encedido");
//             this.endido=true;
//         }else{alert("El telefono  esta apagado");
//                 this.endido=false;
//         }
//     }
//     reiniciar(){
//         if(this.endido==false){
//             alert("El telefono se esta reiniciando");
//         }else{ alert("El telefono esta apagado");}
//     }
//     tomarfotos(){
//         alert(`foto tomada en una resolucion de ${this.resolC}`);
//     }
//     grabar(){
//         alert(`video grabado en una resolicion de ${this.resolC}`);
//     }
//     info(){
//         return `Color: <b>${this.color}</b><br>
//         Peso: <b>${this.peso}</b><br>
//         Resolicion de camara: <b>${this.resolC}</b><br>
//         Resolucion de pantalla: <b>${this.resolP}</b><br>
//         Ram: <b>${this.Ram}</b><br>`
//     }
// }
// class altaGama extends telefono{
//     constructor(color, peso, resolP, resolC, Ram, rdce){
//         super(color, peso, resolP, resolC, Ram);
//         this.resolucion_de_camara_extra=rdce;
//     }
//     grabarVideoLento(){
//         alert("estas grabando en camara lenta");
//     }
//     reconocimientofacial(){
//         alert("Estas iniciando un reconocimento facial");
//     }
//     infoAltaGama(){
//         return this.info()+`resolicion de camara trasera: <b>${this.resolucion_de_camara_extra}</b><br>`
//     }
// }

// // const telefono1= new telefono("rojo","100 gr","5","full hd", "2gb");
// // const telefono2= new telefono("negro","150 gr","6","hd", "1gb");
// // const telefono3= new telefono("blanco","130 gr","7","full hd", "2gb");
// // document.write(`${telefono1.info()}<br>
// // ${telefono2.info()}<br>
// // ${telefono3.info()}<br>`)
// // telefono1.encender();
// // telefono1.tomarfotos();
// // telefono1.grabar();
// // telefono1.reiniciar();
// // telefono1.encender();


// const telefono4 =new altaGama("rojo","120 gr","5.4","full hd", "3gb","hd");
// const telefono5 =new altaGama("negro","120 gr","5.4","4k", "4gb"," full-hd");
// document.write(`${telefono4.infoAltaGama()}<br>
// ${telefono5.infoAltaGama()}<br>`);

class App{
    constructor(descargas, puntuacion, peso){
        this.descargas=descargas;
        this.puntuacion=puntuacion;
        this.peso=peso;
        this.iniciada=false;
        this.instalada=false;
    }
    abrir(){
        if(this.iniciada==fasle && this.instalada==true){
            this.iniciada=true;
            alert("la apliacion esta iniciada"); 
        }
    }
        cerrar(){
            if(this.iniciada==true && this.instalada==true){
                this.iniciada=false;
                alert("la apliacion esta apagada"); 
            }
    }
    instalar(){
        if(this.instalada==false){
            this.instalada=true;
            alert("la aplicacion esta instalada")
        }
    } 
    desinstalar(){
        if(this.instalada==true){
            this.instalada=false;
            alert("la aplicacion esta desistalada")
        }
    }
    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b><br>
        Puntuacion: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br> `
    } 
}
const app1 = new App("16.000","5 estrellas","900mb"); 
document.write(`${app1.appInfo()}<br>`);

