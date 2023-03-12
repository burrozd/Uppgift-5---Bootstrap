function validateEmail() {
    var email = document.getElementById("email").value; // Get the value of the input field
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(email)) {
        alert(
            "Var god och ange en giltig E-mail adress samt i rätt format (ex: john@doe.com)"
        );
        return false;
    }
    var domain = email.split("@")[1];
    console.log("domain:", domain);
    var tld = domain.match(/\.[^.]+$/)[0]; // Extract the TLD by matching the last dot and the characters that follow it
    console.log("tld:", tld);
    if (tld !== ".com" && tld !== ".se" && tld !== ".org") {
        alert("Va god att ange en E-mail som slutar med .com, .se eller .org");
        return false;
    }
    return true;
}

function strongPassword() {
    var password = document.getElementById("password").value;

    if (password.length < 8) {
        alert("Ditt lösenord måste vara längre än åtta karaktärer!");
        return false;
    }

    if (!/[A-Z]/.test(password)) {
        alert("Ditt lösenord måste innehålla minst en stor bokstav!");
        return false;
    }
    if (!/[a-z]/.test(password)) {
        alert("Ditt lösenord måste innehålla minst en liten bokstav");
        return false;
    }

    if (!/\d/.test(password)) {
        alert("Ditt lösenord måste inneehålla en siffra!");
        return false;
    }

    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
        alert("Ditt lösenord måste innehålla minst en särskild karaktär");
    }
    return true;
}

const signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(signupForm);
    console.log({
        name: formData.get("username"),
        email: formData.get("email"),
        fullname: formData.get("fullname"),
        password: formData.get("password"),
    });
});

const login = document.getElementById("login");

login.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(login);
    console.log({
        username: formData.get("loginUsername"),
        password: formData.get("loginPassword"),
    });
});