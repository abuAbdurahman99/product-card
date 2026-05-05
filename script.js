//2. Переписать и проанализировать задачи, описанные в лекции

const recolorFirstCardButton = document.querySelector('#recolor-first-card-button');
const firstCard = document.querySelector('.product-card');

recolorFirstCardButton.addEventListener('click', () => {
  firstCard.classList.toggle('background-color-cards');
});

const recolorAllCards = document.getElementById('recolor-cards-button');
const allProductCards = document.querySelectorAll('.product-card');

recolorAllCards.addEventListener('click', () => {
  allProductCards.forEach(
    productCard => productCard.classList.toggle('background-color-cards')
  );
});

const transitionGoogle = document.getElementById('transition-google-button');
transitionGoogle.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите перейти на сайт Google?')
  if (answer) {
    window.open('https://www.google.com');
  } else {
    console.log('Пользователь отменил переход');
  };
};

/*3. Используя слушатели событий, сделать так, что бы при наведении на главный заголовок страницы —
 контент элемента выводился в консоль (не произвольный текст, написанный от руки)*/

 const titleMouseover = document.querySelector('.title');

 titleMouseover.addEventListener('mouseover', () => {
  console.log(titleMouseover.textContent);
 });

/*4. Добавить кнопку, при нажатии на которую мы будем менять её цвет с одного на другой.
При повторном нажатии цвет меняется с второго на первый. Цвета выбираем по желанию.*/

const colorButton = document.getElementById('color-button');

colorButton.onclick = function () {
  colorButton.classList.toggle('active');
};




