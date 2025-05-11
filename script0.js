const mm = document.querySelector(".mm");
const yy = document.querySelector(".yy");
const error2 = document.querySelector(".error2");
const error3 = document.querySelector(".error3");
const submit = document.querySelector(".btn");
const form = document.querySelector(".form");

function isdigit(str) {
    return (
        str.length > 0 && [...str].every((char) => char >= "0" && char <= "9")
    );
}

mm.addEventListener("input", function () {
    validateMMYY();
});

yy.addEventListener("input", function () {
    validateMMYY();
});

function validateMMYY() {
    if (
        mm.value.length === 0 ||
        yy.value.length === 0 ||
        !isdigit(mm.value) ||
        !isdigit(yy.value)
    ) {
        mm.style.outline = "2px solid hsl(0, 100%, 66%)";
        yy.style.outline = "2px solid hsl(0, 100%, 66%)";
        error2.classList.remove("hidden");
    } else {
        mm.style.outline = "";
        yy.style.outline = "";
        error2.classList.add("hidden");
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    validateMMYY();
    if (cvc.value.length === 0 || !isdigit(cvc.value)) {
        cvc.style.outline = "2px solid hsl(0, 100%, 66%)";
        error3.classList.remove("hidden");
    }

    if (
        error2.classList.contains("hidden") &&
        error3.classList.contains("hidden") &&
        mm.value.trim().length !== 0 &&
        yy.value.trim().length !== 0 &&
        cvc.value.trim().length !== 0
    ) {
        window.location.href = "main.html";
    }
});
