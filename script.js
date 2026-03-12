// Advanced Calendar for Jira - Interactive Scripts

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Feature card hover effects
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
            this.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        });
    });

    // Button click analytics
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('CTA Button Clicked - Advanced Calendar for Jira');
        });
    });

    // Mobile menu toggle
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobile-menu-toggle';
    mobileMenuButton.innerHTML = '☰';
    mobileMenuButton.setAttribute('aria-label', 'Toggle menu');
    
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        const navbar = document.querySelector('.navbar');
        navbar.insertBefore(mobileMenuButton, navLinks);
        
        mobileMenuButton.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Form submission simulation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Form submitted');
            alert('Thank you for your interest! We will contact you shortly.');
            this.reset();
        });
    }

    // Sticky header when scrolling
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        if (hero) {
            hero.style.backgroundPositionY = `${rate}px`;
        }
    });

    // Add loading state to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const originalText = this.textContent;
            this.disabled = true;
            this.textContent = 'Loading...';
            
            setTimeout(() => {
                this.disabled = false;
                this.textContent = originalText;
            }, 1500);
        });
    });

    // Feature card animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Console info for demo purposes
    console.log('Advanced Calendar for Jira - Interactive Scripts Loaded');
    console.log('XALT - Elevate, Execute, Empower');
});

// Custom event for calendar interactions
class CalendarEvent extends Event {
    constructor(type, calendarId, issueKey, startDate, endDate) {
        super(type);
        this.calendarId = calendarId;
        this.issueKey = issueKey;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}

// Simple calendar interaction simulation
function initCalendarInteractions() {
    console.log('Initializing calendar interactions...');
    
    // Simulate calendar rendering
    const calendarContainer = document.querySelector('.calendar-container');
    if (calendarContainer) {
        console.log('Calendar container found, ready for integration');
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', initCalendarInteractions);
