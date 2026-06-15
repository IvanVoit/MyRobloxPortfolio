document.addEventListener('DOMContentLoaded', () => {

    // =============================================
    // 1. SMOOTH SCROLL for nav links
    // =============================================
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            const navHeight = document.querySelector('nav').offsetHeight;
            const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 12;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });

    // =============================================
    // 2. ACCORDION — toggle project details
    // =============================================
    document.querySelectorAll('.toggle-details').forEach(button => {
        button.addEventListener('click', function () {
            const card = this.closest('.project-card');
            const details = card.querySelector('.project-details');
            const isOpen = details.classList.contains('active');
            details.classList.toggle('active');
            this.textContent = isOpen ? 'View Details' : 'Close Details';
        });
    });

    // =============================================
    // 3. IMAGE MODAL with arrow navigation
    // =============================================
    const modal      = document.getElementById('image-modal');
    const modalImg   = document.getElementById('full-image');
    const closeBtn   = document.querySelector('.close-modal');
    const prevBtn    = document.querySelector('.modal-prev');
    const nextBtn    = document.querySelector('.modal-next');
    const counter    = document.getElementById('modal-counter');

    let currentImages = []; // srcs for the current card's gallery
    let currentIndex  = 0;

    function openModal(images, index) {
        currentImages = images;
        currentIndex  = index;
        showImage(currentIndex);
        modal.style.display = 'block';
    }

    function showImage(index) {
        modalImg.classList.add('fading');
        setTimeout(() => {
            modalImg.src = currentImages[index].src;
            modalImg.alt = currentImages[index].alt;
            modalImg.classList.remove('fading');
        }, 160);

        // counter
        counter.textContent = `${index + 1} / ${currentImages.length}`;

        // hide arrows if only one image
        prevBtn.classList.toggle('hidden', currentImages.length <= 1);
        nextBtn.classList.toggle('hidden', currentImages.length <= 1);
    }

    function navigate(dir) {
        currentIndex = (currentIndex + dir + currentImages.length) % currentImages.length;
        showImage(currentIndex);
    }

    // Attach click to every gallery image AND main thumbnails
    document.querySelectorAll('.project-card').forEach(card => {
        // All images inside the card
        const allImgs = Array.from(card.querySelectorAll('img'));

        allImgs.forEach((img, i) => {
            img.addEventListener('click', function (e) {
                e.stopPropagation();
                openModal(allImgs, i);
            });
        });
    });

    // Arrows — stop propagation so modal doesn't close
    prevBtn.addEventListener('click', (e) => { e.stopPropagation(); navigate(-1); });
    nextBtn.addEventListener('click', (e) => { e.stopPropagation(); navigate(1); });

    // Close
    function closeModal() { modal.style.display = 'none'; }
    closeBtn.addEventListener('click', (e) => { e.stopPropagation(); closeModal(); });
    modal.addEventListener('click', closeModal);

    // Keyboard: arrows + Escape
    document.addEventListener('keydown', (e) => {
        if (modal.style.display !== 'block') return;
        if (e.key === 'Escape')      closeModal();
        if (e.key === 'ArrowLeft')   navigate(-1);
        if (e.key === 'ArrowRight')  navigate(1);
    });

});
