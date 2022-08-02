const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

const patterns = {
    phoneNumber: /^\d{9}$/,
    firstName: /^[a-z]{3,20}$/i,
    lastName: /^[a-z\-]{3,20}$/i,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    // /^[\w@-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
    // (yourname) @ (domain) . (extension) (.again)
}

//validation function
function validate(field, regex) {
    if (regex.test(field.value)) {
        field.className = "valid";
    } else {
        field.className = "invalid";
    }
}

inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        if (e.target.id === "password2") {
            const password1 = document.getElementById("password1");
            const password2 = document.getElementById("password2");
            if (password1.value !== password2.value) {
                password2.classList.add("invalid");
            } else {
                password2.classList.remove("invalid");
                password2.classList.add("valid");
            }

        } else {
            //   console.log(e.target.attributes.name.value);
            validate(e.target, patterns[e.target.attributes.name.value])
        }
    });
});

form.addEventListener("submit", e => {
    e.preventDefault();
})



