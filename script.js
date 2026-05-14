document.addEventListener('DOMContentLoaded', () => {
    
    // 1. DROPDOWN LOGIC
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

    // 2. IMAGE ZOOM LOGIC
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("full-image");
    const closeBtn = document.querySelector(".close-modal");

    // Select every image inside your project cards
    const images = document.querySelectorAll('.project-card img');

    images.forEach(img => {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src; // Sets the zoomed image to the one you clicked
        }
    });

    // Close the image when clicking the X or the background
    closeBtn.onclick = function() { 
        modal.style.display = "none";
    }

    modal.onclick = function() {
        modal.style.display = "none";
    }
});
