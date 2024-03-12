let multiplo = parseInt(prompt("Ingrese un numero entre 1 y 20 inclusive."));

let validador = (x) => {
    if(x < 1 || x > 20) {
        console.log("numero fuera del rango aceptado");
        return false;
    }
    return true;
}

let tablaMulti = (x) => {
    for(let i=1; i <= x; i++){
        let resultado = i * x;
        console.log(`${i} x ${x} = ${resutado}`);
    }
}

