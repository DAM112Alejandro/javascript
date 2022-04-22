// let free =false;

//  const validarHorario = (time)=>{
//     let edad=prompt("Cual es tu edad: ")
//     if (edad>18){
//         if(time>=2 && time<7 && free==false){
//             alert("Puedes pasar gratis");
//             free=true;
//         }else{
//             alert("Puedes pasar pero tienes que pagar");}
//     }else{alert("No puedes pasar")}
// }
// validarHorario(5)

// let cantidad= prompt("Cuantos alumnos son: ");
// let alumnostotales=[];
//  for(let i=0;i<cantidad;i++){
//      alumnostotales[i]=[prompt("Nombre del alumno: " +(i+1)),0];
//  }

// const tomarAsistencia= (nombre, p)=>{
//     let presencia=prompt(nombre);
//     if(presencia=="p" || presencia=="P"){
//         alumnostotales[p][1]++
//     }
// }
// for(let i=0; i<30;i++){
//     for(alumno in alumnostotales){
//         tomarAsistencia(alumnostotales[alumno][0],alumno);
//     }
// }
// for(alumno in alumnostotales){
//     let resultado=`${alumnostotales[alumno][0]}:<br>
//     ______Asistencias: ${alumnostotales[alumno][1]} <br>
//     ______Ausencias: ${30-alumnostotales[alumno][1]}`;
//     if(30-alumnostotales[alumno][1]>18){
//         resultado+="reprobado por no asistir <br>"
//     }else{
//         resultado+="<br><br>"
//     }
//     document.write(resultado)
// }

const sumar= (num1,num2)=>{
    return parseInt(num1)+parseInt(num2);
}
const restar= (num1,num2)=>{
    return parseInt(num1)-parseInt(num2);
}
const mult= (num1,num2)=>{
    return parseInt(num1)*parseInt(num2);
}
const div= (num1,num2)=>{
    return parseInt(num1)/parseInt(num2);
}
alert("que oprecion quieres hacer");
let oprecion=prompt("1: suma, 2: resta, 3: mult, 4: div");

if(oprecion==1){
    let nu1=prompt("1er numero para sumar");
    let nu2=prompt("2ndo numero para sumar");
    let resultado=sumar(nu1,nu2);
    alert(`${resultado}`);
}
else if(oprecion==2){
    let nu1=prompt("1er numero para restar");
    let nu2=prompt("2ndo numero para restar");
    let resultado=restar(nu1,nu2);
    alert(`${resultado}`);
}

else if(oprecion==3){
    let nu1=prompt("1er numero para mult");
    let nu2=prompt("2ndo numero para mult");
    let resultado=mult(nu1,nu2);
    alert(` ${resultado}`);
}
else if(oprecion==4){
    let nu1=prompt("1er numero para div");
    let nu2=prompt("2ndo numero para div");
    let resultado=div(nu1,nu2);
    alert(` ${resultado}`);
}
else{alert("No se ah encontrado la operacion");}