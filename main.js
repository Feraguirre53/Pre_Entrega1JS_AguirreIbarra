//Idea = calculadora de pesos de producto a envasar segun ley de lealtad comercial en latas de pintura
/* Segun los datos de:
- Peso especifico de producto
- Presentacion
- unidad de medida de producto a envasar (KG o LTS)
- Porcentajes admisibles 

Se determinan los valores maximos y minimos de KG a colocar en una lata de pintura.*/

//SIMULADOR PARA CALCULAR MAXIMOS Y MINIMOS ADMISIBLES EN UNA LATA

function calculadorDePesoMaximo (pesoEspecifico,tamaño){
//defino caracteristicas de producto

let pesoMaximo = (pesoEspecifico * tamaño * 1)
return (pesoMaximo);
}

function calculadorDePesoMinimo1 (pesoEspecifico,tamaño){
    //defino caracteristicas de producto menor igual a 4 lts
    let pesoMinimo = (pesoEspecifico * tamaño *0.97);
    return (pesoMinimo);
    }

function calculadorDePesoMinimo2 (pesoEspecifico,tamaño){
    //defino caracteristicas de producto mayor a 4 lts
    let pesoMinimo = (pesoEspecifico * tamaño *0.98);
    return (pesoMinimo);
    }

let pesoEspecifico = parseFloat(prompt ("Ingrese el Peso Especifico del producto a envasar: "));
let tamaño = parseInt (prompt("Ingrese el tamaño de la lata a envasar:"));

//llamo a las funciones para que me muestre Peso Máximo y Minimo

if(tamaño<=4){

    let pesoMinAdmisible = calculadorDePesoMinimo1 (pesoEspecifico,tamaño)
    alert("El peso minimo de envasado es: " + pesoMinAdmisible);

    let pesoMaxAdmisible = calculadorDePesoMaximo (pesoEspecifico,tamaño)
    alert("El peso maximo de envasado es: " + pesoMaxAdmisible);
    alert("No te pases de ese peso!!");}

    else if (tamaño>4){
        let pesoMinAdmisible = calculadorDePesoMinimo2 (pesoEspecifico,tamaño)
        alert("El peso minimo de envasado es: " + pesoMinAdmisible);

        let pesoMaxAdmisible = calculadorDePesoMaximo (pesoEspecifico,tamaño)
        alert("El peso maximo de envasado es: " + pesoMaxAdmisible);
        alert("No te pases de ese peso!!");
    }
