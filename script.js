function toggleMenu() {
            const navbar = document.getElementById('navbar');
            const navList = document.getElementById('navList');
            navbar.classList.toggle('active');
            navList.classList.toggle('active');
        }

        const swiper = new Swiper('.swiper-container', {
      loop: true, // Seamless looping
      slidesPerView: 1,
      spaceBetween: 20,
      // Responsive breakpoints
      breakpoints: {
        // Small devices (phones)
        400: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // Medium devices (tablets)
        600: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        // Large tablets and small desktops
        900: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // Desktops
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }
    });