document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const closeContentBtn = document.getElementById('closeContent');
    const menuLinks = document.querySelectorAll('.menu-panel nav a');

    // Menu Toggle Functionality
    const toggleMenu = () => {
        document.body.classList.toggle('menu-open');
    };
    menuToggle.addEventListener('click', toggleMenu);

    // Content Overlay Functionality
    const showContentOverlay = (targetId) => {
        document.querySelectorAll('.content-page').forEach(page => {
            page.style.display = 'none';
        });
        const targetPage = document.querySelector(targetId);
        if (targetPage) {
            targetPage.style.display = 'block';
        }
        document.body.classList.add('overlay-is-open');
    };

    const hideContentOverlay = () => {
        document.body.classList.remove('overlay-is-open');
    };

    // Connecting Menu Links to the Overlay
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetContentId = link.getAttribute('href');
            if (document.body.classList.contains('menu-open')) {
                toggleMenu();
            }
            setTimeout(() => {
                showContentOverlay(targetContentId);
            }, 500);
        });
    });

    // Close button listener
    closeContentBtn.addEventListener('click', hideContentOverlay);
});
