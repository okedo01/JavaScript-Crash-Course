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

const scores = [50, 25, 0, 30, 100, 20, 10];
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

const speak = function(name){
  console.log(`good day! ${name}`);
}

speak('okedo');