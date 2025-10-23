numero=prompt("ingrese un numero");
let num=parseInt(numero);
let suma=0;
for (let i=1; i<=num; i++){
    if(i%5==0){
        continue;
    }else{
        suma+=i;
    }
}
console.log("la suma de los numeros naturales menos multiples de 5 es: "+suma); 