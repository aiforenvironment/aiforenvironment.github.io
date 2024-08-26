// handle menu
const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');

button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});


// handle view abstract modal popup
document.addEventListener('DOMContentLoaded', function () {
  const modalContainers = document.querySelectorAll('.modal-container');

  modalContainers.forEach(function (container) {
      const openButton = container.querySelector('.open-modal');
      const closeButton = container.querySelector('.close-modal');
      const modalOverlay = container.querySelector('.modal-overlay');
      const modalContent = container.querySelector('.modal-content');

      openButton.addEventListener('click', function () {
          modalOverlay.style.display = 'flex';
      });

      closeButton.addEventListener('click', function () {
          modalOverlay.style.display = 'none';
      });

      // Stop propagation to prevent closing when clicking inside the modal
      modalContent.addEventListener('click', function (e) {
          e.stopPropagation();
      });

      modalOverlay.addEventListener('click', function (e) {
          if (e.target === modalOverlay) {
              modalOverlay.style.display = 'none';
          }
      });

      document.addEventListener('keydown', function (e) {
          if (e.key === 'Escape') {
              modalOverlay.style.display = 'none';
          }
      });
  });
});