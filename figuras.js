// CODIGO CUADRADO
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("El lado del cuadrado mide: " +ladoCuadrado)
function perimetroCuadrado(lado){
    return lado*4;
}
function areaCuadrado(lado){
    return lado*lado;
}
// const perimetroCuadrado = ladoCuadrado*4;
// console.log("El perimetro del cuadrado es: "+perimetroCuadrado)
// const areaCuadrado = ladoCuadrado*ladoCuadrado;
// console.log("El area del cuadrado es: " +areaCuadrado)
console.groupEnd();
// CODIGO TRIANGULO
console.group("Triangulos");
// const ladotriangulo1= 6;
// const ladotriangulo2=6;
// const basetriangulo=4;
// const alturatriangulo= 5.5;
function perimetrotriangulo(lado1, lado2, base){
    if(Number(lado1)!=Number(lado2)){
        alert("No es un triangulo isosceles")
    }else{
        return (Number(lado1)+Number(lado2)+Number(base));
    }
    
}
function areatriangulo(base, altura){
    return (Number(base)*Number(altura))/2;
}
// console.log("Los lados del triangulo miden: " +ladotriangulo1 +","+ladotriangulo2+","+basetriangulo)
// const perimetrotriangulo = ladotriangulo1+ladotriangulo2+basetriangulo;
// console.log("El perimetro del triangulo es: "+perimetrotriangulo)
// const areatriangulo = (basetriangulo*alturatriangulo)/2;
// console.log("El area del triangulo es: " +areatriangulo)

console.groupEnd();
//CODIGO CIRCULO
console.group("CIRCULOS");
// //radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " +radioCirculo)
// //diametro
// const diametrocirculo= radioCirculo * 2;
// console.log("El diametro del circulo es: " +diametrocirculo)
// //Pi
function diametro(radio){
    return radio*2;
}
function perimetroCirculo(radio){
    return (radio*2)*Math.PI;
}
function areaCirculo(radio){
    return (radio*radio)*Math.PI;
}
// const pi = Math.PI;
// console.log("PI tiene un valor de : " +pi)
// //circunferencia
// const perimetroCirculo = diametrocirculo * pi;
// console.log("El perimetro del circulo es: " +perimetroCirculo)
// //Area
// const areaCirculo = (radioCirculo*radioCirculo)
//  * pi;
// console.log("El area del circulo es: " +areaCirculo)
console.groupEnd();

function calcularPerimetroCuadrado(){
    const input = document.getElementById("ladoCuadrado")
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perimetro es: " + perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("ladoCuadrado")
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El area es: " + area);
}
// triangulo
function calcularPerimetroTriangulo(){
    const lado1T = document.getElementById("ladoTriangulo1");
    const lado2T = document.getElementById("ladoTriangulo2");
    const baseT = document.getElementById("baseTriangulo");

    const value1T = lado1T.value;
    const value2T = lado2T.value;
    const valueB = baseT.value;
    const perimetroT = perimetrotriangulo(value1T,value2T,valueB);
    alert("El perimetro es: " + perimetroT)
}
function calcularAlturaTriangulo(lado1, lado2, base){
    if(Number(lado1) === Number(lado2) && Number(lado1)!=Number(base)){
        const altura = Math.sqrt(Number(lado1)**2-(Number(base)/2)**2)
        return altura
    }
    
}
function calcularAreaTriangulo(){
    const lado1T = document.getElementById("ladoTriangulo1");
    const lado2T = document.getElementById("ladoTriangulo2");
    const baseT = document.getElementById("baseTriangulo");

    const value1T = lado1T.value;
    const value2T = lado2T.value;
    const valueB = baseT.value;

    let alturaT = calcularAlturaTriangulo(value1T, value2T, valueB);
    let areaT = areatriangulo(valueB, alturaT)
    alert("El Area del triangulo es: " +areaT);
}

// circulo
function calcularPerimetroCirculo(){
    const radioC = document.getElementById("radioCirculo");
    const valueC = radioC.value;

    perimetroC = perimetroCirculo(valueC);
    alert("El perimetro del circulo es: " + perimetroC)
}
function calcularAreaCirculo(){
    const radioC = document.getElementById("radioCirculo");
    const valueC = radioC.value;

    areaC = areaCirculo(valueC);
    alert("El area del circulo es: " + areaC)
}