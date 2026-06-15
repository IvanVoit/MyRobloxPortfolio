document.addEventListener('DOMContentLoaded', () => {

    // 1. ACCORDION — toggle project details
    const buttons = document.querySelectorAll('.toggle-details');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const card = this.closest('.project-card');
            const details = card.querySelector('.project-details');
            const isOpen = details.classList.contains('active');

            details.classList.toggle('active');
            this.textContent = isOpen ? 'View Details' : 'Close Details';
        });
    });

    // 2. IMAGE ZOOM MODAL
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('full-image');
    const closeBtn = document.querySelector('.close-modal');

    document.querySelectorAll('.project-card img').forEach(img => {
        img.addEventListener('click', function (e) {
            e.stopPropagation();
            modal.style.display = 'block';
            modalImg.src = this.src;
            modalImg.alt = this.alt;
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') modal.style.display = 'none';
    });

});
