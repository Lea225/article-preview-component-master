// Modifiez ce JavaScript dans votre fichier main.js
document.addEventListener('DOMContentLoaded', function () {
    const shareIcon = document.querySelector('.icon-share');
    const shareBubble = document.getElementById('shareBubble');

    // Affiche la bulle de partage au survol de l'icône Share
    shareIcon.addEventListener('mouseenter', function () {
        shareBubble.style.opacity = 1;
        // Affiche la bulle pendant 5 secondes
    });

    // Cache la bulle de partage lors du clic n'importe où en dehors de la bulle
    document.addEventListener('click', function (event) {
        if (!shareIcon.contains(event.target) && !shareBubble.contains(event.target)) {
            shareBubble.style.opacity = 0;
        }
    });
});
