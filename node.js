// let age = 23;
// console.log(age);

// let year = 2023;
// console.log(year);

// year = 2025;
// console.log(year);

// const points = 100;
// console.log(points)

// var marks = 12;
// console.log(marks)

// String
// let email = 'eliah.com';
// console.log(email);

// let firstName = 'marvel';
// let lastName = 'okedo';
// let fullName = firstName + ' ' + lastName;
// console.log(fullName );

// console.log(fullName.length);

// console.log(fullName.toUpperCase());

// let result = fullName.toLowerCase();
// console.log(result);

// const title = "Best reads of 2019";
// const author = "okedo";
// const likes = 30;

// concatenation
// console.log('The blog called ' +title +' written by ' +author +' having  ' +likes +' likes');

// template string way
// let result = `The blog called ${title}  written by ${author} having  ${likes} likes`
// console.log(result);

// Creating html templates
// let html = `
// <h2> ${title} </h2>
// <p> written by ${author} </p>
// <span> having ${likes} likes </span>
// `;
// console.log(html);

// arrey
// let ninjas = ["shaun", "ryu", "chun-li"];
// ninjas[1] = "ken";
// console.log(ninjas);

// let random = ["shaun", "ryu", "chun-li", 30, 60];
// console.log(random.length);

// array methods
// let result = ninjas.indexOf('chun-li');
// let result = ninjas.join(', ');
// let result = ninjas.concat(['ken', 'crystal']);
// let result = ninjas.push('ken');
// let result = ninjas.pop();

// console.log(result);

// let age = null;
// console.log(age, age + 3, `the age is ${age}`);

// boolean
// console.log(true, false, 'true', 'false');

// boolean methods
// let email = "eliahmwelangi01@gmail.com";

// let results = email.includes('@');

// let results = email.includes('!');

// let names = ['stallion', 'okedo', 'sparrow'];
// let results = names.includes('okedo');

// let age = 29;

// console.log(age == 30);
// console.log(age != 19);
// console.log(age >= 23);

// let names = 'eliah';
// console.log(names == 'eliah');
// console.log(names == 'Eliah');
// console.log(names > 'okedo');
// console.log(names > 'Okedo');

// Javascript is a loosely comparison
// let age = 23;

// console.log(age == 23);
// console.log(age == '23');

// use === to make it strictly comparison
// console.log(age === 23);
// console.log(age === '23');

// type conversion
// let score = "100";

// score = Number(score);
// console.log(typeof score);
// console.log(score + 1);

// let result = Number('hello');
// let result = Number(32);

// let result = String(50);

// let result = Boolean(0);

// let result = Boolean('');
// console.log(result, typeof result);

// for loops
// for(let i = 0; i < 5; i++){
//     console.log('in loop:', i)
// }
// console.log('loop finished');

// const names = ['marvel', 'stallion', 'okedo', 'sparrow'];
// for(let i = 0; i < names.length; i++){
// //    console.log(names[i]);
// let html = `<div> ${names[i]} </div>`
// console.log(html);
// }

// while loop
// let i = 0;
// while (i < 5) {
//     i++;
//     console.log(i);
// }

// const names = ['marvel', 'stallion', 'okedo', 'sparrow'];

// let i = 0;

// while(i < names.length){
//     i++;
//     console.log(names[i]);
// }

// Do While loop
// let i = 2;

// do{
//     console.log('value of i is:', i);
//     i++;
// }

// while(i < 5);

// conditional statements

// let age = 26;

// if(age > 25){
// console.log('you are not allowed')
// }

// const ninjas = ['shawn', 'ryu', 'chun-li', 'yoshi'];

// if(ninjas.length > 3){
//     console.log("that's a lot of ninjas");
// }

// const password = 'pass';

// if(password.length >= 12){
//     console.log('password is might strong');
// }

// else if(password.length >= 8){
//     console.log('the password is long enough')
// }

// else{
//     console.log('password is not long')
// }

// logical operators
// const password = 'p@ss';

// if(password.length >= 12 && password.includes('@')){
//     console.log('password is might strong');
// }

// else if(password.length >= 8 || password.includes('@')){
//     console.log('the password is strong enough');
// }

// else{
//     console.log('password is not strong');
// }

// logical NOT

// let user = false;
// if(!user){
//     console.log('you must be logged in to continue');
// }

// breaking and continue

