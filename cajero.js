console.log("este es un cajero automatico");
let monto=prompt("ingrese monto");
let dinero=parseInt(monto);
let billetes="";
let de100=0;
let de50=0;
let de20=0;
let de10=0;
let sobrante=dinero;
if(dinero/100>=1){
    de100=(dinero-dinero%100)/100;
    sobrante=dinero%100;
    billetes+=de100+" billetes de 100 ,";
}
//el siguente if se define asi porque si se llega a pedir dos billetes de 50 seria mejor uno de 100, no hay nesecidad de hacer mucho calculo
if(sobrante/50>=1){
    de50=1;
    sobrante-=50;
    billetes+="1 billete de 50 ,";
}
if(sobrante/20>=1){
    if(sobrante>=40){
        de20=2;
        sobrante-=40;
        billetes+="2 billetes de 20 ,";
    }else{
        de20=1;
        sobrante-=20;
        billetes+="1 billete de 20 ,";
        //el siguente if es porque es el unico caso que se va requerir un billete de 10, siempre que tiene 2 billetes de 20 y se requiere uno de 10 es mejor uno de 50
        if(sobrante/10>=1){
            de10=1;
            sobrante-=10;
            billetes+="1 billete de 10 ,";
        }
    }
}
console.log("se le dara, "+billetes+" y un residuo de "+sobrante+" soles");