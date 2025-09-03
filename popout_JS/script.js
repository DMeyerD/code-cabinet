const popup = document.getElementById('popup');
const showButton = document.getElementById('showPopup');
const closeButton = document.getElementById('closePopup');

// Show the popup
showButton.addEventListener('click', () => {
  popup.style.display = 'block';
});

// Hide the popup
closeButton.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Optional: Close popup when clicking outside the content box
window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});