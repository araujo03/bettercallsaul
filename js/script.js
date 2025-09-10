document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('nav ul');

    if (hamburger && navUl) {
        hamburger.addEventListener('click', () => {
            navUl.classList.toggle('show');
        });
    }

    document.addEventListener('keydown', (e) => {
        if (document.getElementById('lightbox').style.display === 'flex') {
            if (e.key === 'ArrowRight') {
                changeImage(1);
            } else if (e.key === 'ArrowLeft') {
                changeImage(-1);
            } else if (e.key === 'Escape') {
                closeLightbox();
            }
        }
    });
});

let currentImageIndex;
const images = Array.from(document.querySelectorAll('.gallery-item img')).map(img => img.src);

function openLightbox(index) {
    currentImageIndex = index;
    document.getElementById('lightbox-img').src = images[currentImageIndex];
    document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function changeImage(n) {
    currentImageIndex += n;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    document.getElementById('lightbox-img').src = images[currentImageIndex];
}
function initMap() {
  const oficina = { lat: -34.640556, lng: -58.601944 }; // Coordenadas de la dirección
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: oficina,
  });
  new google.maps.Marker({
    position: oficina,
    map: map,
    title: "UTN Haedo"
  });
}