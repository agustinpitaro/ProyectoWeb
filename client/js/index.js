"use strict"

let recientes;

function loadRecientes(data) {
    let lista = document.getElementById('recientes');
    data.forEach(producto => {
        //Creo estructura del producto
        let contenedor = document.createElement('div');
        contenedor.className = "col-sm-6 col-md-4 product-item";

        let contenedor2 = document.createElement('div');
        contenedor.className = "product-container";
        
        //div de la imagen
        let divRowImg = document.createElement('div');
        divRowImg.className = "row";
        let divImagen = document.createElement('div');
        divImagen.className = "col-md-12";

        let aImg = document.createElement('a');
        aImg.className = "product-image";
        aImg.href = "product.html?id=" + producto.nro_producto;

        let srcImg = document.createElement('img');
        srcImg.src = producto.imagen;

        aImg.appendChild(srcImg);
        divImagen.appendChild(aImg);
        divRowImg.appendChild(divImagen);

        //div del titulo
        let divTitulo = document.createElement('div');
        divTitulo.className = "row justify-content-center";

        let divColTitulo = document.createElement('div');
        divColTitulo.className = "col-auto";

        let h2Titulo = document.createElement('h2');
        let aTitulo = document.createElement('a');
        aTitulo.href = "product.html?id=" + producto.nro_producto;
        aTitulo.innerText = producto.titulo;
        aTitulo.style.fontFamily ="Bungee Inline";
        aTitulo.style.color = "#28D7FE";

        h2Titulo.appendChild(aTitulo);
        divColTitulo.appendChild(h2Titulo);
        divTitulo.appendChild(divColTitulo);

        //div de la descripcion y boton
        let divRowProducto = document.createElement('div');
        divRowProducto.className = "row";

        let divColProducto = document.createElement('div');
        divColProducto.className = "col-12";

        let pDescripcion = document.createElement('p');
        pDescripcion.innerText = producto.sinopsis;

        let divRowBoton = document.createElement('div');
        divRowBoton.className = "row justify-content-center";

        let divColPrecio = document.createElement('div');
        divColPrecio.className = "col-auto";

        let pPrecio = document.createElement('p');
        pPrecio.className = "product-price";
        pPrecio.innerText = "$ "+producto.precio;

        let divColBoton = document.createElement('div');
        divColBoton.className = "col-auto";

        let buttonVer = document.createElement('a');
        buttonVer.className = "btn btn-info";
        buttonVer.style.color = "purple";
        buttonVer.role = "button";
        buttonVer.innerText = "+Mas info";
        buttonVer.href = "product.html?id=" + producto.nro_producto;

        divColBoton.appendChild(buttonVer);
        divColPrecio.appendChild(pPrecio);
        divRowBoton.appendChild(divColPrecio);
        divRowBoton.appendChild(divColBoton);
        divColProducto.appendChild(pDescripcion);
        divColProducto.appendChild(divRowBoton);
        divRowProducto.appendChild(divColProducto);
        // unifico todo
        contenedor2.appendChild(divRowImg);
        contenedor2.appendChild(divTitulo);
        contenedor2.appendChild(divRowProducto);
        contenedor.appendChild(contenedor2);

        lista.appendChild(contenedor);
    });
}

function loadPopulares(data) {
    let lista = document.getElementById('populares');
    data.forEach(producto => {
        //Creo estructura del producto
        let contenedor = document.createElement('div');
        contenedor.className = "col-auto col-lg-auto col-xl-auto product-item";

        let contenedor2 = document.createElement('div')
        contenedor.className = "product-container";
        
        //div de la imagen
        let divRowImg = document.createElement('div');
        divRowImg.className = "row";
        let divImagen = document.createElement('div');
        divImagen.className = "col-md-12";

        let aImg = document.createElement('a');
        aImg.className = "product-image";
        aImg.href = "product.html?id=" + producto.nro_producto;

        let srcImg = document.createElement('img');
        srcImg.src = producto.imagen;

        aImg.appendChild(srcImg);
        divImagen.appendChild(aImg);
        divRowImg.appendChild(divImagen);

        //div del titulo
        let divTitulo = document.createElement('div');
        divTitulo.className = "row justify-content-center";

        let divColTitulo = document.createElement('div');
        divColTitulo.className = "col-auto";

        let h2Titulo = document.createElement('h2');
        let aTitulo = document.createElement('a');
        aTitulo.href = "product.html?id=" + producto.nro_producto;
        aTitulo.innerText = producto.titulo;
        aTitulo.style.fontFamily ="Bungee Inline";
        aTitulo.style.color = "#28D7FE";

        h2Titulo.appendChild(aTitulo);
        divColTitulo.appendChild(h2Titulo);
        divTitulo.appendChild(divColTitulo);

        //div de la descripcion y boton
        let divRowProducto = document.createElement('div');
        divRowProducto.className = "row";

        let divColProducto = document.createElement('div');
        divColProducto.className = "col-12";

        let pDescripcion = document.createElement('p');
        pDescripcion.innerText = producto.sinopsis;

        let divRowBoton = document.createElement('div');
        divRowBoton.className = "row justify-content-center";

        let divColPrecio = document.createElement('div');
        divColPrecio.className = "col-auto";

        let pPrecio = document.createElement('p');
        pPrecio.className = "product-price";
        pPrecio.innerText = "$ "+producto.precio;

        let divColBoton = document.createElement('div');
        divColBoton.className = "col-auto";

        let buttonVer = document.createElement('a');
        buttonVer.className = "btn btn-info";
        buttonVer.role = "button";
        buttonVer.innerText = "+Mas info";
        buttonVer.style.color = "purple";
        buttonVer.href = "product.html?id=" + producto.nro_producto;

        divColBoton.appendChild(buttonVer);
        divColPrecio.appendChild(pPrecio);
        divRowBoton.appendChild(divColPrecio);
        divRowBoton.appendChild(divColBoton);
        divColProducto.appendChild(pDescripcion);
        divColProducto.appendChild(divRowBoton);
        divRowProducto.appendChild(divColProducto);
        // unifico todo
        contenedor2.appendChild(divRowImg);
        contenedor2.appendChild(divTitulo);
        contenedor2.appendChild(divRowProducto);
        contenedor.appendChild(contenedor2);

        lista.appendChild(contenedor);
    });
}

async function load() {
    let responseRecientes = await fetch('/index/recientes', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    let responsePopulares = await fetch('/index/populares', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });


    if (responseRecientes.ok) {
        recientes = await responseRecientes.json();
        loadRecientes(recientes);
    }
    else {
        console.log("algo salio mal recientes xD");
    }

    if (responsePopulares.ok) {
        let populares = await responsePopulares.json();
        loadPopulares(populares);
    }
    else {
        console.log("algo salio mal populares xD");
    }

}
load();
