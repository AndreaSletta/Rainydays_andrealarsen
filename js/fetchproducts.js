window.onload = function () {
  //JS for fetching api

  const url = "https://www.andreasletta.eu/wp-json/wc/store/products";
  const productContainer = document.querySelector("#shopproducts");

  // sortin bar

  const sortWomen = document.querySelector("#sortwomen");
  const sortMen = document.querySelector("#sortmen");

  const sortNew = document.querySelector("#sortnew");
  const sortPopulare = document.querySelector("#sortpopulare");

  const sortBlue = document.querySelector("#sortblue");
  const sortRed = document.querySelector("#sortred");
  const sortYellow = document.querySelector("#sortyellow");
  const sortPurple = document.querySelector("#sortpurple");

  const sortContainer = document.querySelector("#sortContainer");
  const clearFilter = document.querySelector("#filterlabel");

  async function getProducts() {
    try {
      const respons = await fetch(url);
      const getResults = await respons.json();

      //test api call
      console.log(getResults);
      getSort(getResults);

      createHTML(getResults);

      // sort

      function getSort(allProducts) {
        allProducts.forEach(function (allProduct) {
          const productCategories = allProduct.categories;

          for (var i = 0; i < productCategories.length; i++) {
            const categoryName = productCategories[i].name;

            function showMen() {
              if (categoryName == "Men") {
                productContainer.style.display = "none";
                clearFilter.style.display = "block";
                sortContainer.style.display = "grid";
                sortContainer.innerHTML += `<a href="product.html?id=${allProduct.id}" class="product" >
             
                <img src="${allProduct.images[0].src}" alt="${allProduct.name}">
                <h2>${allProduct.name}</h2>
                <p>${allProduct.prices.price} ${allProduct.prices.currency_code}</p>
                </a>`;
              }
            }

            sortMen.addEventListener("click", showMen);

            function showWomen() {
              if (categoryName == "Women") {
                productContainer.style.display = "none";
                clearFilter.style.display = "block";
                sortContainer.style.display = "grid";
                sortContainer.innerHTML += `<a href="product.html?id=${allProduct.id}" class="product" >
             
                <img src="${allProduct.images[0].src}" alt="${allProduct.name}">
                <h2>${allProduct.name}</h2>
                <p>${allProduct.prices.price} ${allProduct.prices.currency_code}</p>
                </a>`;
              }
            }

            sortWomen.addEventListener("click", showWomen);

            function showNew() {
              if (categoryName == "New") {
                productContainer.style.display = "none";
                clearFilter.style.display = "block";
                sortContainer.style.display = "grid";
                sortContainer.innerHTML += `<a href="product.html?id=${allProduct.id}" class="product" >
             
                <img src="${allProduct.images[0].src}" alt="${allProduct.name}">
                <h2>${allProduct.name}</h2>
                <p>${allProduct.prices.price} ${allProduct.prices.currency_code}</p>
                </a>`;
              }
            }

            sortNew.addEventListener("click", showNew);

            function showPopulare() {
              if (categoryName == "Populare") {
                productContainer.style.display = "none";
                clearFilter.style.display = "block";
                sortContainer.style.display = "grid";
                sortContainer.innerHTML += `<a href="product.html?id=${allProduct.id}" class="product" >
             
                <img src="${allProduct.images[0].src}" alt="${allProduct.name}">
                <h2>${allProduct.name}</h2>
                <p>${allProduct.prices.price} ${allProduct.prices.currency_code}</p>
                </a>`;
              }
            }

            sortPopulare.addEventListener("click", showPopulare);

            function showBlue() {
              if (categoryName == "Blue") {
                productContainer.style.display = "none";
                clearFilter.style.display = "block";
                sortContainer.style.display = "grid";
                sortContainer.innerHTML += `<a href="product.html?id=${allProduct.id}" class="product" >
             
                <img src="${allProduct.images[0].src}" alt="${allProduct.name}">
                <h2>${allProduct.name}</h2>
                <p>${allProduct.prices.price} ${allProduct.prices.currency_code}</p>
                </a>`;
              }
            }

            sortBlue.addEventListener("click", showBlue);

            function showRed() {
              if (categoryName == "Red") {
                productContainer.style.display = "none";
                clearFilter.style.display = "block";
                sortContainer.style.display = "grid";
                sortContainer.innerHTML += `<a href="product.html?id=${allProduct.id}" class="product" >
             
                <img src="${allProduct.images[0].src}" alt="${allProduct.name}">
                <h2>${allProduct.name}</h2>
                <p>${allProduct.prices.price} ${allProduct.prices.currency_code}</p>
                </a>`;
              }
            }

            sortRed.addEventListener("click", showRed);

            function showYellow() {
              if (categoryName == "Yellow") {
                productContainer.style.display = "none";
                clearFilter.style.display = "block";
                sortContainer.style.display = "grid";
                sortContainer.innerHTML += `<a href="product.html?id=${allProduct.id}" class="product" >
             
                <img src="${allProduct.images[0].src}" alt="${allProduct.name}">
                <h2>${allProduct.name}</h2>
                <p>${allProduct.prices.price} ${allProduct.prices.currency_code}</p>
                </a>`;
              }
            }

            sortYellow.addEventListener("click", showYellow);

            function showPurple() {
              if (categoryName == "Purple") {
                productContainer.style.display = "none";
                clearFilter.style.display = "block";
                sortContainer.style.display = "grid";
                sortContainer.innerHTML += `<a href="product.html?id=${allProduct.id}" class="product" >
             
                <img src="${allProduct.images[0].src}" alt="${allProduct.name}">
                <h2>${allProduct.name}</h2>
                <p>${allProduct.prices.price} ${allProduct.prices.currency_code}</p>
                </a>`;
              }
            }

            sortPurple.addEventListener("click", showPurple);

            //clear filter
            function clearAll() {
              productContainer.style.display = "grid";
              clearFilter.style.display = "none";
              sortContainer.style.display = "none";
              sortContainer.innerHTML = "";
            }

            clearFilter.addEventListener("click", clearAll);
          }
        });
      }
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
};
