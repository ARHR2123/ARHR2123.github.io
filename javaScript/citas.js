function showNotification() {
    const notification = document.getElementById('notification');
    notification.classList.add('show');

    // Ocultar la notificación después de 3 segundos
    setTimeout(function () {
        notification.classList.remove('show');
    }, 3000);
}
