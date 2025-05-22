// Alpine.js import
import Alpine from '../node_modules/alpinejs/dist/module.esm.js'

window.Alpine = Alpine
Alpine.start()


async function loadComponent(elementId, filePath) {
  try {
    const response = await fetch(filePath);
    const content = await response.text();
    document.getElementById(elementId).innerHTML = content;
  } catch (error) {
    console.error(`Error loading ${filePath}:`, error);
  }
}

// Load Header and Footer on Page Load
document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "header.html");
  loadComponent("header-toddler", "header-toddler.html");
  loadComponent("header-disco", "header-disco.html");
  loadComponent("header-film-school", "header-film-school.html");
  loadComponent("subscription-form-wrap", "subscription-form.html");
  loadComponent("reviews-parties", "reviews-parties.html");
  loadComponent("why-choose-cf", "why-choose-cf.html");
  loadComponent("usp-section", "usp-section.html");
  loadComponent("party-structure", "party-structure.html");
  loadComponent("gallery", "gallery.html");
  loadComponent("ultimate-bespoke", "ultimate-bespoke.html");
  loadComponent("other-parties", "other-parties.html");
  loadComponent("faqs", "faqs.html");
  loadComponent("footer", "footer.html");
});


// Home page reviews
setTimeout(() => {
  new Swiper(".testimonial", {
    loop: false,
    autoplay: {
      delay: 3000,
    },
    slidesPerView: 2,
    spaceBetween: 20,

    breakpoints: {
      320: {
        slidesPerView: 1, // 1 slide on small screens
        centeredSlides: true,

      },

      490: {
        slidesPerView: 2, // 2 slides on tablets
      },

      1240: {
        spaceBetween: 20,
        slidesPerView: 4, // 3 slides on desktops
      },
    },
  });
}, 2000); // Delay for 2 second


new Swiper(".worked", {
  loop: true, // Infinite loop
  spaceBetween: 50, // Space between slides
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    320: {
      slidesPerView: 2, // 1 slide on small screens
    },
    640: {
      slidesPerView: 3, // 2 slides on tablets
    },
    1024: {
      slidesPerView: 6, // 3 slides on desktops
    },
  },
});

new Swiper(".packages", {
  loop: true, // Infinite loop
  spaceBetween: 20, // Space between slides
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    320: {
      slidesPerView: 1, // 1 slide on small screens
    },
    640: {
      slidesPerView: 2, // 2 slides on tablets
    },
    1024: {
      slidesPerView: 4, // 3 slides on desktops
    },
  },
});