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










function generateLevels() {
    var levelsData = [
      // Level 1
      [
        { image: 'placeholder1.jpg', alt: 'Story 1', title: 'Story 1', link: 'story1.html' },
        { image: 'placeholder2.jpg', alt: 'Story 2', title: 'Story 2', link: 'story2.html' },
        // Add more stories for Level 1 if needed
      ],
      // Level 2
      [
        { image: 'placeholder3.jpg', alt: 'Story 3', title: 'Story 3', link: 'story3.html' },
        // Add more stories for Level 2 if needed
      ],
      // Add more levels if needed
    ];
  
    var levelLists = document.getElementsByClassName('level-list');
    for (var i = 0; i < levelLists.length; i++) {
      var levelList = levelLists[i];
      var levelStories = levelsData[i];
  
      for (var j = 0; j < levelStories.length; j++) {
        var story = levelStories[j];
  
        var storyItem = document.createElement('li');
        var storyContent = document.createElement('div');
        var storyImage = document.createElement('img');
        var storyLink = document.createElement('a');
        var storyTitle = document.createElement('p');
  
        storyImage.src = 'images/' + story.image;
        storyImage.alt = story.alt;
  
        storyLink.href = story.link;
        storyLink.textContent = story.title;
  
        storyTitle.appendChild(storyLink);
        storyContent.appendChild(storyImage);
        storyContent.appendChild(storyTitle);
       
  


