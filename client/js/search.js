let buscador = document.getElementById('search');
buscador.addEventListener('input', predict);
buscador.addEventListener('keyup', function (e) {
    if (e.code === 'Enter') {
        let productPage = "product.html?link=" + buscador.value;
        window.location.href = productPage;
    }
});

let buscarBoton = document.getElementById('search-button');
buscarBoton

function predict(e) {
    console.log(e.target.value);
    if (miniSearch.autoSuggest(e.target.value).length > 0)
        console.log(miniSearch.search(miniSearch.autoSuggest(e.target.value)[0].suggestion, { fuzzy: 0.2 }));

}


async function searchBar() {

    let response = await fetch(/catalogo/, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    let data = await response.json();
    console.log(data);
    miniSearch.addAll(data);
}
let miniSearch = new MiniSearch({
    fields: ['titulo'], // fields to index for full-text search
    storeFields: ['link', 'titulo', 'genero'] // fields to return with search results
})
searchBar();