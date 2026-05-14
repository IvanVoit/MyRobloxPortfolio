document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.toggle-details');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.project-card');
            const details = card.querySelector('.project-details');
            details.classList.toggle('active');
            if (details.classList.contains('active')) {
                button.textContent = 'Close Details';
            } else {
                button.textContent = 'View Project Details';
            }
        });
    });
});