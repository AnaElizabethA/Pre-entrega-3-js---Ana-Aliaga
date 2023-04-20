
const products = [
  //me falta enlazar las imagenes de las cards
  {
    id: 1,
    modelo: "diana",
    categoria: "arrimos",
    precio: 27990,
    stock: 5,
    img: "./img/arrimoconcajon.jpg",
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


function mostrarProductos(productos){
  const containerProds = document.getElementById('container-prods')
 
  containerProds.innerHTML ="";

  productos.forEach( p => {

    const card = document.createElement('div');
     
     card.innerHTML =`<h3>${p.modelo}</h3>
                    <img src="./${p.img}" alt="">
                    <button id="${p.id}" >comprar</button>

                   
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
}


function filtrar(){

  mostrarProductos(arrayFiltrado);
}

