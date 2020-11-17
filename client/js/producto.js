function loadProducto(data){
    let fullImg = document.getElementById('fullImg');
    let productImg = document.getElementById('productImg');
    let titulo = document.getElementById('titulo');
    let precio = document.getElementById('precio');
    let sinopsis = document.getElementById('sinopsis');
    fullImg.href = data.imagen;
    productImg.src = data.imagen;
    titulo.textContent = data.titulo;
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
    debugger;
    productPage = `/producto/${params["link"]}`; 
    let response = await fetch(`/producto/${params["link"]}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    let data = await response.json();
    console.log(data);
    loadProducto(data);
}
    
load();
