// Navbar Fixed 
window.onscroll = function() { 
  const header = document.querySelector("header"); 
  const fixedNav = header.offsetTop; 
 
  if (window.pageYOffset > fixedNav) { 
    header.classList.add("navbar-fixed"); 
  } else { 
    header.classList.remove("navbar-fixed"); 
  } 
}; 
 
// Hamburger 
const hamburger = document.querySelector("#hamburger"); 
const navMenu = document.querySelector("#nav-menu"); 
hamburger.addEventListener("click", function () { 
  hamburger.classList.toggle("hamburger-active"); 
  navMenu.classList.toggle("hidden"); 
});

// Dark Mode 
const html = document.documentElement; 
const toggle = document.getElementById("dark-toggle"); 
 
// Saat toggle diklik 
toggle.addEventListener("click", () => { 
  html.classList.toggle("dark"); 
 
  // Simpan preferensi 
  localStorage.theme = html.classList.contains("dark") ? "dark" : "light"; 
}); 
 
// Saat halaman dibuka, load tema sebelumnya 
if (localStorage.theme === "dark") { 
  html.classList.add("dark"); 
} 
// ambil tombol 
const backToTop = document.getElementById("backToTop"); 
// Saat scrolling 
window.addEventListener("scroll", () => { 
if (window.scrollY > 300) { 
backToTop.classList.remove("hidden"); 
backToTop.classList.add("opacity-100"); 
} else { 
backToTop.classList.add("opacity-0"); 
setTimeout(() => { 
if (backToTop.classList.contains("opacity-0")) { 
backToTop.classList.add("hidden"); 
} 
}, 300); 
} 
}); 
// Saat tombol diklik → scroll ke atas 
backToTop.addEventListener("click", () => { 
window.scrollTo({ 
top: 0, 
behavior: "smooth", 
}); 
}); 
const typingText = document.getElementById("typingText"); 
 
// Text yang akan di-type bergantian 
const words = [ 
    "Mahasiswa", 
    "Web Developer", 
    "UI/UX Enthusiast", 
    "Tech Content Creator" 
]; 
 
let wordIndex = 0; 
let charIndex = 0; 
let isDeleting = false; 
 
function typeEffect() { 
    const currentWord = words[wordIndex]; 
    const currentText = currentWord.substring(0, charIndex); 
 
    typingText.textContent = currentText; 
 
    if (!isDeleting) { 
        // Proses mengetik 
        if (charIndex < currentWord.length) { 
            charIndex++; 
            setTimeout(typeEffect, 120); 
        } else { 
            // Delay sebelum menghapus 
            isDeleting = true; 
            setTimeout(typeEffect, 1000); 
        } 
    } else { 
        // Proses menghapus 
        if (charIndex > 0) { 
            charIndex--; 
            setTimeout(typeEffect, 70); 
        } else { 
            // Pindah ke kata berikutnya 
            isDeleting = false; 
            wordIndex = (wordIndex + 1) % words.length; 
            setTimeout(typeEffect, 300); 
        } 
    } 
} 
 
typeEffect();
window.addEventListener("load", function () { 
const preloader = document.getElementById("preloader"); 
// Tambahkan efek fade out 
preloader.style.opacity = "0"; 
preloader.style.transition = "opacity 0.5s ease"; 
// Hilangkan elemen setelah animasi selesai 
setTimeout(() => { 
preloader.style.display = "none"; 
}, 500); 
}); 
/* =============================
     LOVE CONFETTI
  ============================= */
  const loveBtn = document.getElementById("loveBtn");

  if (loveBtn) {
    loveBtn.addEventListener("click", () => {
      const rect = loveBtn.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      for (let i = 0; i < 10; i++) createConfetti(x, y);

      loveBtn.classList.add("scale-125");
      setTimeout(() => loveBtn.classList.remove("scale-125"), 150);
    });
  }

  function createConfetti(x, y) {
    const confetti = document.createElement("span");
    const icons = ["💙", "✨", "⭐", "🎉", "😍"];
    confetti.textContent = icons[Math.floor(Math.random() * icons.length)];
    confetti.style.position = "fixed";
    confetti.style.left = `${x}px`;
    confetti.style.top = `${y}px`;
    confetti.style.pointerEvents = "none";
    confetti.style.zIndex = "9999";

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 80 + 40;

    confetti.animate(
      [
        { transform: "translate(0,0)", opacity: 1 },
        {
          transform: `translate(${Math.cos(angle) * distance}px, ${
            Math.sin(angle) * distance
          }px)`,
          opacity: 0,
        },
      ],
      { duration: 900, easing: "ease-out" }
    );

    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 900);
  }