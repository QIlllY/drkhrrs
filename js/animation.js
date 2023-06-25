$(window).scroll(function() {
  $('.about, .hero, .text, .hhh, .gms, .review, .amnesia, .screen, .re4, .photo-container').each(function() {
    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if (bottom_of_window > bottom_of_element) {
      $(this).animate({opacity: '1'}, 0);
    }
  });
});


// Получаем все элементы с классом ".screen"
const imageContainers = document.querySelectorAll('.screen, .amnesia, .re4');

// Для каждого элемента применяем обработчики событий
imageContainers.forEach(imageContainer => {
  const menu = imageContainer.querySelector('.menu, .menu2, .menu3');

  imageContainer.addEventListener('mouseenter', () => {
    menu.style.display = 'block';
    setTimeout(() => {
      menu.style.top = '0';
      menu.style.opacity = '1';
    }, 10);
  });

  imageContainer.addEventListener('mouseleave', () => {
    menu.style.top = '32%';
    menu.style.opacity = '0';
    setTimeout(() => {
      menu.style.display = 'none';
    }, 300);
  });
});
