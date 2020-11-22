let comprar = document.getElementById('button-compra');
comprar.addEventListener('click', efectuarCompra);

async function efectuarCompra(e) {
    let carrito = JSON.parse(window.sessionStorage.getItem('carrito'));
    let user = JSON.parse(window.sessionStorage.getItem('user'));

    let compra = {
        username:user.username,
        compra:carrito
    }
    let respuesta = await fetch('/carrito/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(compra),
    });

    if (await respuesta.json()) {
        window.location.href = 'http://localhost:3000/biblioteca.html';
    }
    //mostrar cartel de datos erroneos
    else {
        console.log("fallo respuesta.json");
    }
}

async function loadCarrito(){
    let carrito = JSON.parse(window.sessionStorage.getItem('carrito'));
    let productos = [];
    for (let i in carrito){
        let productPage = '/producto/'+carrito[i];
        debugger;
        let response = await fetch('/producto/'+carrito[i], {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        let data = await response.json();
        console.log(data);
        productos.push(data);
    }  
}
loadCarrito();
