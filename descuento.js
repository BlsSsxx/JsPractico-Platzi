const precio = 150;
const descuento = 20;

const porcentajePrecioDescuento = 100 - descuento;
const precioConDescuento = (precio * porcentajePrecioDescuento) / 100

console.log({
    precio,
    descuento,
    porcentajePrecioDescuento,
    precioConDescuento
})