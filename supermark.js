let productos=new Array();
for(let i=0; i<10; i++){
    console.log("ingresa precio del producto: "+i);
    let precio=prompt("ingresa precio del producto: "+i);
    let price=parseFloat(precio);
    productos.push(precio);
    console.log("el precio del producto "+i+" es: "+precio);
}
let suma=0;
for(let i=0; i<productos.length; i++){
    suma+=productos[i];
}
console.log("el total parcial es: "+suma);
if(suma>=100){
    console.log("se aplica descuento de 10%");
    let descuento=suma*0.1;
    console.log("el descuento es: "+descuento);
    let total=suma-descuento;
    console.log("el total final es: "+total);
}else if(suma>=50){
    console.log("se aplica descuento de 5%");
    let descuento=suma*0.05;
    console.log("el descuento es: "+descuento);
    let total=suma-descuento;
    console.log("el total final es: "+total);
}else{
    console.log("no se aplica descuento");
    let total=suma;
    console.log("el total final es: "+total);
}