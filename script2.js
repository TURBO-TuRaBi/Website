// Button functionality
document.querySelector('.primary').addEventListener('click', () => {
    alert('Thank you for considering me! Please reach out via the contact section.');
});

document.querySelector('.secondary').addEventListener('click', () => {
    // Add the link to your resume here
    window.location.href = 'path/to/your-resume.pdf';
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const parallaxHero = document.querySelector('.parallax-bg');
    let scrollPosition = window.pageYOffset;
    parallaxHero.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});

// Login and Signup button functionality
document.querySelector('.signup-btn').addEventListener('click', () => {
    alert('Redirecting to Sign up page...');
    // You can redirect to a signup page here
});

document.querySelector('.login-btn').addEventListener('click', () => {
    alert('Redirecting to Log in page...');
    // You can redirect to a login page here
});