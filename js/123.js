let currentLocation = window.location.href;
let menuItems = document.querySelectorAll('ul li a');
let currentItem = null;

for (let i = 0; i < menuItems.length; i++) {
  if (menuItems[i].href === currentLocation) {
    currentItem = menuItems[i];
    break;
  }
}

if (currentItem !== null) {
  currentItem.style.borderBottom = '2px solid white';
}
