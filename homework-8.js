/*4. Используя метод .reduce(), получить массив объектов, 
где ключем является название продукта, а значением - его описание */

import { productCards } from "./product-cards.js";

const getProductCards = productCards.reduce((acc, card) => {
  acc.push({[card.name]: card.description});
  return acc
}, []);

/*5*. Реализовать функцию, которая при старте страницы выводит сообщение (через функцию prompt)
"Сколько карточек отобразить? От 1 до 5" и в зависимости от результата - будет выводить введенное количество.
Должна быть защита от ввода других значений (проверка if). То-есть: у нас будет 2 функции,
одна возвращает количество карточек, которое нужно ввести, другая - рендерить эти карточки (принимая массив аргументом)*/

const allProducts = document.querySelector('#all-product-card');
const productCardTemplate = document.querySelector('#product-card-template');

function showProductCard() {
  const number = prompt('Сколько карточек отобразить? От 1 до 5');
  const count = parseInt(number);
  if (!isNaN(count) && count >= 1 && count <= 5) {
    return count;
  } else {
    alert('Неверный ввод! Пожалуйста, введите число от 1-5.');
    return showProductCard();
    }
  }

function renderCards(cards) {
cards.forEach(product => {

  const productClone = productCardTemplate.content.cloneNode(true);
  productClone.querySelector('.for-skin').textContent = product.briefDescription;
  productClone.querySelector('.product-name').textContent = product.name;
  productClone.querySelector('.description').textContent = product.description;
  productClone.querySelector('.price').innerHTML = product.price;

  const compositionList = productClone.querySelector('.product-composition');

  product.composition.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  compositionList.appendChild(li);
});

allProducts.appendChild(productClone);
})
}

const totalCardsToRender = showProductCard();
const slicedCards = productCards.slice(0, totalCardsToRender);

renderCards(slicedCards);
