
//Покраска первой карточки

const recolorFirstCardButton = document.getElementById('recolor-first-card-button');
const firstProductCard = document.querySelector('.product-card');
const blueHashColor = '#ffd700'

recolorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueHashColor; 
})

//Покраска всех карточек

const greenHashColor = '#A5A3B9'
const catalogCards = document.querySelectorAll('.product-card');
const recolorAllCardButton = document.getElementById('recolor-all-card-button');

recolorAllCardButton.addEventListener('click', () => {
  catalogCards.forEach(
    card => card.style.backgroundColor = greenHashColor
  )
})

//Переход на страницу Google

const openGoogleButton = document.getElementById('open-google-button');
openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите перейти на сайт Google?')

if (answer ===true) {
  window.open('https://google.com');
  } else {
    console.log('Пользователь отменил переход на сайт')
  }
}

//Наведение на заголовок страницы

const mainTitle = document.querySelector('h1');
mainTitle.addEventListener('mouseenter', () => {
  console.log(mainTitle.textContent);
})

//Цветная кнопка

const btn = document.querySelector('.color-change');
btn.addEventListener('click', () => {
  btn.classList.toggle('active');
});
