               // Nav Bar
        //country select dropdown
const country = document.getElementById("country")
const textele = document.getElementById("text")
const listelement = document.getElementById("country-list")

country.addEventListener("click",()=>{
    listelement.classList.toggle("hidden")
})

function click_country(x){
    textele.innerText = x
}

        // user dropdown
const userimageelement = document.getElementById("user-image-id")
const dropdownelement = document.getElementById("dropdown-id")

userimageelement.addEventListener("click",()=>{
    dropdownelement.classList.toggle('dropdownel')
})

      // add product dropdown
const probtnele = document.getElementById("add-product-btn")
const prodropdown = document.getElementById("productForm")
probtnele.addEventListener("click",()=>{
    prodropdown.classList.toggle('addprodropdown')
})
     
document.getElementById("addProductForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Retrieve input values
    var image = document.getElementById("imageinput").files[0];
    var model = document.getElementById("modelinput").value;  
    var model = document.getElementById("typeinput").value;           
    var about = document.getElementById("aboutinput").value;
    var price = document.getElementById("priceinput").value;
    var address = document.getElementById("addressinput").value;
    var contact = document.getElementById("contactinput").value;
  
    // Create new elements
    var productContainer = document.createElement("div");
    productContainer.classList.add("product-container");
  
    var imageElement = document.createElement("img");
    imageElement.src = URL.createObjectURL(image);
    imageElement.alt = "Product Image";
  
    var detailsElement = document.createElement("div");
    detailsElement.classList.add("product-details");
  
    var modelElement = document.createElement("h2");
    modelElement.textContent = "Model: " + model;
  
    var aboutElement = document.createElement("p");
    aboutElement.textContent = "About: " + about;
  
    var priceElement = document.createElement("p");
    priceElement.textContent = "Price: " + price;
  
    var addressElement = document.createElement("p");
    addressElement.textContent = "Address: " + address;
  
    var contactElement = document.createElement("p");
    contactElement.textContent = "Contact: " + contact;
  
    // Append new elements to the hero section
            productContainer.appendChild(imageElement);
            detailsElement.appendChild(modelElement);
            detailsElement.appendChild(aboutElement);
            detailsElement.appendChild(priceElement);
            detailsElement.appendChild(addressElement);
            detailsElement.appendChild(contactElement);
            productContainer.appendChild(detailsElement);
          
            var heroSection = document.getElementById("hero-section");
            heroSection.appendChild(productContainer);
          
            // Clear form inputs
            document.getElementById("addProductForm").reset();
          });
          