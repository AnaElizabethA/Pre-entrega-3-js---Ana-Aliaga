function saludoInicial(nombreCompleto) {
  if (!nombreCompleto) {
    alert("NO SE RECONOCE EL USUARIO");
  } else {
    const mensaje = `BIENVENID@ ${nombreCompleto} a ARRIMOS MORALES`;
    alert(mensaje);  
  } 
}

let nombrePersona = prompt("INGRESE SU USUARIO PARA COMENZAR");
nombrePersona = nombrePersona.trim()
saludoInicial(nombrePersona);

let products = [
  {
    id: 1,
    modelo: "diana",
    categoria: "arrimos",
    precio: 27990,
    stock: 5,
  },
  {
    id: 2,
    modelo: "isabela",
    categoria: "arrimos",
    precio: 29990,
    stock: 3,
  },
  {
    id: 3,
    modelo: "tradicional",
    categoria: "arrimos",
    precio: 25990,
    stock: 8,
  },
  {
    id: 4,
    modelo: "invierno",
    categoria: "mesa de centro",
    precio: 59990,
    stock: 4,
  },
  {
    id: 5,
    modelo: "clasico",
    categoria: "mesa de centro",
    precio: 49990,
    stock: 7,
  },
  {
    id: 6,
    modelo: "vintage",
    categoria: "mesa de centro",
    precio: 54990,
    stock: 3,
  },
  {
    id: 7,
    modelo: "gran rack tv",
    categoria: "modulares",
    precio: 87990,
    stock: 6,
  },
  {
    id: 8,
    modelo: "cajonera bedroom",
    categoria: "modulares",
    precio: 105990,
    stock: 8,
  },
  {
    id: 9,
    modelo: "rack tv simple",
    categoria: "modulares",
    precio: 49990,
    stock: 6,
  },
  {
    id: 10,
    modelo: "estante pinito",
    categoria: "personalizados",
    precio: 59990,
    stock: 2,
  },
  {
    id: 11,
    modelo: "estante mini bar",
    categoria: "personalizados",
    precio: 26990,
    stock: 5,
  },
  {
    id: 12,
    modelo: "estante clasico",
    categoria: "personalizados",
    precio: 55990,
    stock: 4,
  },
];

// Obtener referencias a los elementos del DOM
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const categorySelect = document.getElementById('category-select');
const filterButton = document.getElementById('filter-button');

// Agregar eventos de escucha de eventos a los elementos
searchButton.addEventListener('click', () => {
  // Realizar la búsqueda
});

filterButton.addEventListener('click', () => {
  // Realizar el filtrado
});

// Botón Filtrar
const botonFiltrar = document.getElementById('filter-buton');
botonFiltrar.addEventListener('click', () => {
  const categoria = prompt('Ingrese la categoría a filtrar:');
  const precioMin = prompt('Ingrese el precio mínimo:');
  const precioMax = prompt('Ingrese el precio máximo:');
  const productosFiltrados = products.filter(producto =>
    producto.categoria.toLowerCase() === categoria.toLowerCase() &&
    producto.precio >= precioMin && producto.precio <= precioMax);
  // Aquí puedos mostrar los resultados en pantalla
});

let productos = products.map(product => {
  return new Producto(product.id, product.modelo, product.categoria, product.precio, product.stock)
})
let carrito = []

let listaProductos = "Ingrese el numero de la opcion que desea ver: \n0: para salir\n1: para mostrar todos los modelos \n2: escogerlos por categoria \n3: escogerlos por precio \n4: para ver la cantidad en stock \n5:agregar productos al carrito" 
 + (productos.map(producto => producto.id + " " + producto.modelo + " " + producto.categoria + " " + producto.precio)).join('\n')
 
let opcion
do{
  opcion = Number(prompt(listaProductos))
  if(opcion === 1){
    let todosProductos= productos.map(producto =>"ID: " + producto.id + " MODELO: " + producto.modelo + " CATEGORIA: " + producto.categoria + " PRECIO: " + producto.precio).join("\n")
    alert(todosProductos)
  }else if(opcion === 2){
    let categoria = prompt("Ingrese la categoria que desea ver: ")
    let productosPorCategoria = productos.filter(producto => producto.categoria === categoria)
    let productosCategoriaString = productosPorCategoria.map(producto => "ID: " + producto.id + " MODELO: " + producto.modelo + " PRECIO: " + producto.precio + " STOCK: " + producto.stock).join("\n")
  alert(productosCategoriaString);
  }else if (opcion === 3){
  let precio= prompt("precios de menor a mayor")
  let productosPorPrecio= productos.filter(producto => producto.precio === precio)
  let productoPrecioString= productosPorPrecio.map(producto => "ID: " + producto.id + "MODELO: " + producto.modelo + "PRECIO: " + producto.precio).join("\n")
  alert (productoPrecioString)
  }else if (opcion === 4){
  let stock= prompt("cantidad de productos disponibles")
  let productoStock= productos.filter(producto => producto.stock == stock)
  let productoEnStock= productoEnStock.map (producto => "ID: " + producto.id + "MODELO: " + producto.modelo + "DISPONIBLES: " + producto.stock).join("\n")
  alert (productoEnStock)
  }else if (opcion === 5){
  let agregarProductos = "seleccione el n° del item para agregar al carrito: \n0:para salir"+
  productos.map(producto => producto.id + " MODELO: " + producto.modelo + "CATEGORIA " + producto.categoria + "PRECIO " + producto.precio).join('\n')
  let idProducto
  do{
    idProducto = Number(prompt(agregarProductos))
    let idProductoIngresado = productos.find(producto => producto.id === idProducto)
    if (idProductoIngresado){
      let ubicacionProducto = carrito.findIndex(producto => producto.id === idProductoIngresado.id)
      if (ubicacionProducto != -1){
        carrito[ubicacionProducto].cantidadUnidades++
        carrito[ubicacionProducto].subtotal = carrito[ubicacionProducto].valorUnidad * carrito[ubicacionProducto].cantidadUnidades
        alert ("Producto agregado al carrito de compras")
      }else{
        carrito.push({
          id: idProductoIngresado.id,
          modelo: idProductoIngresado.modelo,
          categoria: idProductoIngresado.categoria,                       
          cantidadUnidades: 1,
          valorUnidad: idProductoIngresado.precio,
          subtotal: idProducto.precio
        })
        alert("Su producto fue agregado al carrito")
      }
    }
  } while (idProducto !=0)
}} while (opcion != 0) 


// envio()
function envio() {
  if (total >= 10000) {
    alert("El envio es gratuito")
  } else {
    total += 1000
    alert("el costo de envio es de 1000, el total es: " + total)
  }
}

function metodoDePago() {
  let metodo = prompt("ingrese el metodo de pago, tarjeta o efectivo" )
  if (metodo == "tarjeta") {
    total *= 1.1
    console.log(total);
  }else if ( metodo == "efectivo") {
    total -= 1000
    alert("tenes un descuento de 1000, el total es:" + total)
  }

}

envio ()

metodoDePago ()