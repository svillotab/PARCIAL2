let products = [];
let favorites = [];

function parseDataToProducts() {
    for (let i = 0; i < data.length; i++) {
        let map = data[i];
        let product = new Product(map["id"], map["name"], map["price"], map["categories"], map["details"], map["images"]);
        products.push(product);
    }
} 

function renderAllProducts() {
    let container = document.getElementById("products");
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        container.innerHTML += product.htmlCard(i);
    }
}

function productSelected(pos) {
    let productSelected = products[pos];
    window.location = "./detail.html?name=" + encodeURIComponent(productSelected.name); 
}

function addToFavorites(pos) {
    const product = products[pos];
    
    if (!favorites.includes(product)) {
        favorites.push(product);
        renderFavorites();
    } else {
        alert("Este producto ya está en tus favoritos");
    }
}

function removeFromFavorites(pos) {
    favorites.splice(pos, 1); // Remove the product from the favorites array
    renderFavorites(); // Re-render the favorites list
}

function renderFavorites() {
    const favoritosLista = document.getElementById("favoritos-lista");
    favoritosLista.innerHTML = "";

    favorites.forEach((product, index) => {
        const favoriteItem = `
            <div class="product-item">
                <img src="${product.images[0]}" alt="">
                <div class="product-item-info">
                    <label>${product.categories}</label>
                    <p>${product.name}</p>
                    <h4>${product.details.size}</h4>
                    <br>
                    <h3>$ ${product.price}</h3>
                    <button onclick="removeFromFavorites(${index})">Eliminar</button>
                </div>
            </div>
        `;
        favoritosLista.innerHTML += favoriteItem;
    });
}

parseDataToProducts();
renderAllProducts();