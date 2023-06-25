// Функция, вызываемая при согласии с использованием куки
function acceptCookies() {
  // Установка куки или выполнение соответствующих действий
  // ...

  // Сохранение информации о согласии в локальном хранилище
  localStorage.setItem("cookieConsent", "true");

  // Скрытие блока с соглашением
  document.getElementById("cookieConsent").style.display = "none";
}

// Функция, вызываемая при отказе от использования куки
function declineCookies() {
  // Удаление куки или выполнение соответствующих действий
  // ...

  // Сохранение информации об отказе в локальном хранилище
  localStorage.setItem("cookieConsent", "false");

  // Скрытие блока с соглашением
  document.getElementById("cookieConsent").style.display = "none";
}

// Проверка информации о согласии при загрузке страницы
document.addEventListener("DOMContentLoaded", function() {
  var consent = localStorage.getItem("cookieConsent");
  if (consent === "true") {
    // Если согласие уже было дано, скрываем блок с соглашением
    document.getElementById("cookieConsent").style.display = "none";
  } else if (consent === "false") {
    // Если был отказ, также скрываем блок с соглашением
    document.getElementById("cookieConsent").style.display = "none";
  } else {
    // Если информации о согласии нет, показываем блок с соглашением
    document.getElementById("cookieConsent").style.display = "block";
  }
});

// Обработчики событий для кнопок согласия и отказа
document.getElementById("btnAccept").addEventListener("click", acceptCookies);
document.getElementById("btnDecline").addEventListener("click", declineCookies);
