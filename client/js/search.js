let buscador = document.getElementById('search');
let predict = document.createElement('ul');
buscador.parentNode.appendChild(predict);
let predictLI = document.createElement('li');
predict.appendChild(predictLI);

buscador.addEventListener('keyup', function (e) {
    if (e.code === 'Enter') {
        debugger;
        let productPage = "product.html?link=" + miniSearch.search(miniSearch.autoSuggest(buscador.value)[0].suggestion, { fuzzy: 0.2 })[0].link;
        window.location.href = productPage;
    }
    else {
        if (buscador.value.length > 3) {
            debugger;
            predict.style.display = "block";
            predictLI.innerHTML = miniSearch.search(miniSearch.autoSuggest(e.target.value)[0].suggestion, { fuzzy: 0.2 })[0].titulo;
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
    console.log(data);
    miniSearch.addAll(data);
}
let miniSearch = new MiniSearch({
    fields: ['titulo'], // fields to index for full-text search
    storeFields: ['link', 'titulo', 'genero'] // fields to return with search results
})
searchBar();