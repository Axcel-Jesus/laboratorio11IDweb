bucle=true;
while(bucle){
    console.log("ingresa una opcion:\n 1. Calcular estadisticas de N notas\n 2. Contar numeros pares e impares de un rango\n3. Generar una tabla de multiplicar\n4. salir");
    let opcion=prompt("ingresa una opcion:\n 1. Calcular estadisticas de N notas\n 2. Contar numeros pares e impares de un rango\n3. Generar una tabla de multiplicar\n4. salir");
    let op=parseInt(opcion);
    console.log("opcion: "+opcion);
    switch(op){
        case 1:
            console.log("ingrese las notas y cuando termine ingrese -1");
            let notas=new Array();
            let numero=0;
            while(numero!=-1){
                let nota=prompt("ingrese una nota");
                notas.push(parseFloat(nota));
                numero=parseInt(nota);
            }
            console.log("las notas ingresadas son: "+notas);
            console.log("el promedio es: "+calcularPromedio(notas));
            console.log("el valor maximo es: "+calcularMaximo(notas));
            console.log("el valor minimo es: "+calcularMinimo(notas));
            console.log("La cantidad de numeros pares es: "+calcularNumeroPares(notas));
            console.log("La cantidad de numeros impares es: "+calcularNumeroImpares(notas));
            console.log("las notas sobre el promedio son: "+notassobrePromedio(notas));
            break;
        case 2:
            console.log("ingrese el rango de numeros");
            let rango1=prompt("ingrese el numero minimo");
            let rango2=prompt("ingrese el numero maximo");
            let numeros=new Array();
            for(let i=parseInt(rango1); i<=parseInt(rango2); i++){
                numeros.push(i);
            }
            console.log("los numeros son: "+numeros);
            console.log("la cantidad de numeros pares es: "+calcularNumeroPares(numeros));
            console.log("la cantidad de numeros impares es: "+calcularNumeroImpares(numeros));
            break;
        case 3:
            console.log("ingrse el numero del que quiere generar la tabla de multiplicar");
            let multiplicador=prompt("ingrse el numero del que quiere generar la tabla de multiplicar");
            console.log("ingrese hasta cuantos numeros quiere generar la tabla");
            let lim=prompt("ingrese hasta cuantos numeros quiere generar la tabla");
            let tabla=new Array();
            for(let i=0; i<=lim; i++){
                tabla.push(i*parseInt(multiplicador));
            }
            console.log("la tabla de multiplicar es: "+tabla);
            break;
        case 4:
            console.log("saliendo");
            bucle=false;
            break;
        default:
            console.log("opcion incorrecta");   
    }
}
function calcularPromedio(notas){
    let promedio=0;
    for(let i=0; i<notas.length; i++){
        promedio+=notas[i];
    }
    promedio=promedio/notas.length;
    return promedio;
}
function calcularMaximo(notas){
    let maximo=notas[0];
    for(let i=0; i<notas.length; i++){
        if(notas[i]>maximo){
            maximo=notas[i];
        }
    }
    return maximo;
}
function calcularMinimo(notas){
    let minimo=notas[0];
    for(let i=0; i<notas.length; i++){
        if(notas[i]<minimo){
            minimo=notas[i];
        }
    }
    return minimo;
}
function calcularNumeroPares(notas){
    let numeroPares=0;
    for(let i=0; i<notas.length; i++){
        if(notas[i]%2==0){
            numeroPares++;
        }
    }
    return numeroPares;
}
function calcularNumeroImpares(notas){
    let numeroImpares=0;
    for(let i=0; i<notas.length; i++){
        if(notas[i]%2!=0){
            numeroImpares++;
        }
    }
    return numeroImpares;
}
function notassobrePromedio(notas){
    let notasSobrePromedio=new Array();
    let promedio=calcularPromedio(notas);
    for(let i=0; i<notas.length; i++){
        if(notas[i]>promedio){
            notasSobrePromedio.push(notas[i]);
        }
    }
    return notasSobrePromedio;
}