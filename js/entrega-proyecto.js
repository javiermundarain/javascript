              
                        //APLICACION DE BUCLES
function Tienda () {
    let comprador = prompt ("Bienvenido a tienda magica (El Santuario); ¿Desea comprar algun producto?; Responda con un si o no: ")

    while (comprador != "si" && comprador != "no") {
        alert ("Por favor ingrese una respuesta valida");
        comprador = prompt ("Bienvenido a tienda magica (El Santuario); ¿Desea comprar algun producto?; Responda con un si o no: ")
    }

    if (comprador == "si"){
        Preguntas ()
        console.log ("Bievenido al Stock");
        aggCarrito (3)
        aggCarrito (2)
        aggCarrito (1)
        aggCarrito (4)
        verCarrito ()
    }

    else if (comprador == "no"){
        alert ("Gracias por su visita")
    }
}
                        //APLICACION DE BUCLES

                        //APLICACION DE ARRAYS Y ORDEN SUP
    const stock = [
    {id:1, pocion: "Amor", precio: 80, stock: 35},
    {id:2, pocion: "Clarividencia", precio: 150, stock: 12},
    {id:3, pocion: "Muerte Instantanea", precio: 500, stock: 10},
    {id:4, pocion: "Resurreción", precio: 900, stock: 3}
]
                     
const carrito = []

function aggCarrito ( id ) {
    const producto = stock.find( p => p.id == id )
    carrito.push( {id: producto.id, nombre: producto.pocion, precio: producto.precio} )
}

function verCarrito() {
    carrito.forEach( p => {
        console.log ( p );
    }
    )
}
                    //APLICACION DE ARRAYS Y ORDEN SUP

                                    //APLICACION DE PREGUNTAS
function Preguntas () {
    let obj1 = parseInt (prompt ("Poción de Amor / Precio: 80$"));
    let obj2 = parseInt (prompt ("Poción de Clarividencia / Precio: 150$"));
    let obj3 = parseInt (prompt ("Poción de Pocion de Muerte / Precio: 500$"));
    let obj4 = parseInt (prompt ("Poción de Pocion de Resurreción / Precio: 900$"));

        let resultado = obj1 + obj2 + obj3 + obj4;
            alert ("Su total de productos es: " + resultado);
}
                                    //APLICACION DE PREGUNTAS

Tienda ();