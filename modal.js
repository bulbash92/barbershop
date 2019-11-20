let link = document.querySelector(".login-link");
let popup = document.querySelector(".modal-login");
let close = popup.querySelector(".modal-close");
let login = popup.querySelector("[name=login]");
let password = popup.querySelector("[name=password]");
let form = popup.querySelector("form");
let storage = localStorage.getItem("login");
 

form.addEventListener("submit", function (evt) {
    if (!login.value || !password.value) {
        evt.preventDefault();
        popup.classList.add("modal-error");
    } else {
        localStorage.setItem("login", login.value);
    }
});

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error")
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error")
        }
    }
});

