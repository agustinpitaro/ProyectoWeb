async function load(){
    console.log("funcion de carga");
    let recientes = document.querySelectorAll("div.product-item:not(.lateral)");
    debugger;
    recientes.forEach(function (item){
        item.children[0].children[0]
    })
}
load();