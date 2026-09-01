// Main JavaScript
/**
 * Main JavaScript for Home Staff Services
 * Handles mobile menu, smooth scroll, form validation, and chatbot
 */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // ========== MOBILE MENU TOGGLE ==========
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navbar = document.querySelector('.navbar');
    
    if (mobileToggle && navbar) {
        mobileToggle.addEventListener('click', function() {
            navbar.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ========== CONTACT FORM VALIDATION ==========
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            let isValid = true;
            
            const name = this.querySelector('[name="fullname"]');
            const email = this.querySelector('[name="email"]');
            const phone = this.querySelector('[name="phone"]');
            const service = this.querySelector('[name="service"]');
            const message = this.querySelector('[name="message"]');
            
            // Remove existing errors
            document.querySelectorAll('.field-error').forEach(el => el.remove());
            
            if (name && name.value.trim() === '') {
                showError(name, 'Full name is required');
                isValid = false;
            }
            
            if (email && !isValidEmail(email.value.trim())) {
                showError(email, 'Valid email address is required');
                isValid = false;
            }
            
            if (phone && !/^\d{10,15}$/.test(phone.value.trim().replace(/\D/g, ''))) {
                showError(phone, 'Valid phone number (10-15 digits) required');
                isValid = false;
            }
            
            if (service && service.value === '') {
                showError(service, 'Please select a service');
                isValid = false;
            }
            
            if (message && message.value.trim() === '') {
                showError(message, 'Message cannot be empty');
                isValid = false;
            }
            
            if (!isValid) e.preventDefault();
        });
    }
    
    function showError(input, msg) {
        const err = document.createElement('div');
        err.className = 'field-error';
        err.style.color = '#d9534f';
        err.style.fontSize = '12px';
        err.style.marginTop = '5px';
        err.textContent = msg;
        input.parentNode.insertBefore(err, input.nextSibling);
        input.style.borderColor = '#d9534f';
        input.addEventListener('input', function() {
            this.style.borderColor = '';
            if (this.nextSibling?.classList?.contains('field-error')) this.nextSibling.remove();
        }, { once: true });
    }
    
    function isValidEmail(email) {
        return /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/.test(email);
    }
});