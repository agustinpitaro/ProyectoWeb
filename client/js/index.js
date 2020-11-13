"use strict"

function loadCarousel(data){
    let carousel = document.querySelectorAll("div.carousel-item");
    let indice = 0;
    carousel.forEach( item => {
        //Agrego imagen
        let itemImg= item.querySelector("img");
        itemImg.src = data[indice].imagen;
        //Agrego enlace a la pagina del producto
        itemImg.href = data[indice].link;

        //Agrego titulo
        let titulo = item.querySelector("h1");
        titulo.textContent = data[indice].titulo;

        //Agrego sinopsis
        let sinopsis = item.querySelector("p");
        sinopsis.textContent = data[indice].sinopsis;
        indice++;
    });
}

function loadRecientes(data){
    let recientes = document.querySelectorAll("div.reciente");
    let indice = 0;
    recientes.forEach( item =>{
        //Agrego imagen
        let itemImg = item.querySelector("img");
        itemImg.src= data[indice].imagen;
        //Agrego enlace a la pagina del producto
        let itemLink = item.querySelector("a");
        itemLink.href = data[indice].link;
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

function loadTop(data){
    let top = document.querySelectorAll("div.popular");
    let indice = 0;
    top.forEach( item =>{
        //Agrego imagen
        let itemImg = item.querySelector("img");
        itemImg.src= data[indice].imagen;
        //Agrego enlace a la pagina del producto
        let itemLink = item.querySelector("a");
        itemLink.href = data[indice].link;
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

async function load(){
    console.log("Funcion de carga index");
    let response = await fetch('http://localhost:3000/index.json');
    if(response.ok){
        let data = await response.json();
        loadCarousel(data.carousel);
        loadRecientes(data.recientes);
        loadTop(data.top);
    }
    else{
        console.log("algo salio mal xD");
    }
}
load();