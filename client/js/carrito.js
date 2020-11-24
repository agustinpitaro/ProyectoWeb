let comprar = document.getElementById('button-compra');
comprar.addEventListener('click', efectuarCompra);

async function efectuarCompra(e) {
    let carrito = JSON.parse(window.sessionStorage.getItem('carrito'));
    let user = window.sessionStorage.getItem('user');

    let compra = {
        username: user,
        compra: carrito
    }
    let respuesta = await fetch('/carrito/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(compra),
    });

    if (await respuesta.json()) {
        window.sessionStorage.removeItem('carrito');
        window.location.href = 'http://localhost:3000/biblioteca.html';
    }
    //mostrar cartel de datos erroneos
    else {
        console.log("fallo respuesta.json");
    }
}

function eliminarProducto(e) {
    let className = "product";
    let precio = e.currentTarget.myParam[1];
    let producto = e.currentTarget.myParam[0];

    let el = e.currentTarget;
    while (el && el.parentNode) {
        el = el.parentNode;
        if (el.className && el.className.toLowerCase() == className) {
            break;
        }
    }
    el.parentNode.removeChild(el);
    let h4Producto = document.querySelector('#' + producto);
    h4Producto.parentNode.removeChild(h4Producto);
    let total = document.querySelector('#total');
    total.innerText = +total.innerText - +precio;
    debugger;
    let carrito = JSON.parse(window.sessionStorage.getItem('carrito'));
    carrito.splice(carrito.indexOf(producto),1);
    window.sessionStorage.setItem('carrito', JSON.stringify(carrito));

}

function loadProductos(productos) {
    let items = document.getElementById("items");
    let lateral = document.getElementById('resumen');

    productos.forEach(elemento => {
        let product = document.createElement('div');
        product.className = "product";
        /////
        let rowProducto = document.createElement('div');
        rowProducto.className = "row justify-content-center align-items-center";
        /////
        let colImagen = document.createElement('div');
        colImagen.className = "col-md-3 col-xl-3";
        /////
        let divImagen = document.createElement('div');
        divImagen.className = "product-image";

        let img = document.createElement('img');
        img.className = "img-fluid d-block mx-auto image";
        img.src = elemento.imagen;

        divImagen.appendChild(img);
        colImagen.appendChild(divImagen);
        /////
        let divInfo = document.createElement('div');
        divInfo.className = "col-md-9 col-lg-9 col-xl-8 product-info";

        let aTitulo = document.createElement('a');
        aTitulo.className = "product-name";
        aTitulo.href = "product.html?link=" + elemento.link;
        aTitulo.style = "color: #ea094d;";
        aTitulo.innerText = elemento.titulo;

        let divSinopsis = document.createElement('div');
        divSinopsis.className = "product-specs";

        let pSinopsis = document.createElement('p');
        pSinopsis.innerHTML = elemento.sinopsis;

        divSinopsis.appendChild(pSinopsis);
        //////
        divInfo.appendChild(aTitulo);
        divInfo.appendChild(divSinopsis);
        //////
        let divPrecio = document.createElement('div');
        divPrecio.className = "col-5 col-md-2 offset-lg-0 text-center price";

        let spanPrecio = document.createElement('span');
        spanPrecio.innerHTML = "$ " + elemento.precio;

        divPrecio.appendChild(spanPrecio);
        ///////
        let divEliminar = document.createElement('div');
        divEliminar.className = "col-2 col-md-2 offset-sm-5 offset-md-8 offset-lg-8 text-center";

        let buttonEliminar = document.createElement('button');
        buttonEliminar.className = "btn btn-primary";
        buttonEliminar.type = "button";
        buttonEliminar.innerHTML = "X";
        buttonEliminar.id = "eliminar-button";
        buttonEliminar.myParam = [elemento.link, elemento.precio];

        buttonEliminar.addEventListener('click', eliminarProducto);

        divEliminar.appendChild(buttonEliminar);
        ///////
        rowProducto.appendChild(colImagen);
        rowProducto.appendChild(divInfo);
        rowProducto.appendChild(divPrecio);
        rowProducto.appendChild(divEliminar);
        ///////
        product.appendChild(rowProducto);
        ///////
        items.appendChild(product);
        ////////////////////////////////////////////////////////////////

        let infoLateral = document.createElement('h4');
        infoLateral.id = elemento.link;
        infoLateral.style = "color: #2b2b2b;background-color: rgb(183,103,232);";

        let spanTitulo = document.createElement('span');
        spanTitulo.className = "text";
        spanTitulo.style = "font-family: 'Bungee Inline', cursive;";
        spanTitulo.innerText = elemento.titulo;

        let spanPrecioLateral = document.createElement('span');
        spanPrecioLateral.className = "price";
        spanPrecioLateral.style = "color: #2b2b2b;font-family: 'Bungee Inline', cursive;";
        spanPrecioLateral.innerText = elemento.precio;

        infoLateral.appendChild(spanTitulo);
        infoLateral.appendChild(spanPrecioLateral);

        let total = document.querySelector('#total');
        total.innerText = +total.innerText + +elemento.precio;
        lateral.insertAdjacentElement('afterend',infoLateral);
    });


}

async function loadCarrito() {
    let carrito = JSON.parse(window.sessionStorage.getItem('carrito'));
    let productos = [];
    for (let i in carrito) {
        let response = await fetch('/producto/' + carrito[i], {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
        });
        let data = await response.json();
        productos.push(data[0]);
    }
    loadProductos(productos);
}

loadCarrito();
