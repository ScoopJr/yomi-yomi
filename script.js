document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  
    // Mobile Menu
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
  
    if (menuToggle && menu) {
      menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show');
      });
    }
  
    // Action enter level request
    const levelInput = document.getElementById('wanikani-level');
    const confirmButton = document.getElementById('confirm-level');
    const errorMessage = document.getElementById('error-message');
  
    if (confirmButton) {
      confirmButton.addEventListener('click', function() {
        const level = parseInt(levelInput.value);
        if (!isNaN(level) && level >= 1 && level <= 60) {
          const targetPage = Math.ceil(level / 10);
          window.location.href = '#page' + targetPage;
        } else {
          errorMessage.textContent = 'Please enter a valid WaniKani level between 1 and 60.';
        }
      });
    }
  
    // Dropdown Menu
    var dropdownBtn = document.querySelector(".menu-icon"); 
    var dropdownMenu = document.querySelector(".dropdown-menu");
    
  
    dropdownBtn.addEventListener("click", function() {
      dropdownMenu.classList.toggle("active");
    });
  
    // Close dropdown when clicking outside the dropdown menu
    document.addEventListener("click", function(event) {
      var target = event.target;
      if (!target.closest(".dropdown")) {
        dropdownMenu.classList.remove("active");
      }
    });
  });
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  function toggleDropdown() {
    var dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.classList.toggle("show");
  }
  
  // YouTube Subscribe Button
function handleYtEvent(ytEvent) {
    if (ytEvent.data === YT.PlayerState.SUBSCRIBE) {
      // User subscribed
      console.log('User subscribed');
    }
  }