let lastScrollTop = 0;
const header = document.querySelector('header');
const scrollThreshold = 30; // Minimum scroll amount before hiding/showing
let ticking = false;

function handleScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // Show/hide header based on scroll direction
            if (Math.abs(lastScrollTop - currentScroll) <= scrollThreshold) return;
            
            if (currentScroll > lastScrollTop && currentScroll > header.offsetHeight) {
                // Scrolling down
                header.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
            ticking = false;
        });
        
        ticking = true;
    }
}

// Add smooth transition to header
header.style.transition = 'transform 0.3s ease-in-out';

// Add scroll event listener
window.addEventListener('scroll', handleScroll, { passive: true });
