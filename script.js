const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

const patterns = {
    phoneNumber: /^\d{11}$/,
    firstName: /^[a-z\d]{3,20}$/i,
    lastName: /^[a-z\d]{3,20}$/i,
    password: /^[\w@-]{8,20}$/,
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
        //   console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value])
    });
});

form.addEventListener("submit", e => {
    const password1 = document.querySelector(".password1");
    const password2 = document.querySelector(".password2");
    if (password1 !== password2) {
        e.preventDefault();
        password1.classList.add('error');
        password2.classList.add('error');
    }

})



