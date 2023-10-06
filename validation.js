function validationSignIn(event) {
    const form = document.getElementById('signInForm');
    for (const element of form.elements) {
        let value = element.value;
        let type = element.type;
        if (type == "email") {
            const emailPattern = new RegExp(/^[a-zA-Z0-9_\.\-]+\@[a-zA-Z0-9\-]+\.[a-zA-Z]{2,4}$/);
            if (!emailPattern.test(value)) {
                event.preventDefault();
                document.getElementById("errorValidateEmail").innerHTML = "Email is not a valid email!";
            }
        }
        if (type == "password") {
            const pwdPattern = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\$\@\%]).{6,}$/);
            if (!pwdPattern.test(value)) {
                // console.log(value);
                event.preventDefault();
                document.getElementById("errorValidatePwd").innerHTML = "Your password must have 'at least one uppercase, one lowercase, one symbol and one digit with a minimum of 6 characters!'";
            }
        }
    }
}

function addProductFormSubmit(event) {
    const form = document.getElementById('productForm');
    for (const element of form.elements) {
        let name = element.name;
        let value = element.value;
        if (name == 'price') {
            lowerTargetValue = 10;
            upperTargetValue = 1000000;
            if (value <= lowerTargetValue || value >= upperTargetValue) {
                event.preventDefault();
                document.getElementById('errorValidatePrice').innerHTML = "Price has to be in the range between 10 and 1000000";
            }
        }

        if (name == "productName") {
            let regexPattern = new RegExp(/^[A-Z]/)
            if (!regexPattern.test(value)) {
                event.preventDefault();
                document.getElementById('errorValidateProductName').innerHTML = "First letter has to be uppercase!";
            }
        }

    }
}