console.log("ingresar presupuesto");
let presupuesto=prompt("ingresar presupuesto");
let presupuesto2=parseFloat(presupuesto);
console.log("el presupuesto es: "+presupuesto2);
let productos=new Array();
let suma=0;
let comprando=true;
let i=1;
while(comprando){
    console.log("ingresa precio del producto: "+i);
    let precio=prompt("ingresa precio del producto: "+i);
    let price=parseFloat(precio);
    suma+=price;
    if(suma>presupuesto2){
        console.log("no se puede comprar mas productos");
        suma-=price;
        break;
    }
    productos.push(precio);
    console.log("el precio del producto "+i+" es: "+precio);
    i++;
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