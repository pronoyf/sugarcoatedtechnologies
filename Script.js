document.addEventListener('DOMContentLoaded', function () {
  const sliderItems = document.querySelectorAll('.slider-item');
  const wordLinks = document.querySelectorAll('.word-link');

  wordLinks.forEach(link => {
    link.addEventListener('click', function () {
      const targetIndex = parseInt(this.getAttribute('data-index'));

      // Remove the 'active' class from all word links
      wordLinks.forEach(otherLink => {
        otherLink.classList.remove('active');
      });

      // Add the 'active' class to the clicked word link
      this.classList.add('active');

      // Hide all slider items
      sliderItems.forEach(item => {
        item.style.display = 'none';
      });

      // Show the slider item corresponding to the clicked word link
      const targetItem = document.querySelector(`.slider-item[data-index="${targetIndex}"]`);
      targetItem.style.display = 'block';
    });
  });

  // Add click event listeners for images
  sliderItems.forEach(item => {
    const image = item.querySelector('img');

    image.addEventListener('click', function () {
      // Remove the 'active' class from all word links
      wordLinks.forEach(link => {
        link.classList.remove('active');
      });

      // Hide all slider items
      sliderItems.forEach(otherItem => {
        otherItem.style.display = 'none';
      });

      // Show the corresponding slider item
      item.style.display = 'block';
    });
  });
});