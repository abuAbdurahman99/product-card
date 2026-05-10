/*3. Создайте объект на основе ваших данных. Имя, фамилия, почта, работа, должность, возраст, страна, город, статус отношений и так далее.
 Чем больше - тем лучше (но не увлекайтесь, до 10 максимум). Подберите правильное название для переменной.*/

const user = {
  name: 'Adil',
  lastName: 'Tokushev',
  age: 28,
  country: 'Kyrgyzstan',
  city: 'Bishkek',
  religion: 'Islam',
  relationshipStatus: 'married',
  childrenCount: 3
 };

/*4. Создайте объект, который будет хранить данные об автомобиле (марка, модель, год выпуска, цвет, вид коробки).
 Добавьте дополнительное свойство - владелец авто, значением которого будет ОБЪЕКТ, описанный в пункте №3.
 Желательно добавлять отдельной строкой (имеется ввиду не при создании объекта) */

const autoInfo = {
  brand: "Subaru",
  model: "Legasy",
  year: 2005,
  color: "grey",
  transmission: "automatic"
};

autoInfo.owner = user;
console.log(autoInfo)

/*5. Написать функцию которая аргументом будет принимать объект, описанный в пункте №4. 
 Она проверяет, есть ли в объекте свойство "максимальная скорость", если нет - добавляет его и задает значение,
 если есть - прекращает выполнение (ничего не делает)*/

 let hasMaxSpeed = (car) => {
  if ('maxSpeed' in car) {
    return
  } car.maxSpeed = '240km/h'
 }

 hasMaxSpeed(autoInfo);

/*6. Написать функцию, которая получает первым аргументом  — объект, 
а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение.*/

let getItem = (object, key) => {
  return (object [key])
}

console.log(getItem(user, 'childrenCount'));

//7. Создать массив, который содержит названия продуктов (просто строки)

const products = ["морковь", "картошка", "лук"];

/*8. Создать массив, состоящий из объектов, где объект представляет собой книгу (название, автор, год выпуска, цвет обложки, жанр)
 (3-5 книг). После, используя известный нам метод массив, добавить еще одну книгу в конец списка. 
 Можете заменить книги на фильмы, или другую сущность, идею вы поняли. */

const books = [
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    coverColor: "white",
    genre: "dystopia"
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    year: 1866,
    coverColor: "brown",
    genre: "novel"
  },
  {
    title: "Les Misérables",
    author: "Victor Hugo",
    year: 1862,
    coverColor: "blue",
    genre: "historical novel"
  }
];

books.push({
  title: "Martin Eden",
  author: "Jack London",
  year: 1909,
  coverColor: "green",
  genre: "novel"
});

/*9. Создать еще один массив, состоящих из тех же книг, но относящийся к определенной вселенной (Гарри Поттер, Марвел и так далее).
 (Если используете другую, свою сущность - импровизируйте). С помощью известного нам метода массива или оператора 
 рекомендую использовать оператор), объединить эти два массива в один */

const theDarkTowerUniverse = [
  {
    title: "The Gunslinger",
    author: "Stephen King",
    year: 1982,
    coverColor: "black",
    genre: "fantasy"
  },
  {
    title: "The Drawing of the Three",
    author: "Stephen King",
    year: 1987,
    coverColor: "red",
    genre: "fantasy"
  }
];

let library = [...books, ...theDarkTowerUniverse];
console.log(library)

/*10. Почитать про метод массива — map. Написать функцию, которая принимает массив сущностей с задания №9.
 Добавляем новое свойство для объекта "isRare (это редкий)" и в зависимости от года выпуска книги 
 (или какой-то логики, связанной с вашей сущностью), устанавливаем true или false. Что я хочу этим сказать:
 если книга выпущена позже 2000 года, устанавливаем true (да, это редкий), нет - false (значит это не редкий).*/

const rareBooks = theDarkTowerUniverse.map((book) => {
  return {...book, isRare: book.year > 2000}
})

console.log(rareBooks);





