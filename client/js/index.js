"use strict"

function loadCarousel(data) {
    let carousel = document.querySelectorAll("div.carousel-item");
    let indice = 0;
    carousel.forEach(item => {
        //Agrego imagen
        let itemImg = item.querySelector("img");
        itemImg.src = data[indice].imagen;
        //Agrego enlace a la pagina del producto
        itemImg.href = "/producto/"+data[indice].link;

        //Agrego titulo
        let titulo = item.querySelector("h1");
        titulo.textContent = data[indice].titulo;

        //Agrego sinopsis
        let sinopsis = item.querySelector("p");
        sinopsis.textContent = data[indice].sinopsis;
        indice++;
    });
}

function loadRecientes(data) {
    let lista = document.getElementById('recientes');
    data.forEach(producto => {
        //Creo estructura del producto
        console.log(producto);
        let contenedor = document.createElement('div')
        contenedor.className = "col-sm-6 col-md-4 product-item";

        let contenedor2 = document.createElement('div')
        contenedor.className = "product-container";
        
        //div de la imagen
        let divRowImg = document.createElement('div');
        divRowImg.className = "row";
        let divImagen = document.createElement('div');
        divImagen.className = "col-md-12";

        let aImg = document.createElement('a');
        aImg.className = "product-image";
        aImg.href = "/producto/"+producto.link;

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
        aTitulo.href = "/producto/"+producto.link;
        aTitulo.innerText = producto.titulo;

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
        pPrecio.innerText = producto.precio;

        let divColBoton = document.createElement('div');
        divColBoton.className = "col-auto";

        let buttonVer = document.createElement('a');
        buttonVer.className = "btn btn-light";
        buttonVer.role = "button";
        buttonVer.innerText = "+Mas info";
        buttonVer.href = "/producto/"+producto.link;

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
        console.log(producto);
        let contenedor = document.createElement('div')
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
        aImg.href = "/producto/"+producto.link;

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
        aTitulo.href = "/producto/"+producto.link;
        aTitulo.innerText = producto.titulo;

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
        pPrecio.innerText = producto.precio;

        let divColBoton = document.createElement('div');
        divColBoton.className = "col-auto";

        let buttonVer = document.createElement('a');
        buttonVer.className = "btn btn-light";
        buttonVer.role = "button";
        buttonVer.innerText = "+Mas info";
        buttonVer.href = "/producto/"+producto.link;

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
    console.log("Funcion de carga index");
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

    let responseCarousel = await fetch('/index/carousel', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (responseRecientes.ok) {
        let recientes = await responseRecientes.json();
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

    if (responseCarousel.ok) {
        let carousel = await responseCarousel.json();
        loadCarousel(carousel);
    }
    else {
        console.log("algo salio mal carousel xD");
    }
}
load();
