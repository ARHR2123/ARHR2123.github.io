document.getElementById('report-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío del formulario

    var tipoReporte = document.getElementById('tipo_reporte').value;
    var reporteDivs = document.getElementsByClassName('report-result');

    // Ocultar todos los resultados de reporte
    for (var i = 0; i < reporteDivs.length; i++) {
        reporteDivs[i].style.display = 'none';
    }

    // Mostrar el resultado del reporte seleccionado
    document.getElementById('report-result-' + tipoReporte).style.display = 'block';
});
function printContent(elementId) {
    const element = document.getElementById(elementId);
    const content = element.innerHTML;

    const originalBody = document.body.innerHTML;
    document.body.innerHTML = content;

    window.print();

    document.body.innerHTML = originalBody;
}