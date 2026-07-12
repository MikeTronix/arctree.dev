import { tsParticles } from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all";

async function loadParticles(options) {
  await loadAll(tsParticles);
  await tsParticles.load({ id: "tsparticles", options });
}

// Particle Configuration representing ArcTree Gaming System
// Circuit board green and gold theme, evoking a digital forest / network tree
const particlesConfig = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "grab",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      grab: {
        distance: 150,
        links: {
          opacity: 0.5,
          color: "#00ff41",
        }
      },
    },
  },
  particles: {
    color: {
      value: ["#00ff41", "#008f11", "#d4af37"], // Circuit green and gold
    },
    links: {
      color: "#008f11",
      distance: 120,
      enable: true,
      opacity: 0.3,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.7,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 4 },
    },
  },
  detectRetina: true,
};

// Initialize Particle System
loadParticles(particlesConfig);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Basic Form Handlers (Placeholders)
document.getElementById('registerForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Registration placeholder triggered. Age verified.');
});

document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent placeholder triggered.');
});
