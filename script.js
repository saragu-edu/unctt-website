// Toggle mobile menu
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        document.querySelector('.nav-menu').classList.remove('active');
        handleNavigation(e);
    });
});

// Navigation page switching
function handleNavigation(e) {
    e.preventDefault();
    
    const targetId = e.target.getAttribute('href').substring(1);
    
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;
    
    // Create mailto link (for demo purposes)
    const mailtoLink = `mailto:tabletennis.unc@gmail.com?subject=Contact from ${name}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    // Alternative: Show success message
    alert(`Thank you for your message, ${name}! We'll get back to you soon.`);
    
    // Reset form
    form.reset();
}

// Add scroll animation to elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards for animation
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.feature, .schedule-card, .event-card, .team-member, .faq-item, .gallery-item').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
});

