const lazyloadImages = document.querySelectorAll('.lazyload');

lazyloadImages.forEach((image) => {
  image.addEventListener('intersectionchange', () => {
    if (image.isIntersecting) {
      image.src = image.dataset.src;
    }
  });
});
