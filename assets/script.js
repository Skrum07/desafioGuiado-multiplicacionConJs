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

