const numbers = document.getElementById('numbers');

function updateNumbers() {
    const randomNum = Math.floor(Math.random() * 90 + 10).toString().padStart(2, '0');
    numbers.style.opacity = 0;
    setTimeout(() => {
        numbers.textContent = randomNum;
        numbers.style.opacity = 0.7;
    }, 300);
}

// Initial update
updateNumbers();

// Update every 3 seconds
setInterval(updateNumbers, 3000);

// Redirect on click
document.body.addEventListener('click', () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
        window.location.href = 'portfolio.html';
    }, 300);
});

// Redirect on click
document.body.addEventListener("click", () => {
    window.location.href = "portfolio.html";
});




// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Dark mode toggle (optional)
const darkModeToggle = document.createElement('button');
darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
darkModeToggle.classList.add('dark-mode-toggle');
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.bottom = '20px';
darkModeToggle.style.right = '20px';
darkModeToggle.style.zIndex = '1000';
darkModeToggle.style.background = 'var(--primary)';
darkModeToggle.style.color = 'white';
darkModeToggle.style.border = 'none';
darkModeToggle.style.borderRadius = '50%';
darkModeToggle.style.width = '50px';
darkModeToggle.style.height = '50px';
darkModeToggle.style.cursor = 'pointer';
darkModeToggle.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';

document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true' || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('darkMode'))) {
    document.body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Add class when page loads for transitions
window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});