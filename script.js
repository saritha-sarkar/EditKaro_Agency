// Toggle service details on click
function toggleDetails(service) {
    service.classList.toggle('active');
}

// Toggle footer display
function toggleFooter() {
    const expandedFooter = document.querySelector('.expanded-footer');
    const footerToggle = document.getElementById('footer-toggle');

    if (expandedFooter.style.display === 'block') {
        expandedFooter.style.display = 'none';
        footerToggle.textContent = 'More Info';
    } else {
        expandedFooter.style.display = 'block';
        footerToggle.textContent = 'Less Info';
    }
}
