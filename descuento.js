
function calcularPrecioFinal(precio, descuento){
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioDescuento) / 100
    return precioConDescuento;
}

const cupones = [
    "invierno21",
    "Jah",
    "mjca"
]



function botonCalcularPrecio(preciohtml,descuentohtml){
    const precioInicial = document.getElementById("Precio");
    const precioIvalue = precioInicial.value;
    const Cupones = document.getElementById("Cupones");
    const Cuponesvalue = Cupones.value;

    let descuento;

    if(Cuponesvalue === "invierno21"){
        descuento = 15;
    } else if(Cuponesvalue === "Jah"){
        descuento = 20;
    } else if(Cuponesvalue === "mjca"){
        descuento = 35;
    } else{
        alert("El cupon " +Cuponesvalue +" no existe")
    }

    precioDescuento = calcularPrecioFinal(precioIvalue,descuento);

    const resultadoP = document.getElementById("ResultadoPrecio");
    resultadoP.innerText = "El precio final es: $" + precioDescuento + " con un " +descuento +"% de descuento";
}

