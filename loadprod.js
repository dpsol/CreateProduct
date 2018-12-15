// Steps to complete:

// 1. Initialize Firebase
// 2. Create button for adding new products - then update the html + update the database
// 3. Create a way to retrieve products from the product database.
// 4. Create a way to calculate the months worked. Using difference between start and current time.
//    Then use moment.js formatting to set difference in months.
// 5. Calculate Total billed


// 1. Initialize Firebase
const config = {
    apiKey: "AIzaSyD_jpqFGTjqlWlaLld64iAputwcT6s9RMI",
    authDomain: "gyfted-inc.firebaseapp.com",
    databaseURL: "https://gyfted-inc.firebaseio.com",
    projectId: "gyfted-inc",
    storageBucket: "gyfted-inc.appspot.com",
    messagingSenderId: "870200768668"
 };
  
  firebase.initializeApp(config);
  
  var database = firebase.database();
  
  // 2. Button for adding products
  $("#add-product-btn").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    var prodSku = $("#product-sku-input").val().trim();
    var prodGen = $("#product-genres-input").val().trim();
    var prodCat = $("#product-categories-input").val().trim();
    var prodSubCat = $("#product-sub-categories-input").val().trim();
    var prodBrand = $("#product-brand-input").val().trim();
    var prodTitle = $("#product-title-input").val().trim();
    var prodDesc = $("#product-desc-input").val().trim();
    var prodSpec = $("#product-spec-input").val().trim();
    var prodColor1 = $("#product-color-input1").val().trim();
    var prodColor2 = $("#product-color-input2").val().trim();
    var prodColor3 = $("#product-color-input3").val().trim();
    var prodColor4 = $("#product-color-input4").val().trim();
    var prodColor5 = $("#product-color-input5").val().trim();
    var prodColor6 = $("#product-color-input6").val().trim();
    var prodImage1 = $("#product-image-input1").val().trim();
    var prodImage2 = $("#product-image-input2").val().trim();
    var prodImage3 = $("#product-image-input3").val().trim();
    var prodImage4 = $("#product-image-input4").val().trim();
    var prodLocation1 = $("#product-location-input1").val().trim();
    var prodLocation2 = $("#product-location-input2").val().trim();
    var prodLocation3 = $("#product-location-input3").val().trim();
    var prodLocation4 = $("#product-location-input4").val().trim();
    var prodLocation5 = $("#product-location-input5").val().trim();
    var prodPrice = $("#product-price-input").val().trim();
    var prodDiscPrice = $("#product-discount-price-input").val().trim();
  
    // Creates local "temporary" object for holding product data
    var newProd = {
      sku: prodSku,
      genres: prodGen,
      categories: prodCat,
      subcategories: prodSubCat,
      brand: prodBrand,
      title: prodTitle,
      desc: prodDesc,
      spec: prodSpec,
      //make into a object
      color: {
        prodColor1,
        prodColor2,
        prodColor3,
        prodColor4,
        prodColor5,
        prodColor6
      },
      image: {
        prodImage1,
        prodImage2,
        prodImage3,
        prodImage4
      },
      //make into a object
      location: {
        prodLocation1,
        prodLocation2,
        prodLocation3,
        prodLocation4,
        prodLocation5

      },
      price: prodPrice,
      discPrice: prodDiscPrice
    };
  
    // Uploads product data to the database
    database.ref().push(newProd);
  
    // Logs everything to console
    console.log(newProd.sku);
    console.log(newProd.genres);
    console.log(newProd.categories);
    console.log(newProd.subcategories);
    console.log(newProd.brand);
    console.log(newProd.title);
    console.log(newProd.desc);
    console.log(newProd.spec);
    console.log(newProd.color);
    console.log(newProd.image);
    console.log(newProd.location);
    console.log(newProd.price);
    console.log(newProd.discPrice);
  
    alert("Product successfully added");
  
    // Clears all of the text-boxes
    $("#product-sku-input").val("");
    $("#product-genres-input").val("");
    $("#product-categories-input").val("");
    $("#product-sub-categories-input").val("");
    $("#product-brand-input").val("");
    $("#product-title-input").val("");
    $("#product-desc-input").val("");
    $("#product-spec-input").val("");
    $("#product-color-input1").val("");
    $("#product-color-input2").val("");
    $("#product-color-input3").val("");
    $("#product-color-input4").val("");
    $("#product-color-input5").val("");
    $("#product-color-input6").val("");
    $("#product-image-input1").val("");
    $("#product-image-input2").val("");
    $("#product-image-input3").val("");
    $("#product-image-input4").val("");
    $("#product-location-input1").val("");
    $("#product-location-input2").val("");
    $("#product-location-input3").val("");
    $("#product-location-input4").val("");
    $("#product-location-input5").val("");
    $("#product-price-input").val("");
    $("#product-discount-price-input").val("");
  });
  
  // 3. Create Firebase event for adding product to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var prodSku = childSnapshot.val().sku;
    var prodGen = childSnapshot.val().genres;
    var prodCat = childSnapshot.val().categories;
    var prodSubCat = childSnapshot.val().subcategories;
    var prodBrand = childSnapshot.val().brand;
    var prodTitle = childSnapshot.val().title;
    var prodDesc = childSnapshot.val().desc;
    var prodSpec = childSnapshot.val().spec;
    var prodColor = childSnapshot.val().color;
    var prodImage = childSnapshot.val().image;
    var prodLocation = childSnapshot.val().location;
    var prodPrice = childSnapshot.val().price;
    var prodDiscPrice = childSnapshot.val().discPrice;
  
    // product Info
    console.log(prodSku);
    console.log(prodGen);
    console.log(prodCat);
    console.log(prodSubCat);
    console.log(prodBrand);
    console.log(prodTitle);
    console.log(prodDesc);
    console.log(prodSpec);
    console.log(prodColor);
    console.log(prodImage);
    console.log(prodLocation);
    console.log(prodPrice);
    console.log(prodDiscPrice);

  
    // Create the new row
    var newRow = $("<tr>").append(
      $("<td>").text(prodSku),
      $("<td>").text(prodGen),
      $("<td>").text(prodCat),
      $("<td>").text(prodSubCat),
      $("<td>").text(prodBrand),
      $("<td>").text(prodTitle),
      $("<td>").text(prodDesc),
      $("<td>").text(prodSpec),
      $("<td>").text(prodColor),
      $("<td>").text(prodImage),
      $("<td>").text(prodLocation),
      $("<td>").text(prodPrice),
      $("<td>").text(prodDiscPrice)
    );
  
    // Append the new row to the table
    $("#product-table > tbody").append(newRow);
  });
  
  // Example Time Math
  // -----------------------------------------------------------------------------
  // Assume Product start date of January 1, 2015
  // Assume current date is March 1, 2016
  
  // We know that this is 15 months.
  // Now we will create code in moment.js to confirm that any attempt we use meets this test case