let botonCarrito = document.getElementById('carrito-button');
botonCarrito.addEventListener('click', cargarProducto);

function loadProducto(data) {
    let fullImg = document.getElementById('fullImg');
    let productImg = document.getElementById('productImg');
    let titulo = document.getElementById('titulo');
    let precio = document.getElementById('precio');
    let sinopsis = document.getElementById('sinopsis');
    fullImg.href = data[0].imagen;
    productImg.src = data[0].imagen;
    titulo.innerText = data[0].titulo;
    precio.innerText = "$ " + data[0].precio;
    sinopsis.innerHTML = data[0].sinopsis;
    loadRelacionados(data);
}

function loadRelacionados(data) {
    let related = document.querySelectorAll("div.related");
    let indice = 1;
    related.forEach(item => {
        //Agrego imagen
        let itemImg = item.querySelector("img");
        itemImg.src = data[indice].imagen;
        //Agrego enlace a la pagina del producto
        let itemLink = item.querySelector("a");
        itemLink.href = "product.html?link=" + data[indice].link;
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
    console.log("Funcion de carga producto");
    let paramstr = window.location.search.substr(1);
    let paramarr = paramstr.split("&");
    let params = [];
    for (let i = 0; i < paramarr.length; i++) {
        let tmparr = paramarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    productPage = `/producto/${params["link"]}`;
    let response = await fetch(productPage, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    data = await response.json();
    loadProducto(data);
}

function cargarProducto(e) {
    if (window.sessionStorage.getItem('carrito')) {
        let carrito = JSON.parse(window.sessionStorage.getItem('carrito'));
        let producto = data[0].link;
        carrito.push(producto);
        window.sessionStorage.setItem('carrito', JSON.stringify(carrito));
    }
    else {
        let carrito = [];
        let producto = data[0].link;
        carrito.push(producto);
        window.sessionStorage.setItem('carrito', JSON.stringify(carrito));
    }
}
function logOut(e) {
    window.sessionStorage.clear();
    window.location.href = 'http://localhost:3000';
    return true;
}

function checkSession() {
    if (window.sessionStorage.getItem('user')) {
        let loginNavBar = document.getElementById('login-navbar');
        loginNavBar.style.display = "none";//oculto boton login
        let registerButton = document.getElementById('register-navbar');
        registerButton.style.display = "none";//oculto boton register
        let logoutNavBar = document.getElementById('logout-navbar');
        logoutNavBar.addEventListener('click', logOut); 
        logoutNavBar.style.display = "block";//muestro boton logout
        let carritoNavBar = document.getElementById('carrito-navbar');
        carritoNavBar.style.display = "block";//muestro boton carrito
        let bibliotecaNavBar = document.getElementById('biblioteca-navbar');
        bibliotecaNavBar.style.display = "block";//muestro boton biblioteca
    }
    else{
        let logoutNavBar = document.getElementById('logout-navbar');
        logoutNavBar.style.display = "none";//oculto boton logout
        let carritoNavBar = document.getElementById('carrito-navbar');
        carritoNavBar.style.display = "none";//oculto boton carrito
        let bibliotecaNavBar = document.getElementById('biblioteca-navbar');
        bibliotecaNavBar.style.display = "none";//oculto boton biblioteca
        let loginNavBar = document.getElementById('login-navbar');
        loginNavBar.style.display = "block";//muestro boton logout
        let registerButton = document.getElementById('register-navbar');
        registerButton.style.display = "block";//muestro boton register
    }
}
checkSession();

let data;
load();
