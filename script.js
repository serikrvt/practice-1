// Создайте переменные для хранения вашего имени, возраста и города проживания. Выведите их в консоль.

// const name = prompt('вашего имени, возраста и города проживания')
console.log(name);


// Создайте переменные разных типов данных: строка, число, булевый тип, массив и объект. Выведите тип каждой переменной в консоль с помощью typeof.

const line = 'Привет мир'
const number = 32
const boolean=true
const  array=[1,2]
const object ={}

console.log(typeof(line),typeof(number),typeof(boolean),typeof(array),typeof(object));

// Создайте объект, который будет содержать свойства: name, age, city. Добавьте метод greet, который будет выводить приветствие с использованием свойств объекта. Пример: "Привет, меня зовут [name], мне [age] лет и я из [city]".


const ysers={
    name: 'Serik',
    age: 36,
    city: 'Actau',
    greet: function(){
        console.log(`${ysers.name} мне ${ysers.age} лет и я из ${ysers.city}`);
        
    }
   
}

// Напишите функцию, которая принимает два параметра: width и height, и возвращает площадь прямоугольника. Используйте эту функцию для вычисления площади нескольких прямоугольников.


const areaRectangle=(width,height)=>{
    return width*height
}
console.log(areaRectangle(5,9));






// Создайте объект car с свойствами: brand, model, year, и методом getInfo, который возвращает строку с информацией о машине. 


const auto={

    car: 'Audi',
    model: 'A7',
    year: 2019,
    getinfo: function(){
        return `${this.car,this.model,this.year}`
    }
 
}

// Напишите функцию isEligibleForScholarship, которая принимает объект студента (свойства: name, gpa, extracurricularsCount) и возвращает true, если GPA больше 3.5 и количество внеучебных мероприятий больше 2, и false в противном случае.






// Создайте функцию checkPassword, которая принимает объект пользователя (свойства: password, confirmPassword) и проверяет, соответствует ли пароли друг другу. Если пароль неверный, функция должна возвращать сообщение о том, что пароль неверен, и предлагать пользователю ввести его снова.

const checkPassword=(password,confirmPassword)=>{
 if(password===confirmPassword){
    alert('пароль верный')
 }else{
    alert('неверен,ввести его снова')
 }
}
console.log(checkPassword(111,111));



// Напишите функцию canAccess, которая принимает объект пользователя (свойства: role, isLoggedIn) и возвращает true, если пользователь имеет доступ (например, роль "admin" или "editor" и статус isLoggedIn равен true), и false в противном случае.





// Напишите функцию convertTemperature, которая принимает температуру в градусах Цельсия и возвращает объект с двумя свойствами: celsius и fahrenheit, где fahrenheit - это температура в градусах Фаренгейта.


const temp=()=>{
    for (let i=temp; i<5; i++ ){
let a=(t+i) + "==="+((t+i)-32)*(5/9)
    }
}




// Создайте функцию startCalculator, которая выполняет следующие действия:
// Запрашивает у пользователя два числа.
// Запрашивает у пользователя оператор (например, +, -, *, /).
// Проверяет, что введенные значения являются числами.
// Проверяет, что оператор является одним из допустимых (+, -, *, /).
// Выполняет соответствующую арифметическую операцию и выводит результат.
// Обрабатывает возможные ошибки, такие как деление на ноль.
function startCalculator(num1, num2, actions) {
    switch (actions) {
      case "*":
        return num1 * num2;
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "/":
        if (num2 !== 0) {
          return num1 / num2;
        } else {
          return "не делится на нуль";
        }
    }
  }



//   Условный (тернарный) оператор


const year = 2025
let message = null

if(year ==2025){
    message='да'
}else  {
    message = 'нет';
}
console.log(message);



const message2 = year===2025 ? 'да!!!' : 'нет!'
console.log(message2);
const alert = null


