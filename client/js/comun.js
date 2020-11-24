let logoutNavBar = document.getElementById('logout-navbar');
logoutNavBar.addEventListener('click', logOut);

function loadCarousel(data) {
    let carousel = document.querySelectorAll("div.carousel-item");
    let indice = 0;
    carousel.forEach(item => {
        //Agrego imagen
        let itemImg = item.querySelector("img");
        itemImg.src = data[indice].imagen;
        //Agrego enlace a la pagina del producto
        itemImg.href = "product.html?link="+data[indice].link;

        //Agrego titulo
        let titulo = item.querySelector("h1");
        titulo.textContent = data[indice].titulo;

        //Agrego sinopsis
        let sinopsis = item.querySelector("p");
        sinopsis.textContent = data[indice].sinopsis;
        indice++;
    });
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


async function loadCarouselNavbar(){
    let responseCarousel = await fetch('/index/carousel', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (responseCarousel.ok) {
        let carousel = await responseCarousel.json();
        loadCarousel(carousel);
    }
    else {
        console.log("algo salio mal carousel xD");
    }
    checkSession();
} 
loadCarouselNavbar();