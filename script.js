const scrollContainer = document.querySelector('.scroll-content');
const scrollRightButton = document.getElementById('scrollRightButton');
const scrollLeftButton = document.getElementById('scrollLeftButton');

// Function to handle the visibility of buttons
function updateButtonsVisibility() {
    scrollRightButton.style.display = (scrollContainer.scrollWidth > scrollContainer.clientWidth && scrollContainer.scrollLeft < scrollContainer.scrollWidth - scrollContainer.clientWidth) ? 'flex' : 'none';
    scrollLeftButton.style.display = (scrollContainer.scrollLeft > 0) ? 'flex' : 'none';
}

// Event listeners for the buttons
scrollRightButton.addEventListener('click', function() {
    scrollContainer.scrollBy({
        left: 150, // Adjust the scroll distance as needed
        behavior: 'smooth'
    });
    setTimeout(updateButtonsVisibility, 300); // Update visibility after scroll
});

scrollLeftButton.addEventListener('click', function() {
    scrollContainer.scrollBy({
        left: -150, // Adjust the scroll distance as needed
        behavior: 'smooth'
    });
    setTimeout(updateButtonsVisibility, 300); // Update visibility after scroll
});

// Update button visibility on scroll
scrollContainer.addEventListener('scroll', updateButtonsVisibility);

// Initial update of button visibility
updateButtonsVisibility();

// JavaScript to handle item click
        document.querySelectorAll('.item').forEach(item => {
            item.addEventListener('click', function() {
                document.querySelectorAll('.item').forEach(el => el.classList.remove('clicked'));
                this.classList.add('clicked');
            });
        });

        // menu button and its contents

        document.addEventListener('DOMContentLoaded', function() {
            const menuBtn = document.getElementById('menuBtn');
            const closeMenuBtn = document.getElementById('closeMenuBtn');
            const menu = document.getElementById('menu');
            const overlay = document.getElementById('overlay');

            menuBtn.addEventListener('click', function() {
                menu.classList.toggle('open');
                overlay.classList.toggle('visible');
            });

            closeMenuBtn.addEventListener('click', function() {
                menu.classList.remove('open');
                overlay.classList.remove('visible');
            });

            overlay.addEventListener('click', function() {
                menu.classList.remove('open');
                overlay.classList.remove('visible');
            });
        });
        

        // video contents
        document.querySelectorAll('.video-item').forEach(item => {
            const video = item.querySelector('video');
            const muteBtn = item.querySelector('.mute-btn');
          
            muteBtn.addEventListener('click', () => {
              video.muted = !video.muted; 
              muteBtn.textContent = video.muted ? '🔇' : '🔊'; 
            });
          
            // Optional: Play video on hover and pause on mouse leave
            video.addEventListener('mouseenter', () => {
              video.play();
            });
          
            video.addEventListener('mouseleave', () => {
              video.pause();
              video.currentTime = 0; 
            });
          });
          
          
          