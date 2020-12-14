let botonCarrito = document.getElementById('carrito-button');
botonCarrito.addEventListener('click', cargarProducto);

function loadProducto(data) {
    let fullImg = document.getElementById('fullImg');
    let productImg = document.getElementById('productImg');
    let titulo = document.getElementById('titulo');
    let precio = document.getElementById('precio');
    let sinopsis = document.getElementById('sinopsis');
    let link = data[0].link;
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
    console.log("Funcion de carga producto");
    let paramstr = window.location.search.substr(1);
    let paramarr = paramstr.split("&");
    let params = [];
    for (let i = 0; i < paramarr.length; i++) {
        let tmparr = paramarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    productPage = `/producto/${params["id"]}`;
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
    if (checkPertenencia(biblioteca)){
        botonCarrito.removeEventListener('click', cargarProducto);
    }
}

function checkPertenencia(biblioteca){
    let salida = false;
    biblioteca.forEach(producto => {
        if (producto.nro_producto == data[0].nro_producto){
            botonCarrito.innerText = "Ver";
            botonCarrito.href = data[0].link;
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
let data;
load();
