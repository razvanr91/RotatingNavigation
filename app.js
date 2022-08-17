const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
const container = document.querySelector('.container');

const openNav = () => {
  container.classList.add('show-nav');
}

const closeNav = () => {
  container.classList.remove('show-nav');
}

openButton.addEventListener('click', () => openNav());

closeButton.addEventListener('click', () => closeNav());