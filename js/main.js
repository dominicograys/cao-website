// CAO Website JavaScript

document.addEventListener('DOMContentLoaded', () => {
    
    // ========================================
    // Mobile Menu Toggle
    // ========================================
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Animate hamburger
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans[0].style.transform = navLinks.classList.contains('active') 
                ? 'rotate(45deg) translate(5px, 5px)' : '';
            spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '';
            spans[2].style.transform = navLinks.classList.contains('active') 
                ? 'rotate(-45deg) translate(7px, -6px)' : '';
        });
    }
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
    
    // ========================================
    // Navbar Scroll Effect
    // ========================================
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // ========================================
    // Smooth Scroll for Anchor Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========================================
    // Form Submission Handler
    // ========================================
    const membershipForm = document.getElementById('membership-form');
    const contactForm = document.getElementById('contact-form');
    
    // Membership form handler
    if (membershipForm) {
        membershipForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(membershipForm);
            const data = Object.fromEntries(formData.entries());
            
            // Log to console (replace with actual submission logic)
            console.log('Membership Application:', data);
            
            // Show success message
            alert('Thank you for your application! We\'ll contact you within 48 hours.');
            membershipForm.reset();
        });
    }
    
    // Contact form handler
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            // Log to console (replace with actual submission logic)
            console.log('Contact Form:', data);
            
            // Show success message
            alert('Message sent! We\'ll get back to you soon.');
            contactForm.reset();
        });
    }
    
    // ========================================
    // Lazy Loading for Images (if added)
    // ========================================
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // ========================================
    // Animation on Scroll
    // ========================================
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.about-card, .event-card, .food-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });
        
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(el);
        });
    };
    
    animateOnScroll();
    
    // ========================================
    // Console Welcome Message
    // ========================================
    console.log('%c🌏 Welcome to CAO @ UTD!', 'font-size: 20px; font-weight: bold; color: #c9a66b;');
    console.log('%cBuilding community, celebrating heritage.', 'color: #666;');
    console.log('%cWant to get involved? Email us at cao.utd@gmail.com', 'color: #2c5f7c;');
});
