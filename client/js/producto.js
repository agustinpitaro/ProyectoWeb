function loadProducto(data){
    let fullImg = document.getElementById('fullImg').href;
    let productImg = document.getElementById('productImg').src;
    let titulo = document.getElementById('titulo').textContent;
    let precio = document.getElementById('precio').innerHTML;
    let sinopsis = document.getElementById('sinopsis').innerHTML;
    fullImg = data.imagen;
    productImg = data.imagen;
    titulo = data.titulo;
    precio = "$ "+data.precio;
    sinopsis = data.sinopsis;
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
    let response = await fetch(`/producto/${params["link"]}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    let data = await response.json();
    loadProducto(data);
}
    
load();
