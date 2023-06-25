$(document).ready(function() {
  var scrollToTopBtn = $('#scrollToTopBtn');

  $(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    // Показать или скрыть кнопку при достижении определенного отдела
    if (scrollDistance > 500) {
      scrollToTopBtn.fadeIn();
    } else {
      scrollToTopBtn.fadeOut();
    }
  });

  // Прокрутка страницы вверх при нажатии на кнопку
  scrollToTopBtn.click(function() {
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  });
});
