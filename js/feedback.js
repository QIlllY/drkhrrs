var openModalBtn = document.getElementById("openModalBtn");
var modal = document.getElementById("myModal");
var closeButton = document.getElementsByClassName("close")[0];
var feedbackForm = document.getElementById("feedbackForm");

openModalBtn.onclick = function() {
  modal.style.display = "block";
};

closeButton.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

feedbackForm.onsubmit = function(event) {
  event.preventDefault();
  // Ваш код для обработки отправки формы
};
