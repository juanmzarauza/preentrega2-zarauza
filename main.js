const productos = [
    {id: 1 , nombre: 'Bondiola', precio: 3000},
    {id: 2 , nombre: 'panceta', precio: 2200},
    {id: 3 ,nombre: 'jamon cocido', precio: 1500},
    {id: 4 ,nombre: 'jamon crudo', precio: 2700},
    {id: 5 ,nombre: 'brisket', precio: 3500},
]

const vision = productos.map((el) => {
    return {
        nombre: el.nombre,
        precio: el.precio,  
    }
})
console.log(vision)

const fiambreDeVaca = productos.find(producto => producto.id === 5)
console.log(fiambreDeVaca)

const oferta = productos.filter(producto => producto.precio < 2500)
console.log(oferta)

const fiambresDeCerdo = productos.some(producto => producto.precio === "brisket")
console.log(fiambresDeCerdo)


class Producto {
    constructor(id, nombre, precio) {
        this.id = parseInt(id) ;
        this.nombre  = nombre.toUpperCase() ;
        this.precio  = parseFloat(precio);
    }
}

productos.push(new Producto(6, "bresaloa", 4000));


