const email = document.getElementById("email")
const form = document.getElementById("form")
const btn = document.getElementById("btn")
const alert = document.getElementById("alert")
const regex = /^\w+([-+.']'\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/


btn.addEventListener("click", function(event) {
    event.preventDefault()
    if(!regex.test(email.value)){
        form.classList.add("was-validated")
    } else{
        alert.style.display = "flex"
        form.classList.add("was-validated")
        setTimeout(() => location.href = "./login.html",2000)
    }
})
