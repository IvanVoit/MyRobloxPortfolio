document.addEventListener('DOMContentLoaded', () => {
    // Find all buttons with the class 'toggle-details'
    const buttons = document.querySelectorAll('.toggle-details');

    buttons.forEach(button => {
        button.onclick = function() {
            // Find the closest card
            const card = this.closest('.project-card');
            // Find the details div inside that card
            const details = card.querySelector('.project-details');
            
            // Toggle the 'active' class
            details.classList.toggle('active');

            // Change the button text
            if (details.classList.contains('active')) {
                this.textContent = 'Close Details';
            } else {
                this.textContent = 'View Project Details';
            }
        };
    });
});
