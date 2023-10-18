// Creo el array que contiene el menú//
const menus = [
    { nombre: "Hamburguesa con queso", precio: 150 },
    { nombre: "Pollo Crispy con cheddar", precio: 150 },
    { nombre: "Papas Fritas grandes", precio: 50 },
    { nombre: "Vaso de gaseosa grande", precio: 75 },
    { nombre: "Hamburguesa doble con cheddar y panceta", precio: 350 },
    { nombre: "Wrap de vegetales", precio: 100 },
];

let carrito = [];

let orden = prompt("Hola, ¿Desea realizar una orden?")
//Al ser un tótem evalúo una opción válida, en mi caso va a ser si o no//

while (orden != "si" && orden != "no") {
    alert("Ingresa si o no")
    orden = prompt("¿Desea realizar una orden?")
}

if (orden == "si") {
    alert("Nuestro menú es:") //Al no mostrar cards de cada producto, hago una lista recorriendo el menu, los separo con - para que se vea un poco más prolijo//
    let menuCompleto = menus.map(
        (menu) => menu.nombre + " " + menu.precio + "$"
    );
    alert(menuCompleto.join(" - "))
} else if (orden == "no") {
    alert("Gracias por su visita, vuelva pronto")
}

while (orden != "no") {
    let menu = prompt("Agrega un menú a tu orden")
    let precio = 0


    //Considero que podria ser alguna opción del menu//

    if (menu == "Hamburguesa con queso" || menu == "Pollo Crispy con cheddar" || menu == "Papas Fritas grandes" || menu == "Vaso de gaseosa grande" || menu == "Hamburguesa doble con cheddar y panceta" || menu == "Wrap de vegetales") {
        switch (menu) {
            case "Hamburguesa con queso":
                precio = 150;
                break;

            case "Pollo Crispy con cheddar":
                precio = 150;
                break;

            case "Papas Fritas grandes":
                precio = 50;
                break;

            case "Vaso de gaseosa grande":
                precio = 75;
                break;

            case "Hamburguesa doble con cheddar y panceta":
                precio = 350;
                break;

            case "Wrap de vegetales":
                precio = 100;
                break;
            default:
                break;
        }
        let unidades = parseInt(prompt("¿Cuántas unidades de este menú deseas?"))

        carrito.push({ menu, unidades, precio })
        console.log(carrito)

        //Si ingresan algún menú sin existencia//
    } else {
        alert("No tenemos ese menú")
    }

    orden = prompt("¿Desea agregar alguna opción a la orden?")

    while (orden === "no") {
        alert("Gracias por tu compra! Que lo disfrutes")

        //Vemos la orden completa y calculamos el costo por tipo de menú//
        carrito.forEach((carritoFinal) => {
            console.log(`orden: ${carritoFinal.menu}, unidades: ${carritoFinal.unidades}, total a pagar por menu ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}

//Ahora calculo el total de la operación, lo muestro al cliente además de dejarme el dato//
const total = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio * elemento.unidades, 0)
console.log(`El total a pagar por el cliente es: ${total}`)
alert("El total a pagar es " + `${total}`)