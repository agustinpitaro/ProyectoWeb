"use strict"

function loadCarousel(data){
    let carousel = document.querySelectorAll("div.carousel-item");
    let indice = 0;
    carousel.forEach( item => {
        //Agrego imagen
        let eachItem = item.querySelector("img");
        eachItem.src = data[indice].imagen;
        //Agrego enlace a la pagina del producto
        eachItem.href = data[indice].link;

        //Agrego titulo
        let titulo = item.querySelector("h1");
        titulo.textContent = data[indice].titulo;

        //Agrego sinopsis
        let sinopsis = item.querySelector("p");
        sinopsis.textContent = data[indice].sinopsis;
        indice++;
    });
}

async function load(){
    console.log("Funcion de carga index");
    let response = await fetch('http://localhost:3000/index.json');
    if(response.ok){
        let data = await response.json();
        loadCarousel(data.carousel);
 //       loadRecientes(data.recientes);
   //     loadTop(data.top);
    }
    else{
        console.log("algo salio mal xD");
    }
}
load();