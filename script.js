document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
      link.addEventListener('click', e => {
        const targetId = link.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
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
  
  function toggleContentAllLevels(element) {
    const bar = element.parentNode;
    bar.classList.toggle('open');
  }
  
  function toggleContentLevel(element) {
    var content = element.nextElementSibling;
    content.classList.toggle("hidden");
    element.classList.toggle("opened");
  }
 
  function redirectToLevel() {
    // Get the user input
    var level = parseInt(document.getElementById("wanikani-level").value);

    // Check if the input is within the valid range (1-60)
    if (level >= 1 && level <= 60) {
        // Redirect the user to the corresponding level HTML page
        window.location.href = "levels/level" + level + ".html";
        
    } else {
        // Display an error message or handle invalid input as desired
        alert("Invalid level entered. Please enter a number between 1 and 60.");
    }
}


// TESTING SWIPE STORY

$(document).ready(function() {
    $(".story-container").click(function() {
      $(this).dialog({
        modal: true,
        width: "90%",
        height: "auto",
        show: { effect: "fade", duration: 500 },
        hide: { effect: "fade", duration: 500 }
      });
    });
  });


  let isOpen = false;

function toggleStory() {
    const storyContent = document.querySelector('.story-content');
    if (isOpen) {
        storyContent.classList.add('hidden');
    } else {
        storyContent.classList.remove('hidden');
    }
    isOpen = !isOpen;
}

let storyPages;
let currentIndex = 0;

function setupSwipe() {
    const storyContent = document.querySelector('.story-content');
    storyPages = storyContent.querySelectorAll('.story-page');

    const hammertime = new Hammer(storyContent);
    hammertime.on('swipeleft', () => {
        showNextPage();
    });
    hammertime.on('swiperight', () => {
        showPreviousPage();
    });
}

function showNextPage() {
    if (currentIndex < storyPages.length - 1) {
        storyPages[currentIndex].classList.add('hidden');
        currentIndex++;
        storyPages[currentIndex].classList.remove('hidden');
    }
}

function showPreviousPage() {
    if (currentIndex > 0) {
        storyPages[currentIndex].classList.add('hidden');
        currentIndex--;
        storyPages[currentIndex].classList.remove('hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setupSwipe();
});





  

  













