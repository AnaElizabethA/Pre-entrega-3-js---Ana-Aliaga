const listadoProductos = './productos.json';
const contenedorProductos = document.getElementById('mostrarProductos');

fetch(listadoProductos)
 .then(respuesta => respuesta.json())
 .then(datos => {
  console.log(datos);
  mostrarProductos(datos);
 })
 .catch((error) => console.log (error));



//mensaje de bienvenida
Swal.fire({
  title: '"Bienvenido a Arrimos Morales"',
  text: 'aqui podra ver todos nuestros modelos.',
  imageUrl: './img/logoarrimo.jpg',
  imageWidth: 500,
  imageHeight: 250,
  imageAlt: 'Custom image',
})



const carrito = JSON.parse(localStorage.getItem("carrito")) || []; 


function mostrarProductos(productos){
  contenedorProductos.innerHTML = " "
  productos.forEach((producto) => {
    const card = document.createElement('div');
    card.className = 'card';
     card.innerHTML =`<h3>${producto.modelo}</h3>
                    <p>${producto.categoria}</p>
                    <img class="misEstilos" src="./${producto.img}" alt="">
                    <p>El precio es de $${producto.precio}</p>
                    <button id="${producto.id}" >Agregar al Carrito</button>

                    `  

    contenedorProductos.appendChild(card);  

    const btnComprar = document.getElementById(`${producto.id}`);
    btnComprar.addEventListener('click', agregarALCarrito);

                 
  })
}


function agregarALCarrito(e){
  e.preventDefault();

  console.log(e.target.id);

  const id = parseInt(e.target.id);
  fetch(listadoProductos)
  .then((respuesta)=> respuesta.json())
  .then((datos) => {
    const prod = datos.find((p)=> p.id === id);
   carrito.push(prod);
  
  localStorage.setItem("carrito", JSON.stringify (carrito));
 
  console.log(carrito); 

   
Swal.fire('Su producto se agrego al carrito');
})
}




let boton = document.getElementById("search-button")
boton.addEventListener("click", buscar)

//con este se filtraria el buscador al ingresar un nombre
function buscar() {
  let buscador = document.getElementById("search-input");
  console.log(buscador.value);

  fetch(listadoProductos)
   .then((respuesta)=> respuesta.json())
   .then((listadoProductos) => {
  let arrayFiltrado = listadoProductos.filter((producto) => producto.modelo.includes(buscador.value));
  console.log(arrayFiltrado);
  mostrarProductos (arrayFiltrado);
})
}

let button = document.getElementById("filter-button");
button.addEventListener("click", filtrar)

//este boton es para que filtre una busqueda por categoria
function filtrar() {
  let buscador = document.getElementById("category-select");
  console.log (buscador.value);

  fetch(listadoProductos)
  .then((respuesta)=> respuesta.json())
  .then((listadoProductos) => {
  let arrayFiltrado = listadoProductos.filter((producto) => producto.categoria === (buscador.value));
  mostrarProductos (arrayFiltrado);
  /*if ((buscador.value) === prod.categoria); {
    mostrarProductos(arrayFiltrado);
  } else { ((buscador.value) === ("category-select")); 
  mostrarProductos(products);
  }*/
  })
}


function arrayProductos (array){
  nuevoDiv.innerHTML=''
  array.forEach((prod)=>{

    let divContenedor= document.createElement('div')
    divContenedor.innerHTML=`<h1>${prod.id}</h1>
      <h2>${prod.modelo}</h2>
      <h3>${prod.categoria}</h3>
      <h4>${prod.precio}</h4>
      <h4>${prod.stock}</h4>
      <img src-${prod.img}>`

    nuevoDiv.append(divContenedor)

})

}