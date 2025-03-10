// Array of image URLs
const images = [
    'httpshttps://media.geeksforgeeks.org/wp-content/uploads/20240119165639/Angkor-Wat.webp1',
    'https://via.placeholder.com/600x400?text=Image+https://images.app.goo.gl/vwcGpGpyC4J4PjXC7',
    'https://via.placeholder.com/600x400?text=Image+3'
];

// Current image index
let currentIndex = 0;

// Function to update the image displayed
function updateImage() {
    const sliderImage = document.getElementById('sliderImage');
    sliderImage.src = images[currentIndex];
}

// Function to show the previous image
function prevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
}

// Function to show the next image
function nextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
}

// Initial display
updateImage();
