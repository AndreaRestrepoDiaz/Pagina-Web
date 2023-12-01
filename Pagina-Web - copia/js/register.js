document.addEventListener("DOMContentLoaded", function() {
    const signUp = document.getElementById("signUp");
    const signIn = document.getElementById("signIn");
    const nameInput = document.getElementById("nameInput");
    const title = document.getElementById("title");

    const validUser = { userName: "usuarioPrueba", password: "contrasena123" };

    function showLogin() {
        nameInput.style.maxHeight = "0";
        title.innerHTML = "Login";
        signUp.classList.add("disable");
        signIn.classList.remove("disable");
    }

    // Verificar si hay un nombre de usuario almacenado al cargar la página
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
        // Si hay un nombre de usuario almacenado, mostrar la página de inicio
        showLogin();
        console.log("Usuario almacenado:", storedUserName);
    }

    signUp.onclick = function() {
        const userName = nameInput.querySelector("input").value;
        nameInput.style.maxHeight = "60px";
        title.innerHTML = "Registro";
        signUp.classList.remove("disable");
        signIn.classList.add("disable");

        // Guardar el nombre en el almacenamiento local
        localStorage.setItem("userName", userName);
        console.log("Usuario registrado:", userName);

        // Puedes agregar aquí más lógica para guardar otros detalles del usuario si es necesario
    };

    signIn.onclick = function() {
        nameInput.style.maxHeight = "0";
        title.innerHTML = "Login";
        signUp.classList.add("disable");
        signIn.classList.remove("disable");

        // Verificar si hay un nombre de usuario almacenado al iniciar sesión
        const storedUserName = localStorage.getItem("userName");
        const enteredUserName = nameInput.querySelector("input").value;
        const enteredPassword = nameInput.querySelector('input[type="password"]').value;


        if (storedUserName && enteredUserName === validUser.userName && enteredPassword === validUser.password) {
            console.log("Inicio de sesión exitoso con usuario:", storedUserName);
            // Redirigir al usuario a la página de inicio
            window.location.href = "index.html";
        } else {
            console.log("Credenciales incorrectas. Inicio de sesión fallido.");
            // Puedes mostrar un mensaje de error o tomar otra acción
        }
    };
});





