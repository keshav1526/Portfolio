function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const toggleThemeButton = document.querySelector('.toggle-theme'); 

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        toggleThemeButton.textContent = 'Light Theme'; 
    } else {
        localStorage.setItem('theme', 'light');
        toggleThemeButton.textContent = 'Dark Theme'; 
    }
}

window.onload = () => {
    const toggleThemeButton = document.querySelector('.toggle-theme');

    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
        document.body.classList.remove('dark-mode');
        toggleThemeButton.textContent = 'Dark Theme'; 
    } else {
        document.body.classList.add('dark-mode');
        toggleThemeButton.textContent = 'Light Theme'; 
    }
};

window.addEventListener("scroll", function () {
    const header = document.querySelector(".header-row");
    header.classList.toggle("sticky", window.scrollY > 0);
});

const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));