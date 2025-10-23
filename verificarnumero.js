console.log("verifica si es numero de Armstrong");
let numer=prompt("ingrese un numero");
num=parseInt(numer);
let suma=0;
let digitos=0;
let digit=true;
while(digit){
    digitos++;
    let resto=num%10;
    num=parseInt(num/10);
    if(num<1){
        digit=false;
    }
}
let num2=parseInt(numer);
for(let i=0; i<digitos; i++){
    let resto=num2%10;
    suma+=resto*resto*resto;
    num2=parseInt(num2/10);
}
if(suma==parseInt(numer)){
    console.log("es numero de Armstrong");
}else{
    console.log("no es numero de Armstrong");
}
