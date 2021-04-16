window.onload = function () {
  //JS for fetching api

  const url = "https://www.andreasletta.eu/wp-json/wc/store/products";
  const featuredProductsContainer = document.querySelector("#indexcarousel");

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

  function createHTML(featuredProducts) {
    featuredProducts.forEach(function (featuredProduct) {
      const productCategories = featuredProduct.categories;
      for (var i = 0; i < productCategories.length; i++) {
        if (productCategories[i].name === "Featured") {
          featuredProductsContainer.innerHTML += `
        <div class="carouselcontent">
          <div class="carouselimage">
          <img src="${featuredProduct.images[0].src}" alt="${featuredProduct.images[0].alt}"/>
          </div>
          <a href="product.html?id=${featuredProduct.id}">SHOP NOW</a>
        </div>
        `;
        }
      }
    });
  }
};
