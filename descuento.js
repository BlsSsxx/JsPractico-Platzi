
function calcularPrecioFinal(precio, descuento){
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioDescuento) / 100
    return precioConDescuento;
}

function botonCalcularPrecio(preciohtml,descuentohtml){
    const precioInicial = document.getElementById("Precio");
    const precioIvalue = precioInicial.value;
    const Descuento = document.getElementById("Descuento");
    const Descuentovalue = Descuento.value;
    precioDescuento = calcularPrecioFinal(precioIvalue,Descuentovalue);
    alert("El precio final con descuento es: " +precioDescuento);
}
