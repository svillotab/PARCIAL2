function login() {
let email = document.getElementById("email").value
let pass = document.getElementById("password").value
if(email !== " " && pass !== " ") {
    if(email === "svillotaber@gmail.com" && pass === "aaaa"){
        window.location = ""
    } else {
        alert("Correo o contraseña incorrectos")
    }
} else {
    alert("Por favor complete los campos para continuar")
}
}