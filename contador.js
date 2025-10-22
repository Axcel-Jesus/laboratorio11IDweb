console.log("ingresar 10 numeros enteros");
let numeros=10;
let pares="";
let par=0;
let impares="";
let impar=0;
while(numeros!=0){
    numeros--;
    let numero=prompt("ingresa numero");
    let num=parseInt(numero);
    if(Number.isInteger(num/2)){
        pares+=numero+" ";
        par++;
    }else{
        impares+=numero+" ";
        impar++;
    }
}
console.log("los numeros pares son "+par+" y solo los siguentes: "+pares);
console.log("los numeros impares son "+impar+" y solo los siguentes: "+impares);