/**
 * Lux EcoShades - Main JavaScript
 * All frontend functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // ============================================
    // 1. HAMBURGER MENU
    // ============================================
    const hamburger = document.getElementById('hamburger');
    const navList = document.querySelector('.nav-list');

    if (hamburger && navList) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            navList.classList.toggle('open');
        });

        // Close on link click (mobile)
        navList.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navList.classList.remove('open');
            });
        });
    }

    // ============================================
    // 2. CLOSE MENU ON OUTSIDE CLICK
    // ============================================
    document.addEventListener('click', function(e) {
        const header = document.querySelector('.site-header');
        if (header && !header.contains(e.target) && window.innerWidth <= 768) {
            if (hamburger) hamburger.classList.remove('active');
            if (navList) navList.classList.remove('open');
        }
    });

    // ============================================
    // 3. SMOOTH SCROLL TO TOP
    // ============================================
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #707A3E;
        color: #FFFFFF;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        z-index: 999;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(112, 122, 62, 0.35);
    `;
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 400) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    backToTop.addEventListener('mouseenter', function() {
        this.style.background = '#59622F';
        this.style.transform = 'translateY(-3px)';
    });

    backToTop.addEventListener('mouseleave', function() {
        this.style.background = '#707A3E';
        this.style.transform = 'translateY(0)';
    });

    // ============================================
    // 4. ACTIVE NAV LINK ON SCROLL
    // ============================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-list a:not(.nav-cta)');

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // ============================================
    // 5. CONTACT FORM
    // ============================================
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();

            // Simple validation
            if (!name || !email || !phone || !message) {
                formStatus.className = 'form-status error';
                formStatus.textContent = 'Please fill in all required fields.';
                return;
            }

            if (!isValidEmail(email)) {
                formStatus.className = 'form-status error';
                formStatus.textContent = 'Please enter a valid email address.';
                return;
            }

            // Simulate form submission
            formStatus.className = 'form-status';
            formStatus.textContent = 'Sending...';
            formStatus.style.display = 'block';

            setTimeout(function() {
                formStatus.className = 'form-status success';
                formStatus.textContent = 'Thank you! Your message has been sent. We\'ll contact you within 24 hours.';
                contactForm.reset();
            }, 1500);
        });
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // ============================================
    // 6. NEWSLETTER FORM
    // ============================================
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const input = this.querySelector('input');
            if (input && input.value.trim()) {
                alert('Thank you for subscribing!');
                input.value = '';
            }
        });
    }

    // ============================================
    // 7. COUNTER ANIMATION
    // ============================================
    const statNumbers = document.querySelectorAll('.stat-number');

    if (statNumbers.length > 0) {
        let animated = false;

        function animateCounters() {
            if (animated) return;
            const trigger = window.scrollY + window.innerHeight;
            const firstStat = statNumbers[0];
            if (firstStat && firstStat.offsetTop < trigger) {
                animated = true;
                statNumbers.forEach(function(counter) {
                    const target = parseInt(counter.getAttribute('data-target'));
                    if (target > 0 && !counter.dataset.animated) {
                        counter.dataset.animated = 'true';
                        let current = 0;
                        const increment = Math.ceil(target / 50);
                        const timer = setInterval(function() {
                            current += increment;
                            if (current >= target) {
                                counter.textContent = target + '+';
                                clearInterval(timer);
                            } else {
                                counter.textContent = current + '+';
                            }
                        }, 30);
                    }
                });
            }
        }

        window.addEventListener('scroll', animateCounters);
        // Trigger on load if visible
        setTimeout(animateCounters, 500);
    }

    // ============================================
    // 8. SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    console.log('Lux EcoShades - Website loaded successfully!');
});