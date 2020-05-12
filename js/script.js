/*var op = parseInt(prompt("OP: "));
var x=0, y=0; 

function suma(){
    return (parseInt(x)+parseInt(y));
}
function resta(a,b){
    return (parsenInt(a)-parseInt(b));
}
function multiplicacion(a,b){
    return (parsenInt(a)*parseInt(b));
}
function division(a,b){
    if (b==0) {
        return 0;
    }
    return (parsenInt(a)/parseInt(b));;

}
function raiz_cubica(a){
    return Math.pow(parseInt(a),1/3);
}
function factorial(a) {
    let i, s=1;
    for(i=1; i<a+1; i++) {
        s*=i;
        
    }
    return s;
}
function potencia(a){
    return a*a;
}
function datos2(){
    x = prompt("N1: ");
    y = prompt("N2: ");

}
function dato1(){
    x = Number(prompt("N: "));
}

switch(op) {
    case 1: datos2();
            document.write("La suma es: ",suma());
        break;
    case 2:


    default:
        break;
}
*/
function mensaje(){
    var x = document.getElementById("numero1").value;
    var y = document.getElementById("numero2").value;
    var op = document.getElementById("operacion").value;
    switch(op) {
        case '1': document.getElementById("resultado").value=(parseInt(x)+parseInt(y));
        
        break;
        }
    }
  
