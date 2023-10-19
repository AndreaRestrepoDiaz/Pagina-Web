document.getElementById("enviarBoton").addEventListener('click', function(){
    // Obtener los valores de los campos de entrada
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;

    // Mostrar los valores en la consola
    console.log("Nombre: " + nombre);
    console.log("Correo electrónico: " + correo);
})