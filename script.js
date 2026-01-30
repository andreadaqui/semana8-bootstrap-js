function mostrarAlerta() {
    alert("Gracias por visitar nuestra página");
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || email === "" || mensaje === "") {
        alert("Todos los campos son obligatorios");
    } else {
        alert("Formulario enviado correctamente");
    }
});
