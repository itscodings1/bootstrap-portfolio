// Counter Animation Logic
const counters = document.querySelectorAll('.award-number');
const speed = 100; // Speed of counting

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = Math.ceil(target / speed);

        if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 20); // Update every 20ms
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});

// Function to add the 'visible' class when the section is in the viewport
const aboutSection = document.querySelector('.about-section');

const handleScroll = () => {
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionPosition < screenHeight - 100) {
        aboutSection.classList.add('visible');
    }
};

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);

// Skills section
document.addEventListener('DOMContentLoaded', () => {
  const progressBars = document.querySelectorAll('.progress-bar');
  progressBars.forEach(bar => {
    const skillValue = bar.getAttribute('data-skill');
    bar.style.width = `${skillValue}%`;
  });
});


// services section 

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.service-card');
  cards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }, index * 200);
  });
});


// Testimonials Section


document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.testimonial-card');
  cards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }, index * 200);
  });
});

// faq's section 

// This ensures the accordion collapses with a smooth fade transition
const collapseElements = document.querySelectorAll('.accordion-button');

collapseElements.forEach((btn) => {
  btn.addEventListener('click', () => {
    const body = btn.nextElementSibling;
    if (body.classList.contains('show')) {
      body.classList.remove('fade-in');
    } else {
      body.classList.add('fade-in');
    }
  });
});


// Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
