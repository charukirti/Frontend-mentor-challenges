export function menuIcon() {
    const menuIcon = document.querySelector('.menu_icon');
    const closeIcon = document.querySelector('.close_icon');
    const navLinks = document.querySelector('.nav_links');
    const overlay = document.querySelector('.overlay');
  
    function toggleMenu() {
      navLinks.classList.toggle('active');
      closeIcon.classList.toggle('active');
      overlay.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    }
  
    function closeMenu() {
      navLinks.classList.remove('active');
      closeIcon.classList.remove('active');
      overlay.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  
    menuIcon.addEventListener('click', toggleMenu);
    closeIcon.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
  
  
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navLinks.classList.contains('active')) {
        closeMenu();
      }
    });
  
  
    document.addEventListener('click', (event) => {
      const isClickInsideMenu = navLinks.contains(event.target);
      const isClickOnMenuIcon = menuIcon.contains(event.target);
      if (navLinks.classList.contains('active') && !isClickInsideMenu && !isClickOnMenuIcon) {
        closeMenu();
      }
    });
  }
  
  