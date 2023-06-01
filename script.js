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

  function toggleContent(element) {
  const bar = element.parentNode;
  bar.classList.toggle('open');
}

// Hidden dropdown and inverted triangle for level pages
function toggleContent(element) {
    var content = element.nextElementSibling;
    content.classList.toggle("hidden");
    element.classList.toggle("opened");
  }
  
  















// Level data with story information
var levelsData = [
    // Levels 1 to 10
    [
      { image: 'story1.jpg', title: 'Story 1', link: 'story1.html' },
      { image: 'story2.jpg', title: 'Story 2', link: 'story2.html' },
      { image: 'story3.jpg', title: 'Story 3', link: 'story3.html' },
      { image: 'story4.jpg', title: 'Story 4', link: 'story4.html' },
      { image: 'story5.jpg', title: 'Story 5', link: 'story5.html' },
      { image: 'story6.jpg', title: 'Story 6', link: 'story6.html' }
      // Add more stories for Level 1 if needed
    ],
    // Levels 11 to 20
    [
      { image: 'story7.jpg', title: 'Story 7', link: 'story7.html' },
      { image: 'story8.jpg', title: 'Story 8', link: 'story8.html' },
      { image: 'story9.jpg', title: 'Story 9', link: 'story9.html' },
      { image: 'story10.jpg', title: 'Story 10', link: 'story10.html' },
      { image: 'story11.jpg', title: 'Story 11', link: 'story11.html' },
      { image: 'story12.jpg', title: 'Story 12', link: 'story12.html' }
      // Add more stories for Level 2 if needed
    ],
    // Levels 21 to 30
    [
      // Add stories for Level 21 to 30
    ],
    // Levels 31 to 40
    [
      // Add stories for Level 31 to 40
    ],
    // Levels 41 to 50
    [
      // Add stories for Level 41 to 50
    ],
    // Levels 51 to 60
    [
      // Add stories for Level 51 to 60
    ]
  ];
  
  // Function to generate stories for a specific level
  function generateLevelStories(level, stories) {
    var storyList = document.querySelector('.story-list.level' + level);
  
    stories.forEach(function(story) {
      var storyItem = document.createElement('li');
      var storyLink = document.createElement('a');
      var storyImage = document.createElement('img');
      var storyTitle = document.createElement('p');
  
      storyLink.href = story.link;
      storyLink.textContent = story.title;
  
      storyImage.src = 'images/' + story.image;
      storyImage.alt = story.title;
  
      storyItem.appendChild(storyImage);
      storyItem.appendChild(storyTitle);
      storyTitle.appendChild(storyLink);
  
      storyList.appendChild(storyItem);
    });
  }
  
  // Generate stories for each level
  for (var i = 0; i < levelsData.length; i++) {
    generateLevelStories(i + 1, levelsData[i]);
  }


  