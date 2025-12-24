const images = document.querySelectorAll('.gallery img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let currentIndex = 0;

/* Open Lightbox */
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

/* Close Lightbox */
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

/* Next Image */
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

/* Previous Image */
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

/* Filter Images */
document.querySelectorAll('.filter-buttons button').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    images.forEach(img => {
      img.style.display =
        filter === 'all' || img.dataset.category === filter
          ? 'block'
          : 'none';
    });
  });
});
 