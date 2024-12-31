
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide() {
  // Hide all slides
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  // Show the current slide
  slides[currentSlide].classList.add('active');

  // Move to the next slide
  currentSlide = (currentSlide + 1) % totalSlides;
}

// Start the slider automatically
setInterval(showSlide, 2000);  


showSlide();


//properties-details page
// Function to get the property details from the URL
function getQueryParams() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        image: urlParams.get('image'),
        title: urlParams.get('title'),
        price: urlParams.get('price'),
        bedrooms: urlParams.get('bedrooms'),
        bathrooms: urlParams.get('bathrooms'),
        size: urlParams.get('size'),
        description: urlParams.get('description')
    };
}

// Function to populate the property details
function displayPropertyDetails() {
    const property = getQueryParams();

    // Ensure each element is populated correctly
    document.getElementById('detailImage').src = property.image;
    document.getElementById('detailTitle').innerText = property.title;
    document.getElementById('detailPrice').innerText = property.price;
    document.getElementById('detailBedrooms').innerText = property.bedrooms;
    document.getElementById('detailBathrooms').innerText = property.bathrooms;
    document.getElementById('detailSize').innerText = property.size;
    document.getElementById('detailDescription').innerText = property.description;
}

// Call the function when the page loads
window.onload = displayPropertyDetails;





if (!localStorage.getItem('email') || !localStorage.getItem('password')) {
    alert("You are not signed in. Please sign in to continue.");
    window.location.href = "signin.html";  // Redirect to sign-in page if not signed in
}

function showAgentCards() {
    var agentCards = document.getElementById('agentCards');
    if (agentCards.style.display === 'none') {
        agentCards.style.display = 'block';
    } else {
        agentCards.style.display = 'none';
    }
}

let currentIndex = 0;

function moveSlide(direction) {
    const cards = document.querySelector('.property-cards');
    const totalCards = document.querySelectorAll('.property').length;  // 10 cards in total
    const cardWidth = document.querySelector('.property').offsetWidth + 20; // Including margin

    // Update current index
    currentIndex += direction;

    // Looping behavior for cards
    if (currentIndex < 0) currentIndex = 0;  // Don't go beyond the first card
    if (currentIndex >= totalCards) currentIndex = totalCards - 1;  // Don't go beyond the last card

    // Move the slider container
    cards.style.transform = `translateX(-${cardWidth * currentIndex}px)`;

    // Show the "View More Listings" button once the last card is reached
    if (currentIndex === totalCards - 1) {
        document.getElementById('viewMoreBtn').style.display = 'block';
    } else {
        document.getElementById('viewMoreBtn').style.display = 'none';
    }
}

// Ensure the button is displayed if we're at the last card initially
document.addEventListener("DOMContentLoaded", function () {
    const totalCards = document.querySelectorAll('.property').length;

    // If the page loads with the slider showing the last card, show the "View More Listings" button
    if (currentIndex === totalCards - 1) {
        document.getElementById('viewMoreBtn').style.display = 'block';
    } else {
        document.getElementById('viewMoreBtn').style.display = 'none';
    }
});


