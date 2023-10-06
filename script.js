const sidebar = document.querySelector('.sidebar');
const pageContent = document.querySelector('.listingContent');
const productListing = document.querySelector(".productListing");

document.addEventListener('click', function (event) {

    if (productListing.classList.contains('active') && pageContent.contains(event.target)) {
        console.log("OK")
        productListing.classList.remove("active");
        document.getElementById('hamburgerBtn').style.display = "inline";
    }
});

var hamburger = document.querySelector(".hamburger_menu");
hamburger.addEventListener("click", function () {
    if (!productListing.classList.contains('active')) {
        productListing.classList.toggle("active");
        document.getElementById('hamburgerBtn').style.display = "none";
    }

})

var close = document.querySelector(".close_menu");
close.addEventListener("click", function () {
    productListing.classList.toggle("active");
    document.getElementById('hamburgerBtn').style.display = "inline";
})


// function addProductFormSubmit(event) {
//     event.preventDefault();
//     const form = document.getElementById('productForm');
//     const formData = {};
//     for (const element of form.elements) {
//         if (element.name && element.name != 'warranty') {
//             formData[element.name] = element.value;
//         }
//     }

//     const selectedWarranty = document.querySelector('input[name="warranty"]:checked').value;
//     formData["warranty"] = selectedWarranty;
//     console.log(formData);
// }

