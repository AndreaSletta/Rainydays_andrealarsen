window.onload = function () {
  const productIntro = document.querySelector(".productintro");
  const carouselitem1 = document.querySelector(".item-1");
  const carouselitem2 = document.querySelector(".item-2");
  const dropdownDetails = document.querySelector(".dropdownproduct-details");
  const dropdownSizeguide = document.querySelector(
    ".dropdownproduct-sizeguide"
  );
  const producDescription = document.querySelector(".produchelp");
  const productOptions = document.querySelector(".productoptions");
  const currentProductLink = document.querySelector(".productLink");

  const queryString = document.location.search;

  const params = new URLSearchParams(queryString);

  const id = params.get("id");

  const url = "https://www.andreasletta.eu/wp-json/wc/store/products";

  const productURL =
    "https://www.andreasletta.eu/wp-json/wc/store/products/" + id;

  // get singe product

  async function getProduct() {
    try {
      const respons = await fetch(productURL);
      const productDetails = await respons.json();

      createHTML(productDetails);

      // get all products

      async function getAllProducts() {
        try {
          const respons = await fetch(url);
          const getResults = await respons.json();
          getProducts(getResults);
        } catch (error) {
          console.log(error);
        }
      }
      getAllProducts();

      function getProducts(allProducts) {
        const currentProductCategories = productDetails.categories;

        // determin category
        for (var i = 0; i < currentProductCategories.length; i++) {
          const category = currentProductCategories[i].name;

          allProducts.forEach(function (allProduct) {
            const productCategories = allProduct.categories;

            for (var i = 0; i < productCategories.length; i++) {
              if (
                category == "Men" &&
                productCategories[i].name == "Men" &&
                allProduct.id != id
              ) {
                console.log("Men");
                productOptions.innerHTML += `
            <a href="product.html?id=${allProduct.id}" class="coloroptions">
        <div  class="colorselection">
          <img src="${allProduct.images[0].src}" alt="${allProduct.images[0].alt}"/>
        </div>
        </a>`;
              } else if (
                category == "Women" &&
                productCategories[i].name == "Women" &&
                allProduct.id != id
              ) {
                console.log("Women");
                productOptions.innerHTML += `
            <a href="product.html?id=${allProduct.id}" class="coloroptions">
        <div  class="colorselection">
          <img src="${allProduct.images[0].src}" alt="${allProduct.images[0].alt}"/>
        </div>
        </a>`;
              }
            }
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  getProduct();

  function createHTML(productDetails) {
    currentProductLink.innerHTML += `<a>
  ${productDetails.name}
  </a>`;

    carouselitem1.innerHTML += `<img src="${productDetails.images[0].src}" alt="${productDetails.images[0].alt}" />`;
    carouselitem2.innerHTML += `<img src="${productDetails.images[1].src}" alt="${productDetails.images[1].alt}" />`;
    carouselitem2.style.display = "none";

    function changeImage() {
      if (carouselitem2.style.display === "none") {
        carouselitem2.style.display = "block";
        carouselitem1.style.display = "none";
      }
    }

    function changeImageBack() {
      if (carouselitem1.style.display === "none") {
        carouselitem1.style.display = "block";
        carouselitem2.style.display = "none";
      }
    }

    carouselitem1.addEventListener("click", changeImage);
    carouselitem2.addEventListener("click", changeImageBack);

    productIntro.innerHTML += ` 
   <h2> ${productDetails.name}</h2>`;
    productOptions.innerHTML += `<a href="product.html?id=${productDetails.id}" class="coloroptions">
   <div id="jacketborder" class="colorselection">
   <img src="${productDetails.images[0].src}">
   </div>
   </a>`;
    producDescription.innerHTML += `${productDetails.short_description}`;
    dropdownDetails.innerHTML += `${productDetails.description}`;
    dropdownSizeguide.innerHTML += `${productDetails.description}`;
  }
};
