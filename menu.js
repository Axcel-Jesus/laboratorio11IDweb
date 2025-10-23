let bucle=true;
while(bucle){
    console.log("ingrese una opcion:\n 1. Calcular area del circulo.\n 2.Calcular area del rectangulo. \n 3.salir ");
    let opcion=prompt("ingrese una opcion:\n 1. Calcular area del circulo.\n 2.Calcular area del rectangulo. \n 3.salir ");
    let op=parseInt(opcion);
    console.log("opcion: "+opcion);
    switch(op){
        case 1:
            console.log("ingrese el radio del circulo");
            let radio=prompt("ingrese el radio del circulo");
            let areac=parseFloat(radio)*parseFloat(radio)*3.14;
            console.log("la area del circulo es: "+areac);
            continue;
        case 2:
            console.log("ingrese el ancho y el alto del rectangulo");
            let ancho=prompt("ingrese el ancho del rectangulo");
            let alto=prompt("ingrese el alto del rectangulo");
            let arear=parseFloat(ancho)*parseFloat(alto);
            console.log("la area del rectangulo es: "+arear);
            continue;
        case 3:
            console.log("saliendo");
            bucle=false;
            break;
        default:
            console.log("opcion incorrecta");
    }
}
