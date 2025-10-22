console.log("Dinos tu edad");
let edad=prompt("edad: ");
if(edad<12&&edad>=0){
    console.log("Niño");
}else if(edad>=12&&edad<=17){
    console.log("Adolecente");
}else if(edad>17&&edad<60){
    console.log("Adulto");
}else if(edad>=60){
    console.log("Adulto mayor");
}else{
    console.log("no se admite negativos");
}