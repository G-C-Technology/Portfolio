const btn = document.getElementById("theme-toggle");

// Cargar el tema guardado al iniciar
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    btn.textContent = "Modo Claro";
}

// Agregar el evento click al botón
btn.addEventListener("click", () => {
    // Alterna la clase .dark-mode en el elemento <body>
    document.body.classList.toggle("dark-mode");

    // Cambiar el texto del botón según el modo
    if (document.body.classList.contains("dark-mode")) {
        btn.textContent = "Modo Claro";
        localStorage.setItem("theme", "dark"); // Guardar el modo oscuro
    } else {
        btn.textContent = "Modo Oscuro";
        localStorage.setItem("theme", "light"); // Guardar el modo claro
    }
});
