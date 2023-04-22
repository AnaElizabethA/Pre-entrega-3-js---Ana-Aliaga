
const products = [
  {
    id: 1,
    modelo: "Modelo diana",
    categoria: "arrimos",
    precio: 27990,
    stock: 5,
    img: "./img/arrimo con cajon.jpg",
  },
  {
    id: 2,
    modelo: "Modelo isabela",
    categoria: "arrimos",
    precio: 29990,
    stock: 3,
    img:"./img/arrimo doble.jfif",
  },
  {
    id: 3,
    modelo: "Modelo tradicional",
    categoria: "arrimos",
    precio: 25990,
    stock: 8,
    img:"./img/arrimo ormal.jpg",
  },
  {
    id: 4,
    modelo: "Modelo invierno",
    categoria: "mesa de centro",
    precio: 59990,
    stock: 4,
    img:"./img/mesa  centro ceramica.jpg",
  },
  {
    id: 5,
    modelo: "Modelo clasico",
    categoria: "mesa de centro",
    precio: 49990,
    stock: 7,
    img:"./img/mesa centro normal.jpg",
  },
  {
    id: 6,
    modelo: "Modelo vintage",
    categoria: "mesa de centro",
    precio: 54990,
    stock: 3,
    img: "./img/mesa centro vidrio.jfif",
  },
  {
    id: 7,
    modelo: "Modelo gran rack tv",
    categoria: "modulares",
    precio: 87990,
    stock: 6,
    img:"./img/rack tv.jpg",
  },
  {
    id: 8,
    modelo: "Modelo cajonera bedroom",
    categoria: "modulares",
    precio: 105990,
    stock: 8,
    img:"./img/cajonera.jpg",
  },
  {
    id: 9,
    modelo: "Modelo rack tv simple",
    categoria: "modulares",
    precio: 49990,
    stock: 6,
    img:"./img/rackpersonal.jfif",
  },
  {
    id: 10,
    modelo: "Modelo estante pinito",
    categoria: "personalizados",
    precio: 59990,
    stock: 2,
    img:"./img/pinito estante.jpg",
  },
  {
    id: 11,
    modelo: "Modelo Estante mini bar",
    categoria: "personalizados",
    precio: 26990,
    stock: 5,
    img:"./img/mini bar.jpg",
  },
  {
    id: 12,
    modelo: "Modelo Estante clasico",
    categoria: "personalizados",
    precio: 55990,
    stock: 4,
    img:"./img/estantes  zapateros.jpg",
  },
];

const carrito = JSON.parse(localStorage.getItem("carrito")) || []; 


function mostrarProductos(productos){
  const containerProds = document.getElementById('container-prods')
 
  containerProds.innerHTML ="";

  productos.forEach( p => {

    const card = document.createElement('div');
     
     card.innerHTML =`<h3>${p.modelo}</h3>
                    <img class="misEstilos" src="./${p.img}" alt="">
                    <button id="${p.id}" >Agregar al Carrito</button>

                   
                    `
                    

    containerProds.appendChild(card);  

    const btnComprar = document.getElementById(`${p.id}`);
    btnComprar.addEventListener('click', agregarALCarrito);
  
                 
  })
}


mostrarProductos(products)

function agregarALCarrito(e){
  e.preventDefault();

  console.log(e.target.id);

  const id = parseInt(e.target.id);

  const prod = products.find(p => p.id === id);

  carrito.push(prod);

  localStorage.setItem("carrito", JSON.stringify (carrito));
 
  console.log(carrito) 
}


function filtrar(){

  mostrarProductos(arrayFiltrado);
}

