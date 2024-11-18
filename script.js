let popupCounter = 1;

// Show the initial popup
document.querySelector('.click-button').addEventListener('click', () => {
  document.querySelector('.popup-overlay').classList.remove('hidden');
});

// Close the current popup
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('close-button')) {
    event.target.closest('.popup-overlay').remove();
  }
});

// Add a new popup
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('plus-button')) {
    popupCounter++;
    createNewPopup(`Hello World ${popupCounter}`);
  }
});

// Function to create a new popup
function createNewPopup(message) {
  const newOverlay = document.createElement('div');
  newOverlay.className = 'popup-overlay';

  const newPopup = `
    <div class="popup">
      <p>${message}</p>
      <button class="plus-button">+</button>
      <button class="close-button">Close</button>
    </div>
  `;

  newOverlay.innerHTML = newPopup;
  document.body.appendChild(newOverlay);
}
