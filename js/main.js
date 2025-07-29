// ByteUp Solutions - Main JavaScript

// DOM Elements
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navMobile = document.getElementById("navMobile");
const contactForm = document.getElementById("contactForm");
const header = document.getElementById("header");

// Mobile Menu Toggle
if (mobileMenuBtn && navMobile) {
    mobileMenuBtn.addEventListener("click", function() {
        navMobile.classList.toggle("active");
        mobileMenuBtn.classList.toggle("active");
    });

    // Close mobile menu when clicking on links
    const mobileLinks = navMobile.querySelectorAll("a");
    mobileLinks.forEach(link => {
        link.addEventListener("click", function() {
            navMobile.classList.remove("active");
            mobileMenuBtn.classList.remove("active");
        });
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            const headerHeight = header ? header.offsetHeight : 0;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        }
    });
});

// Header Scroll Effect
if (header) {
    let ticking = false;
    
    function updateHeader() {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }
    
    window.addEventListener("scroll", requestTick, { passive: true });
}

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", function() {
    const animateElements = document.querySelectorAll(".about-card, .service-card, .section-header");
    animateElements.forEach(el => {
        el.classList.add("animate-on-scroll");
        observer.observe(el);
    });
});

// Contact Form Handling
if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Simple validation
        const requiredFields = this.querySelectorAll("[required]");
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add("error");
            } else {
                field.classList.remove("error");
            }
        });
        
        if (isValid) {
            // Show success message
            showNotification("Mensagem enviada com sucesso! Entraremos em contato em breve.", "success");
            this.reset();
        } else {
            showNotification("Por favor, preencha todos os campos obrigatórios.", "error");
        }
    });
}

// Notification System
function showNotification(message, type = "info") {
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    const styles = `
        position: fixed;
        top: 20px;
        right: 20px;
        max-width: 400px;
        padding: 0;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        overflow: hidden;
    `;
    
    notification.style.cssText = styles;
    
    // Set background color based on type
    const colors = {
        success: "linear-gradient(135deg, #10B981, #059669)",
        error: "linear-gradient(135deg, #EF4444, #DC2626)",
        info: "linear-gradient(135deg, #3B82F6, #2563EB)"
    };
    
    notification.style.background = colors[type] || colors.info;
    
    // Style the content
    const content = notification.querySelector(".notification-content");
    content.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 20px;
        color: white;
    `;
    
    const close_btn = notification.querySelector(".notification-close");
    close_btn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 18px;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.8;
        transition: opacity 0.2s ease;
    `;
    
    close_btn.addEventListener("mouseenter", () => close_btn.style.opacity = "1");
    close_btn.addEventListener("mouseleave", () => close_btn.style.opacity = "0.8");
    
    document.body.appendChild(notification);
    
    // Animate in
    requestAnimationFrame(() => {
        notification.style.transform = "translateX(0)";
    });
    
    // Close functionality
    function closeNotification() {
        notification.style.transform = "translateX(100%)";
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }
    
    close_btn.addEventListener("click", closeNotification);
    
    // Auto close after 5 seconds
    setTimeout(closeNotification, 5000);
}

// Add CSS for animations and effects
const style = document.createElement("style");
style.textContent = `
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
                    transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    .animate-on-scroll.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .header.scrolled {
        backdrop-filter: blur(10px);
        background: rgba(255, 255, 255, 0.95);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
    
    .form-input.error,
    .form-textarea.error {
        border-color: #EF4444;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
    
    .mobile-menu-btn.active .hamburger-line:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-menu-btn.active .hamburger-line:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-btn.active .hamburger-line:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    .nav-mobile.active {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
    
    /* Staggered animation for cards */
    .about-card:nth-child(1) { transition-delay: 0.1s; }
    .about-card:nth-child(2) { transition-delay: 0.2s; }
    .about-card:nth-child(3) { transition-delay: 0.3s; }
    
    .service-card:nth-child(1) { transition-delay: 0.1s; }
    .service-card:nth-child(2) { transition-delay: 0.2s; }
    .service-card:nth-child(3) { transition-delay: 0.3s; }
    .service-card:nth-child(4) { transition-delay: 0.4s; }
    .service-card:nth-child(5) { transition-delay: 0.5s; }
    .service-card:nth-child(6) { transition-delay: 0.6s; }
    
    /* Reduced motion support */
    @media (prefers-reduced-motion: reduce) {
        .animate-on-scroll,
        .hero-shape,
        .about-icon,
        .service-icon {
            animation: none !important;
            transition: none !important;
        }
        
        .animate-on-scroll {
            opacity: 1;
            transform: none;
        }
    }
`;

document.head.appendChild(style);

