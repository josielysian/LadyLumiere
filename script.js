// Obtener todas las imágenes
const movieImages = document.querySelectorAll('.movie-img');

// Iterar sobre cada imagen
movieImages.forEach(image => {
    // Obtener el ID del overlay correspondiente
    const overlayId = image.dataset.overlay;

    // Agregar event listener para mostrar el overlay al hacer clic en la imagen
    image.addEventListener('click', () => {
        // Mostrar el overlay correspondiente
        document.getElementById(overlayId).classList.add('show');
    });

    // Agregar event listener para ocultar el overlay al hacer clic fuera de él
    document.getElementById(overlayId).addEventListener('click', (event) => {
        if (event.target === document.getElementById(overlayId)) {
            // Ocultar el overlay correspondiente solo si se hace clic en el fondo
            document.getElementById(overlayId).classList.remove('show');
        }
    });
});
