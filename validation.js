document.getElementById("registroForm").addEventListener("submit", function(event) {
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;

    if (!nombre.trim() || !correo.includes("@")) {
        alert("Por favor, completa los campos correctamente.");
        event.preventDefault();
    } else {
        alert("¡Registro exitoso! Pronto nos pondremos en contacto.");
    }
});
