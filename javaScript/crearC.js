const signupForm = document.getElementById('signup-form');
const notification = document.getElementById('notification');

signupForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Simular un proceso de registro (aquí puedes enviar los datos del formulario al servidor si lo deseas)
    // En este ejemplo, simplemente mostramos la notificación por unos segundos antes de redireccionar al login

    // Mostrar la notificación de cuenta creada
    notification.style.display = 'block';

    // Ocultar la notificación después de 3 segundos
    setTimeout(function () {
        notification.style.display = 'none';
        // Redireccionar al login inicial (puedes cambiar la URL por la que corresponda)
        window.location.href = 'login.html';
    }, 3000); // 3000 milisegundos = 3 segundos
});