function loadCatalogo(data) {
    let lista = document.getElementById('product-list');
    let indice = 0;
    data.forEach(producto => {
        //Creo estructura del producto
        console.log(producto);
        let contenedor = document.createElement('div')
        contenedor.className = "col-sm-6 col-md-4 product-item";

        let contenedor2 = document.createElement('div')
        contenedor.className = "product-container";

        let contenedor3 = document.createElement('div');
        contenedor3.className = "row";
        //div de la imagen
        let divImagen = document.createElement('div');
        divImagen.className = "col-md-12";

        let aImg = document.createElement('a');
        aImg.className = "product-image";
        aImg.href = "product.html?link="+producto.link;

        let srcImg = document.createElement('img');
        srcImg.src = producto.imagen;

        aImg.appendChild(srcImg);
        divImagen.appendChild(aImg);

        //div del titulo
        let divTitulo = document.createElement('div');
        divTitulo.className = "row justify-content-center";

        let divColTitulo = document.createElement('div');
        divColTitulo.className = "col-auto";

        let h2Titulo = document.createElement('h2');
        let aTitulo = document.createElement('a');
        aTitulo.href = "product.html?link="+producto.link;
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

        let divColBoton = document.createElement('div');
        divColBoton.className = "col-auto";

        let buttonVer = document.createElement('a');
        buttonVer.className = "btn btn-light";
        buttonVer.role = "button";
        buttonVer.innerText = "+Mas info";
        buttonVer.href = "product.html?link="+producto.link;

        divColBoton.appendChild(buttonVer);
        divRowBoton.appendChild(divColBoton);
        divColProducto.appendChild(pDescripcion);
        divColProducto.appendChild(divRowBoton);
        divRowProducto.appendChild(divColProducto);
        // unifico todo
        contenedor3.appendChild(divImagen);
        contenedor3.appendChild(divTitulo);
        contenedor3.appendChild(divRowProducto);
        contenedor2.appendChild(contenedor3);
        contenedor.appendChild(contenedor2);

        lista.appendChild(contenedor);
    });
}
async function load() {
    console.log("Funcion de carga catalogo");
    let response = await fetch(/catalogo/, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    let data = await response.json();
    debugger;
    loadCatalogo(data);
}
load();