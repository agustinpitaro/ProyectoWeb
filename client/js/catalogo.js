let data;
let miniSearchCatalogo = new MiniSearch({
    idField: 'nro_producto',
    fields: ['titulo','genero', 'genero_secundario'], // fields to index for full-text search
    storeFields: ['titulo', 'genero', 'genero_secundario', 'imagen', 'sinopsis', 'precio', 'nro_producto'] // fields to return with search results
});
let buscadorPersonal = document.getElementById('buscadorPersonal');
buscadorPersonal.addEventListener('keyup', function (e) {
    if (buscadorPersonal.value.length > 3 && miniSearchCatalogo.autoSuggest(buscadorPersonal.value).length > 0) {
        let algo2 = miniSearchCatalogo.search(miniSearchCatalogo.autoSuggest(buscadorPersonal.value)[0].suggestion, { fuzzy: 0.2 });
        loadCatalogo(algo2);
    }
    else if (buscadorPersonal.value.length > 3 && miniSearchCatalogo.autoSuggest(buscadorPersonal.value).length == 0){
        loadCatalogo();
    }
    else if (buscadorPersonal.value.length < 3){
        loadCatalogo(data);
    }
}
);

let buscadorPersonalm = document.getElementById('buscadorPersonalm');
buscadorPersonalm.addEventListener('keyup', function (e) {
    if (buscadorPersonalm.value.length > 3 && miniSearchCatalogo.autoSuggest(buscadorPersonalm.value).length > 0) {
        let algo2 = miniSearchCatalogo.search(miniSearchCatalogo.autoSuggest(buscadorPersonalm.value)[0].suggestion, { fuzzy: 0.2 });
        loadCatalogo(algo2);
    }
    else if (buscadorPersonalm.value.length > 3 && miniSearchCatalogo.autoSuggest(buscadorPersonalm.value).length == 0){
        loadCatalogo();
    }
    else if (buscadorPersonalm.value.length < 3){
        loadCatalogo(data);
    }
}
);

function loadCatalogo(data) {
    let lista = document.getElementById('product-list');
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
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
        aImg.href = "product.html?id=" + producto.nro_producto;

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

        let divColBoton = document.createElement('div');
        divColBoton.className = "col-auto";

        let buttonVer = document.createElement('a');
        buttonVer.className = "btn btn-info";
        buttonVer.role = "button";
        buttonVer.innerText = "+Mas info";
        buttonVer.style.color = "purple";
        buttonVer.href = "product.html?id=" + producto.nro_producto;

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
    data = await response.json();
    miniSearchCatalogo.addAll(data);
    loadCatalogo(data);
}
load();

