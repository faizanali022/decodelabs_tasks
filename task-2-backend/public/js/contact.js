/**
 * AJAX Contact Form Submission
 * Include if you want asynchronous submission
 */

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form form');
    if (!form) return;
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        try {
            const response = await fetch('/contact', {
                method: 'POST',
                body: formData
            });
            
            const result = await response.json();
            
            if (response.ok) {
                alert('Message sent successfully! We will contact you soon.');
                form.reset();
            } else {
                alert('Error: ' + (result.message || 'Something went wrong. Please try again.'));
            }
        } catch (error) {
            alert('Network error. Please check your connection.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
});