let botonCarrito = document.getElementById('carrito-button');
botonCarrito.addEventListener('click', cargarProducto);
let botonPuntaje;

function loadProducto(data) {
    let fullImg = document.getElementById('fullImg');
    let productImg = document.getElementById('productImg');
    let titulo = document.getElementById('titulo');
    let precio = document.getElementById('precio');
    let sinopsis = document.getElementById('sinopsis');
    let puntaje = document.getElementById('puntaje');
    let link = data[0].link;
    fullImg.href = data[0].imagen;
    productImg.src = data[0].imagen;
    titulo.innerText = data[0].titulo;
    titulo.style.color = "#28D7FE";
    sinopsis.style.fontFamily = "sans serif";
    sinopsis.style.fontSize = "20px";
    precio.innerText = "$ " + data[0].precio;
    sinopsis.innerHTML = data[0].sinopsis;
    puntaje.innerText = Math.round(rating) + "/10";
    loadRelacionados(data);

}


async function loadRelacionados(data) {
    let related = document.querySelectorAll("div.related");
    let indice = 1;
    related.forEach(item => {
        //Agrego imagen
        let itemImg = item.querySelector("img");
        itemImg.src = data[indice].imagen;
        //Agrego enlace a la pagina del producto
        let itemLink = item.querySelector("a");
        itemLink.href = "product.html?id=" + data[indice].nro_producto;
        //Agrego el titulo
        let itemTitle = item.querySelector("h2");
        itemTitle.textContent = data[indice].titulo;
        //Agrego Precio
        let itemPrice = item.querySelector("p.product-price");
        itemPrice.innerHTML = "$ " + data[indice].precio;
        //Agrego sinopsis
        let itemDescription = item.querySelector("p.product-description");
        itemDescription.innerHTML = data[indice].sinopsis;
        indice++;
    })

}

async function load() {
    let dueno = window.sessionStorage.getItem('user');
    if (dueno) {
        console.log("Funcion de carga producto");
        let paramstr = window.location.search.substr(1);
        let paramarr = paramstr.split("&");
        let params = [];
        for (let i = 0; i < paramarr.length; i++) {
            let tmparr = paramarr[i].split("=");
            params[tmparr[0]] = tmparr[1];
        }
        productoid = params["id"];
        productPage = /producto/ + productoid;
        /*let response3 = await fetch("/producto/" + productoid + "/puntaje", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });*/
        rating = 0;//await response3.json();
        let response = await fetch(productPage, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        data = await response.json();
        loadProducto(data);
        let dueno = window.sessionStorage.getItem('user');
        let duenoPage = /biblioteca/ + dueno;
        let response2 = await fetch(duenoPage, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        biblioteca = await response2.json();
        if (checkPertenencia(biblioteca)) {
            botonCarrito.removeEventListener('click', cargarProducto);
        }

    }
    else {
        botonCarrito.style.display = 'none';
        console.log("Funcion de carga producto");
        let paramstr = window.location.search.substr(1);
        let paramarr = paramstr.split("&");
        let params = [];
        for (let i = 0; i < paramarr.length; i++) {
            let tmparr = paramarr[i].split("=");
            params[tmparr[0]] = tmparr[1];
        }
        productoid = params["id"];
        productPage = /producto/ + productoid;
        /*let response3 = await fetch("/producto/" + productoid + "/puntaje", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });*/
        rating = 0;//await response3.json();
        let response = await fetch(productPage, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        data = await response.json();
        loadProducto(data);
    }

}

function checkPertenencia(biblioteca) {
    let salida = false;
    biblioteca.forEach(producto => {
        if (producto.nro_producto == data[0].nro_producto) {
            let ratingDiv = document.getElementById('rating');
            let form = document.createElement('form');
            let label = document.createElement('label');
            label.for = "puntaje";
            label.innerText = "Puntacion: (Entre 1 y 10):";
            let input = document.createElement('input');
            input.type = "number";
            input.id = "puntajeVoto";
            input.min = "1";
            input.max = "10";
            let button = document.createElement('button');
            button.className = "btn btn-info";
            button.id = "puntaje-button";
            button.type = "button";
            button.innerText = "Votar!";
            form.appendChild(label);
            form.appendChild(input);
            form.appendChild(button);
            ratingDiv.appendChild(form);

            botonPuntaje = document.getElementById('puntaje-button');
            botonPuntaje.addEventListener('click', cargarPuntaje);

            botonCarrito.innerText = "Ver";
            botonCarrito.href = data[0].link;

            precioProducto = document.querySelector('div.price').style.display = 'none';

            salida = true;
        }
    });
    return salida;

}
function cargarProducto(e) {
    botonCarrito.innerText = "Agregado al carrito!";
    botonCarrito.removeEventListener('click', cargarProducto);

    if (window.sessionStorage.getItem('carrito')) {
        let carrito = JSON.parse(window.sessionStorage.getItem('carrito'));
        let producto = data[0].nro_producto;
        carrito.push(producto);
        window.sessionStorage.setItem('carrito', JSON.stringify(carrito));
    }
    else {
        let carrito = [];
        let producto = data[0].nro_producto;
        carrito.push(producto);
        window.sessionStorage.setItem('carrito', JSON.stringify(carrito));
    }
}

async function cargarPuntaje(e) {
    let voto = document.getElementById('puntajeVoto').value;
    if (voto) {
        let user = window.sessionStorage.getItem('user');
        let votacion = {
            username: user,
            producto: data[0].nro_producto,
            puntaje: voto
        }
        let respuesta = await fetch('/producto/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(votacion),
        });

    }
}
function checkSession() {
    if (window.sessionStorage.getItem('user')) {
        let addtocart = document.getElementById('carrito-button');
        addtocart.style.display = "block";//muestro el boton de compra
        addtocart.innerText ="Agregar al Carrito";
        
    } else {
        let addtocart = document.getElementById('carrito-button ');
        addtocart.style.display = "none";//oculto el boton de compra
    }
}
let biblioteca;
let data;
let rating;
load();
checkSession();
