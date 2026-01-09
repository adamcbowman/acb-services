// Simple contact form handler (no backend)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('form-message').textContent = 'Thank you for your message! We will get back to you soon.';
    this.reset();
});
