const config = {
    apiKey: "AIzaSyD_jpqFGTjqlWlaLld64iAputwcT6s9RMI",
    authDomain: "gyfted-inc.firebaseapp.com",
    databaseURL: "https://gyfted-inc.firebaseio.com",
    projectId: "gyfted-inc",
    storageBucket: "gyfted-inc.appspot.com",
    messagingSenderId: "870200768668"
 };
  
  firebase.initializeApp(config);
  
  var firestore = firebase.firestore();
  var collRef = firestore.collection("Products");
  
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
    var prodImage11 = $("#product-image-input11").val().trim();
    var prodImage12 = $("#product-image-input12").val().trim();
    var prodImage2 = $("#product-image-input2").val().trim();
    var prodImage21 = $("#product-image-input21").val().trim();
    var prodImage22 = $("#product-image-input22").val().trim();
    var prodImage3 = $("#product-image-input3").val().trim();
    var prodImage31 = $("#product-image-input31").val().trim();
    var prodImage32 = $("#product-image-input32").val().trim();
    var prodImage4 = $("#product-image-input4").val().trim();
    var prodImage41 = $("#product-image-input41").val().trim();
    var prodImage42 = $("#product-image-input42").val().trim();
    var prodLocation1 = $("#product-location-input1").val().trim();
    var prodLocation2 = $("#product-location-input2").val().trim();
    var prodLocation3 = $("#product-location-input3").val().trim();
    var prodLocation4 = $("#product-location-input4").val().trim();
    var prodLocation5 = $("#product-location-input5").val().trim();
    var prodPrice = $("#product-price-input").val().trim();
    var prodDiscPrice = $("#product-discount-price-input").val().trim();
  
    var docRef = collRef.doc();
    var colorArray = [];
    i = 0;
    if (prodColor1 != "") {
        colorArray[i] = prodColor1;
        i++;
    }
    if (prodColor2 != "") {
        colorArray[i] = prodColor2;
        i++;
    }
    if (prodColor3 != "") {
        colorArray[i] = prodColor3;
        i++;
    }
    if (prodColor4 != "") {
        colorArray[i] = prodColor4;
        i++;
    }
    if (prodColor5 != "") {
        colorArray[i] = prodColor5;
        i++;
    }
    if (prodColor6 != "") {
        colorArray[i] = prodColor6;
        i++;
    }

    var locationArray = [];
    i = 0;
    if (prodLocation1 != "") {
        locationArray[i] = prodLocation1;
        i++;
    }
    if (prodLocation2 != "") {
        locationArray[i] = prodLocation2;
        i++;
    }
    if (prodLocation3 != "") {
        locationArray[i] = prodLocation3;
        i++;
    }
    if (prodLocation4 != "") {
        locationArray[i] = prodLocation4;
        i++;
    }
    if (prodLocation5 != "") {
        locationArray[i] = prodLocation5;
        i++;
    }

    try {
        var newProd = {
            Sku: prodSku,
            Gender: prodGen,
            Category: prodCat,
            SubCategory: prodSubCat,
            Brand: prodBrand,
            ModelName: prodTitle,
            Description: prodDesc,
            Specification: prodSpec,
            Price: prodPrice,
            DiscPrice: prodDiscPrice,
            //make into an object
            Color: colorArray,
            Images: {},
            //make into an object
            Location: locationArray
        };

        if (prodImage1 != "") {
            var imagesArray = [];
            imagesArray[0] = prodImage11;
            if (prodImage12 =! "")
                imagesArray[1] = prodImage12;

            newProd.Images[prodImage1] = imagesArray; 
        }
        if (prodImage2 != "") {
            var imagesArray = [];
            imagesArray[0] = prodImage21;
            if (prodImage22 =! "")
                imagesArray[1] = prodImage22;

            newProd.Images[prodImage2] = imagesArray; 
        }
        if (prodImage3 != "") {
            var imagesArray = [];
            imagesArray[0] = prodImage31;
            if (prodImage32 =! "")
                imagesArray[1] = prodImage32;

            newProd.Images[prodImage3] = imagesArray; 
        }
        if (prodImage4 != "") {
            var imagesArray = [];
            imagesArray[0] = prodImage41;
            if (prodImage42 =! "")
                imagesArray[1] = prodImage42;

            newProd.Images[prodImage4] = imagesArray; 
        }
    
        docRef.set(
            newProd
        ).then(function() {
            console.log("Producto guardado");
            alert("Product successfully added");
        }).catch(function(error) {
            console.log("Se produjo un error: ", error);
            alert("Error: " + error);
        });
    }
    catch(err) {
        alert('error');
    }
});