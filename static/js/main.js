document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skills-progress-bar');
    skillBars.forEach(bar => {
        const percentage = bar.getAttribute('data-skill-percentage');
        bar.style.width = percentage + '%';
    });
});


function myFunction(x) {
    x.classList.toggle("change");
    // Add your navigation toggle logic here.
  }