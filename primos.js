console.log("te damos los numeros primos hasta tu numero");
let numero = prompt("ingresa un numero");
let num = parseInt(numero);
let primos="";
for (let i = 2; i <= num; i++) {
    let divisores=0;
    for (let j = 2; j <= i; j++) {
        if (i % j == 0) {
            divisores++;
        }
    }
    if(divisores==2){
        primos+=i+",";
    }
}
console.log("los numeros primos encontrados son: "+primos);