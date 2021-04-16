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

// sorting bar
/*

window.onload = function () {
  const checkBlue = document.querySelector("#blue");
  const checkRed = document.querySelector("#red");
  const checkPurple = document.querySelector("#purple");
  const checkYellow = document.querySelector("#yellow");

  const productBlue = document.querySelectorAll(".productblue");
  const productRed = document.querySelectorAll(".productred");
  const productPurple = document.querySelectorAll(".productpurple");
  const productYellow = document.querySelectorAll(".productyellow");

  const checkNew = document.querySelector("#new");
  const checkPopulare = document.querySelector("#populare");

  const productNew = document.querySelectorAll(".productnew");
  const productPopulare = document.querySelectorAll(".productpopulare");

  const checkMen = document.querySelector("#men");
  const checkWomen = document.querySelector("#women");

  const productMen = document.querySelectorAll(".productmen");
  const productWomen = document.querySelectorAll(".productwomen");

  const filterButton = document.querySelector("#filterlabel");
  const allProducts = document.querySelectorAll(".productlist");

  //colors

  function hideColor(color) {
    var chosenColor;
    var otherColors;

    switch (color) {
      case "yellow":
        otherColors = [productBlue, productPurple, productRed];
        chosenColor = productYellow;
        break;
      case "blue":
        otherColors = [productYellow, productPurple, productRed];
        chosenColor = productBlue;
        break;
      case "red":
        otherColors = [productBlue, productPurple, productYellow];
        chosenColor = productRed;
        break;
      case "purple":
        otherColors = [productBlue, productYellow, productRed];
        chosenColor = productPurple;
        break;
      default:
        console.log("Invalid product picked");
        return;
    }

    //Displays chosen colors
    for (var i = 0; i < chosenColor.length; i++) {
      chosenColor[i].style.display = "block";
    }

    // Hides other colors
    for (var i = 0; i < otherColors.length; i++) {
      for (var j = 0; j < otherColors[i].length; j++) {
        otherColors[i][j].style.display = "none";
      }
    }

    // display filter button
    filterButton.style.display = "flex";
  }

  checkYellow.addEventListener("change", function () {
    hideColor("yellow");
  });
  checkRed.addEventListener("change", function () {
    hideColor("red");
  });
  checkBlue.addEventListener("change", function () {
    hideColor("blue");
  });
  checkPurple.addEventListener("change", function () {
    hideColor("purple");
  });

  //sort

  function hideSort(sort) {
    var chosenSort;
    var otherSorts;

    switch (sort) {
      case "new":
        otherSorts = [productPopulare];
        chosenSort = productNew;
        break;
      case "populare":
        otherSorts = [productNew];
        chosenSort = productPopulare;
        break;

      default:
        console.log("Invalid product picked");
        return;
    }

    //Displays chosen colors
    for (var i = 0; i < chosenSort.length; i++) {
      chosenSort[i].style.display = "block";
    }

    // Hides other colors
    for (var i = 0; i < otherSorts.length; i++) {
      for (var j = 0; j < otherSorts[i].length; j++) {
        otherSorts[i][j].style.display = "none";
      }
    }
    // display filter button
    filterButton.style.display = "flex";
  }

  checkNew.addEventListener("change", function () {
    hideSort("new");
  });
  checkPopulare.addEventListener("change", function () {
    hideSort("populare");
  });

  //gender

  function hideGender(sort) {
    var chosenGender;
    var otherGender;

    switch (sort) {
      case "men":
        otherGender = [productWomen];
        chosenGender = productMen;
        break;
      case "women":
        otherGender = [productMen];
        chosenGender = productWomen;
        break;

      default:
        console.log("Invalid product picked");
        return;
    }

    //Displays chosen colors
    for (var i = 0; i < chosenGender.length; i++) {
      chosenGender[i].style.display = "block";
    }

    // Hides other colors
    for (var i = 0; i < otherGender.length; i++) {
      for (var j = 0; j < otherGender[i].length; j++) {
        otherGender[i][j].style.display = "none";
      }
    }
    // display filter button
    filterButton.style.display = "flex";
  }

  checkMen.addEventListener("change", function () {
    hideGender("men");
  });
  checkWomen.addEventListener("change", function () {
    hideGender("women");
  });

  // Make button clear all filter
  function clearFilter() {
    for (var i = 0; i < allProducts.length; i++) {
      allProducts[i].style.display = "block";
    }

    // display filder button
    filterButton.style.display = "none";
  }
  filterButton.addEventListener("click", clearFilter);
}; */
