const email = document.getElementById("email")
const senha = document.getElementById("senha")
const form = document.getElementById("form")
const btn = document.getElementById("btn")
const alert = document.getElementById("alert")
const regex = /^\w+([-+.']'\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/


btn.addEventListener("click", function (event) {
    event.preventDefault()
    if (!regex.test(email.value) || senha.value == "") {
        form.classList.add("was-validated")
    } else {
        alert.style.display = "flex"
        setTimeout(() => location.href = "./plataforma.html",2000)
    }

})
