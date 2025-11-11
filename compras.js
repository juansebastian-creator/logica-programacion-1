let totalItems = 0;
let totalPrecio = 0;
let productosCarrito = [];

function agregarAlCarrito (nombre,precio){
    totalItems ++;
    document.getElementById('total-items').textContent = totalItems;

    totalPrecio += precio;
    document.getElementById('total-precio').textContent = totalPrecio;

    productosCarrito.push(nombre);

    console.log('Productos en el carrito: ', productosCarrito);

    if (totalPrecio > 50000) {
        alert ('¡Envio gratis aplicado!');
    }
}

function vaciarCarrito () {
    totalItems = 0;
    totalPrecio = 0;
    productosCarrito = [];

    document.getElementById("total-items").textContent = totalItems;
    document.getElementById("total-precio").textContent = totalPrecio;
  
     alert("Carrito vaciado");
}