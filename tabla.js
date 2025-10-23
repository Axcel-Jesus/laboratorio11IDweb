console.log("ingrese numero que desea generar tabla");
let numero=prompt("ingrese numero que desea generar tabla");
let num=parseInt(numero);
let tabla=new Array();
for(let i=0; i<12; i++){
    tabla.push(num+"x"+(i+1)+"="+num*(i+1));
}