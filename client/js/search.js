let buscador = document.getElementById('search');
let predict = document.createElement('ul');
buscador.parentNode.appendChild(predict);
let predictLI = document.createElement('li');
predict.appendChild(predictLI);

buscador.addEventListener('keyup', function (e) {
    if (e.code === 'Enter') {
        let productPage = "product.html?link=" + miniSearch.search(miniSearch.autoSuggest(buscador.value)[0].suggestion, { fuzzy: 0.2 })[0].link;
        window.location.href = productPage;
    }
    else {
        if (buscador.value.length > 3 && miniSearch.search(miniSearch.autoSuggest(e.target.value)[0].suggestion, { fuzzy: 0.2 }) ) {
            predict.style.display = "block";
            let resultado = miniSearch.search(miniSearch.autoSuggest(e.target.value)[0].suggestion, { fuzzy: 0.2 })[0].titulo;
            predictLI.innerHTML = resultado;
        }
        else {
            predictLI.innerHTML = '';
            predict.style.display = "none";
        }

    }
}
);

async function searchBar() {

    let response = await fetch(/catalogo/, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    let data = await response.json();
    miniSearch.addAll(data);
}
let miniSearch = new MiniSearch({
    fields: ['titulo'], // fields to index for full-text search
    storeFields: ['link', 'titulo', 'genero'] // fields to return with search results
});
searchBar();