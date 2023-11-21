const navbar = document.getElementById('navbar');
const video = document.getElementById('video');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navbar.classList.remove('solid-background-navbar');
    } else {
      navbar.classList.add('solid-background-navbar');
    }
  });
});

observer.observe(video);