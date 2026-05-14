document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.toggle-details');

    buttons.forEach(button => {
        button.onclick = function() {
            const card = this.closest('.project-card');
            const details = card.querySelector('.project-details');
            details.classList.toggle('active');
            if (details.classList.contains('active')) {
                this.textContent = 'Close Details';
            } else {
                this.textContent = 'View Project Details';
            }
        };
    });
});