// const scores = [50, 25, 0, 30, 100, 20, 10];
// break
// for(let i = 0; i < scores.length; i++){
//     console.log(scores[i]);
//     if(scores[i] === 100){
//         console.log('congrats, you have got the highest score');
//         break;
//     }
// }
// continue
// for(let i =0; i < scores.length; i++){

//     if(scores[i] === 0){
//         continue;
//     }
//     console.log('your score is: ', scores[i]);

//     if(scores[i] === 100){
//         console.log('congrats, you have got the highest score. ');
//         break;
//     }
// }

// switch statements

// test grade
// const grades = "W";

// switch (grades) {
//   case "A":
//     console.log("your grade is A!");
//     break;

//   case "B":
//     console.log("your grade is B!");
//     break;

//   case "C":
//     console.log("your grade is C!");
//     break;

//   case "D":
//     console.log("your grade is D!");
//     break;

//   case "E":
//     console.log("your grade is E!");
//     break;

//   default:
//     console.log("Please, enter a valid grade!");
// }

// variables and block scope

// global scope
// let age = 30;
// let name = 'marvel';
// if (true) {

// local scope
//   let age = 40;
//   let name = 'okedo';

//   console.log('inside the block: ', age, name);

//   if(true){

//     let age = 50;
//     console.log('inside another code block: ', age, name);
//   }

// }

// console.log('outside the block: ',age, name);

// functions

// function declaration
// function greet(){
//     console.log('hello there!');
// }

// greet();
// greet();
// greet();

// function expression
// const speak = function(){
//     console.log('good day!')
// };

// speak();
// speak();
// speak();

// HOISTING

// greet();
// greet();
// greet();
// greet();
// greet();

// function declaration
// function greet(){
//   console.log('hello there')
// }

// function expression

// speak();
// speak();
// speak();
// speak();

// const speak = function(){
//   console.log('good day');
// };

// function expression

// const speak = function(name = 'okedo', time ='morning'){
//   console.log(`good ${time} ${name}`);
// }

// speak();
// speak('marvel')

// returning value

// const calcArea = function (radius) {
//   return 3.14 * radius ** 2;
// };

// const area = calcArea(5);
// console.log(area);

// const calcVol = function (area, radius) {
//   let volume = area * radius;
//   // console.log(volume);
//   return volume;
// };

// const volume = calcVol(area);
// console.log(volume);

// arrow functions

// const calcArea = radius => 3.14 * radius**2;

// const area = calcArea(4);
// console.log(area);

// practice arrow function

// const greet = function(){
//   return 'hello world!'
// };

// const greet = () => 'hello world!';

// const result = greet();
// console.log(result);

// const bill = function (products, tax) {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }

//   return total;
// }
// const result = bill([10, 15, 30], 0.2);
// console.log(result);

// arrow function

// const bill = (products, tax) =>  {
//   let total = 0;
//   for(let i = 0; i < products.length; i++){
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

// const result = bill([10, 15, 30], 0.2);
// console.log(result);

// functions and methods
// const name = 'okedo';

// function

// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// // method

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

// callback function and foreach

// const myFunct = (callbackFunc) => {
//   let value = 50;
//   callbackFunc(value);
// };

// myFunct (value => {

//   console.log(value);
// });

// foreach

// let people = ['marvel', 'stallion', 'okedo', 'sparrow', 'shaun']

// const logPerson = (person, index) => {
//     console.log(`${index} ${person}`)
// }
// people.forEach(logPerson); //callback function;

// const ul = document.querySelector('.people');

// const person = ['marvel', 'stallion', 'okedo', 'sparrow', 'shaun'];

// let html = ``;

// person.forEach(person => {
//     // create html templete
//     html += `<li style = "color: purple";> ${person} </li>`;
// });

// console.log(html);
// ul.innerHTML = html;

// object literals

// let user = {
//     name: 'okedo',
//     age: 23,
//     email: 'okedo@marvel.com',
//     location: 'uk',
//     blogs: [
//         {title: '10 things about Okedo', likes: 30},
//         {title: 'learn js', likes: 50},
//     ],

//     login(){
//         console.log('the user logged in')
//     },

//     logout(){
//         console.log('the user logged out')
//     },

//     logBlogs(){
//         console.log('This user has written the following blogs:');
//         this.blogs.forEach((blogs) => {
//             console.log(blogs.title, blogs.likes);
//         })
//     }
// };

// user.name = 'marvel';

// console.log(user);
// console.log(user.name);
// console.log(user['email']);

