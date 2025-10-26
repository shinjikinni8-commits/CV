// JS для прототипу взаємодії
function toggleSection(id) {
    var element = document.getElementById(id);
    element.classList.toggle('active');
}

// Smooth scroll (якщо додати посилання, наприклад <a href="#about">)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});