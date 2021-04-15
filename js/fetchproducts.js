//JS for fetching api

const url = "https://www.andreasletta.eu/wp-json/wc/store/products";
const productContainer = document.querySelector("#shopproducts");

async function getProducts() {
  try {
    const respons = await fetch(url);
    const getResults = await respons.json();

    //test api call
    console.log(getResults);

    createHTML(getResults);
  } catch (error) {
    console.log(error);
  }
}

getProducts();

function createHTML(products) {
  products.forEach(function (product) {
    productContainer.innerHTML += `<a href="product.html?id=${product.id}" class="product" >
           
            <img src="${product.images[0].src}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.prices.price} ${product.prices.currency_code}</p>
            </a>`;
  });
}
