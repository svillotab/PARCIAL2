let products = [];

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
    window.location = "./detail.html?name=" + productSelected.name; 
}


parseDataToProducts();
renderAllProducts();