// console.log(typeof user)

// user.login();
// user.logout();
// user.logBlogs();
// console.log(this)

// const blogs = [
//     {title: '10 things about Okedo', likes: 30},
//     {title: 'learn js', likes: 50},
// ];

// console.log(blogs)

// Math object

// console.log(Math);
// console.log(Math.PI);

// const area = 9.5;
// console.log(Math.round(area));

// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// random numbers
// const random = Math.random();
// console.log(random);
// console.log(Math.round(random * 100))

// primitive and reference types

// primitive types

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`score one is ${scoreOne}, score two is ${scoreTwo}`);

// scoreOne = 100;

// console.log(`score one is ${scoreOne}, score two is ${scoreTwo}`);

// reference types

// const userOne = {
//     name: 'okedo',
//     age: 30,
// }

// const userTwo = userOne;

// console.log(userOne, userTwo);

// userOne.age = 50;

// console.log(userOne, userTwo);

// DOM

// query selector
// const para = document.querySelector('div.error');

// console.log(para);

// const paras = document.querySelectorAll('p');

// console.log(paras[1]);

// paras.forEach(para => {
//     console.log(para);
// })

// const errors = document.querySelectorAll('.error');

// console.log(errors);

// get elements by ID

// const title = document.getElementById('page-title');

// console.log(title);

// const error = document.getElementsByClassName('error');

// console.log(error);

// console.log(error[1]);

// you cant use foreach method in HTML collection
// error.forEach(function(errors){
//     console.log(errors);
// })

// const paras = document.getElementsByTagName('p');

// console.log(paras);

// console.log(paras[1]);

// grab inner text

// const para = document.querySelector('p');

// console.log(para.innerText);

// para.innerText = 'ninjas are awesome';

// const paras = document.querySelectorAll("p");

// paras.forEach(paragraphs => {
//     console.log(paragraphs.innerText);
//     paragraphs.innerText += ' new text';
// });

// const content = document.querySelector(".content");

// console.log(content.innerHTML);

// content.innerHTML += 'new html';

// const person = ["marvel", "stallion", "okedo", "sparrow", "shaun"];

// person.forEach(people => {
//     content.innerHTML += `<p> ${people}</p>`;
// });

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));

// link.setAttribute('href', 'https://www.frontendmentor.io');

// link.innerText = 'frontend mentor';

// const error = document.querySelector('.error');

// console.log(error.getAttribute('class'));

// error.setAttribute('class', 'comment')

// error.setAttribute('style', 'color: red');

// const title = document.querySelector('h1');

// title.setAttribute('style', 'margin: 50px');

// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = '200px';
// title.style.color = 'crimson';
// title.style.fontSize = '60px';
// title.style.color = '';

// const content = document.querySelectorAll('p');

// console.log(content.classList);

// content.classList.add('success');

// content.classList.remove('success');

// content.classList.add('error');

// challenge
// const contents = document.querySelectorAll("p");

// contents.forEach(p => {
    // console.log(p.textContent);
    // if(p.textContent.includes('error')){
        // console.log('error class');
        // p.classList.add('error');
    // }

    // else if(p.textContent.includes('success')){
        // console.log('success text');
    //     p.classList.add('success');
    // }
    // else{
    //     console.log('no class');
    // }
// });

// const article = document.querySelector('article');

// console.log(article.children);

// CONVERT HTML COLLECTION TO ARRAY

// console.log(Array.from(article.children));

// Array.from(article.children).forEach(child => {
//     child.classList.add('child-element');
// });

// const title = document.querySelector('h2');

// console.log(article.parentElement);

// console.log(title.nextElementSibling);

// event clicks

// const ul = document.querySelector('ul');

// ul.remove();

const para = document.querySelector('p');

const head = document.querySelector('h1');

const ul = document.querySelector('ul');

const button = document.querySelector('button');

button.addEventListener('click', () => {
    // ul.innerHTML += `<li> something new </li>`;
    // head.innerHTML += `<h1> New Header </h1>`;
    // para.innerHTML += `<p> item picked </p>`;
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    // ul.append(li);
    ul.prepend(li);
});

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//    item.addEventListener('click', e => {
//     e.target.style.textDecoration = 'line-through';
//     e.target.remove();
//     console.log('event in LI');
//     e.stopPropagation();
//    });
// });

ul.addEventListener('click', e => {
    console.log(e.target);
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
});