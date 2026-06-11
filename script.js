const button = document.getElementById("generator-button");
const firstPassElement = document.getElementById("first-password");
const secondPassElement = document.getElementById("second-password");
const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}\\|;:'\",.<>/?`~".split(
        "",
    );
let length = 16;

if (window.innerWidth < 500) {
    document.getElementById("main-container").style.display = "none";
    document.getElementById("visibility-hint").style.display = "block";
}

button.addEventListener("click", () => {
    firstPassElement.textContent = generatePassword();
    secondPassElement.textContent = generatePassword();
});

function generatePassword() {
    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }
    return password;
}
