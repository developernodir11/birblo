document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('toggleBtn');
  const navList = document.querySelector('.nav-list');
  
  toggleBtn.addEventListener('click', function() {
    navList.classList.toggle('active');
    const icon = this.querySelector('i');
    if (navList.classList.contains('active')) {
      icon.classList.remove('ri-menu-line');
      icon.classList.add('ri-close-line');
    } else {
      icon.classList.remove('ri-close-line');
      icon.classList.add('ri-menu-line');
    }
  });

  document.addEventListener('click', function(e) {
    if (!e.target.closest('header') && navList.classList.contains('active')) {
      navList.classList.remove('active');
      const icon = toggleBtn.querySelector('i');
      icon.classList.remove('ri-close-line');
      icon.classList.add('ri-menu-line');
    }
  });
});