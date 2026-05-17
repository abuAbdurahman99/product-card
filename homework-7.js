import { users } from "./comments.js";

//2. Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];

const newNumbers = numbers.filter(number => number >= 5);

/*3. Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.),
проверить, есть ли в массиве какая-то определенная сущность. */

const fruits = ['яблоко', 'груша', 'банан', 'мандарин'];

const findFruit = fruits.find(fruit => fruit === 'груша');

console.log(findFruit);
console.log(fruits.includes('мандарин'));

/*4. Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать").
Два вышеуказанных массива с помощью этой функции перевернуть. */

const getReverseArray = item => [...item].reverse();
console.log(getReverseArray(fruits));
console.log(getReverseArray(numbers));

//7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"

const getEmail = users.filter(user => {
  return user.email.includes('.com');
});


console.log(getEmail);

/*8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2,
 а те, у кого id больше 5, имели postId: 1 */

 const getPostId = users.map(user => {
  if (user.id <= 5) {
    user.postId = 2;
    return user
  } else user.postId = 1;
  return user
 });

 console.log(getPostId);

//9. Перебрать массив, что бы объекты состояли только из айди и имени

const getUsersArray = users.map(user => {
  return {
    name: user.name,
    id: user.id,
  }
});

console.log(getUsersArray);

/*10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем:
если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.*/

const getUsersInvalid = users.map(user =>{
  if (user.body.length > 180) {
    user.isInvalid = true;
    return user
  } else user.isInvalid = false;
  return user
});

console.log(getUsersInvalid)

/*11. Почитать про метод массива reduce. Используя его, вывести массив почт
и провернуть тоже самое с помощью метода map*/

const getEmailReduce = users.reduce((accumulator, user) => {
  accumulator.push(user.email);
  return accumulator;
}, []);

console.log(getEmailReduce);

const getEmailMap = users.map(user => user.email);

//12. Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.

const emailString = getEmailMap.toString();

const emailJoin = getEmailMap.join('$$$');
