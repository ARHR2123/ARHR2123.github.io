function enviarEnlace(event) {
    event.preventDefault();
    // Aquí iría la lógica para enviar el enlace al correo ingresado
    // Por simplicidad, simularemos un retraso de 2 segundos antes de mostrar la notificación y redireccionar

    const email = document.getElementById('email').value;
    setTimeout(function() {
        mostrarNotificacion(email);
        redireccionarAlLogin();
    }, 500); // Simulamos un retraso de 2 segundos
}

function mostrarNotificacion(email) {
    const notification = document.getElementById('notification');
    notification.innerText = `Enlace enviado a ${email}`;
    notification.style.display = 'block';
}

function redireccionarAlLogin() {
    // Aquí debes cambiar la URL por la del inicio de sesión (login) de tu sitio
    setTimeout(function() {
        window.location.href = 'Login.html'; // Cambia 'login.html' por la URL real
    }, 1000); // Simulamos un retraso de 2 segundos antes de redireccionar
}
