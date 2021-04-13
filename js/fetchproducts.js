//JS for fetching api

const url = "https://www.andreasletta.eu/wp-json/wc/store/products";
const productContainer = document.querySelector("#shopproducts");

async function getProducts() {
  try {
    const respons = await fetch(url);
    const getResults = await respons.json();

    //test api call
    console.log(getResults);
    /*
    productContainer.innerHTML = "Hi";

    for (let i = 0; i < getResults.length; i++) {
      const productName = getResults[i].name;
      console.log(productName);

      //display result

      productContainer.innerHTML += `<div class="product"><h2>` + getResults[i];
    }

    //
    */
    createHTML(getResults);
  } catch (error) {
    console.log(error);
    productContainer.innerHTML = "Error loading page!";
  }
}

getProducts();

function createHTML(products) {
  console.log("hello");

  products.forEach(function (product) {
    productContainer.innerHTML += `<div class="product">
            <h2>${product.name}</h2>
            <img src="${product.images[0].src}" alt="${product.name}">
            </div>`;
  });
}
