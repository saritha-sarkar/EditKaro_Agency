const testimonials = document.querySelectorAll('.testimonial-card');
let currentIndex = 0;

function showTestimonials(index) {
    testimonials.forEach((card, i) => {
        card.style.display = (i >= index && i < index + 3) ? 'block' : 'none'; // Show 3 cards
    });
}

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 3; // Wrap around
    showTestimonials(currentIndex);
});

document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex < testimonials.length - 3) ? currentIndex + 1 : 0; // Wrap around
        showTestimonials(currentIndex);
    });
    
    // Initialize the first three testimonials
    showTestimonials(currentIndex);
    