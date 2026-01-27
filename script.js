// Dynamic copyright year
document.getElementById('currentYear').textContent = new Date().getFullYear();

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
            
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(5, 8, 20, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 255, 136, 0.1)';
    } else {
        navbar.style.background = 'rgba(5, 8, 20, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Signup Form Validation and Handling
const signupForm = document.getElementById('signupForm');
const signupStatus = document.getElementById('signupStatus');

signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    event.stopPropagation();
    
    // Clear previous status
    signupStatus.innerHTML = '';
    
    // Bootstrap validation
    if (!signupForm.checkValidity()) {
        signupForm.classList.add('was-validated');
        return;
    }
    
    // Get form data
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        company: document.getElementById('company').value,
        phone: document.getElementById('phone').value,
        plan: document.getElementById('plan').value,
        projectDetails: document.getElementById('projectDetails').value,
        timestamp: new Date().toISOString()
    };
    
    // Show loading state
    const submitButton = signupForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Creating Account...';
    
    // Simulate API call (in production, you'd send this to your backend or form service)
    setTimeout(() => {
        // Success message
        signupStatus.innerHTML = `
            <div class="alert alert-success" role="alert">
                <strong>Success!</strong> Your account has been created. We'll send you an email with next steps within 24 hours.
            </div>
        `;
        
        // Reset form
        signupForm.reset();
        signupForm.classList.remove('was-validated');
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
        
        // Log form data (in production, this would be sent to your server)
        console.log('Signup Data:', formData);
        
        // Optional: Store in localStorage for demo purposes
        const signups = JSON.parse(localStorage.getItem('signups') || '[]');
        signups.push(formData);
        localStorage.setItem('signups', JSON.stringify(signups));
        
    }, 1500);
});

// Contact Form Validation and Handling
const contactForm = document.getElementById('contactForm');
const contactStatus = document.getElementById('contactStatus');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    event.stopPropagation();
    
    // Clear previous status
    contactStatus.innerHTML = '';
    
    // Bootstrap validation
    if (!contactForm.checkValidity()) {
        contactForm.classList.add('was-validated');
        return;
    }
    
    // Get form data
    const formData = {
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toISOString()
    };
    
    // Show loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    // Simulate API call (in production, you'd send this to your backend or form service)
    setTimeout(() => {
        // Success message
        contactStatus.innerHTML = `
            <div class="alert alert-success" role="alert">
                <strong>Message sent!</strong> We'll get back to you within 24 hours.
            </div>
        `;
        
        // Reset form
        contactForm.reset();
        contactForm.classList.remove('was-validated');
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
        
        // Log form data (in production, this would be sent to your server)
        console.log('Contact Data:', formData);
        
        // Optional: Store in localStorage for demo purposes
        const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
        contacts.push(formData);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        
    }, 1500);
});

// Email validation helper
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Add real-time email validation feedback
const emailInputs = document.querySelectorAll('input[type="email"]');
emailInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value && !isValidEmail(this.value)) {
            this.classList.add('is-invalid');
        } else {
            this.classList.remove('is-invalid');
        }
    });
    
    input.addEventListener('input', function() {
        if (this.classList.contains('is-invalid') && isValidEmail(this.value)) {
            this.classList.remove('is-invalid');
        }
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards, pricing cards, etc.
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.service-card, .pricing-card, .feature-item, .about-visual');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Console message for developers
console.log('%c🐛 EdgecaseQA', 'font-size: 24px; font-weight: bold; color: #00ff88;');
console.log('%cFinding bugs so you don\'t have to!', 'font-size: 14px; color: #00d4ff;');
console.log('%cForm submissions are currently logged to console and localStorage. To connect to a real backend:', 'font-size: 12px; color: #6c757d;');
console.log('%c1. Replace the setTimeout in form handlers with actual fetch() calls', 'font-size: 11px; color: #f8f9fa;');
console.log('%c2. Use a service like Formspree, EmailJS, or your own API endpoint', 'font-size: 11px; color: #f8f9fa;');
console.log('%c3. Update the action attribute in the forms', 'font-size: 11px; color: #f8f9fa;');