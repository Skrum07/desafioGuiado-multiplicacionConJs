let multiplo = parseInt(prompt("Ingrese un numero entre 1 y 20 inclusive."));

const validador = (x) => {
    if(x < 1 || x > 20) {
        console.log("numero fuera del rango aceptado");
        return false;
    }
    return true;
}

const tablaMulti = (x) => {
    for(let i=1; i <= x; i++){
        let resultado = i * x;
        console.log(`${i} x ${x} = ${resultado}`);
    }
}

const factoriales = (x) => {
    for(let i = 1; i <= x ; i++) {
        let resultado = 1;
        for(let j = 1; j <= i; j++){
            resultado * j;
        }
        console.log(`El factiroal de ${i} es ${resultado}.`);
    }
}
let validacion = validador(multiplo);

if(validacion){
    tablaMulti(multiplo);
    factoriales(multiplo);
}

validador(multiplo);
tablaMulti(multiplo);
factoriales(multiplo);
