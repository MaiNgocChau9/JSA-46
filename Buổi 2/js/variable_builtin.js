//! Input, Output

// alert("This is a notification!");
// const fullName = prompt("Enter your name");
// console.log(fullName);
// confirm("Are you human?");

//! Variable (Scope)

// //? Local Scope: let
// for (let index = 0; index < 10; index++) { // 0 - 9
//     console.log(index);
// }
// console.log(index); // Error ~ undefined

// //? Global Scope: var
// for (var index = 0; index < 10; index++) { // 0 - 9
//     console.log(index);
// }
// console.log(index); // 10

// //? Block Scope: const
// const object = { name: "abc", age: 15 };
// //// object += {} // error (is constant var)
// object.name = "xyz"; // ok because is not constant
// console.table(object); //output as table

//! Built-in (Set timeout, setInterval)

//? Set timeout
/*
=== Way 1 ===
setTimeout(() => {
    ~Do something
}, time_out);

=== Way 2 ===
setTimeout(function () {
    ~Do something
}, time_out);
*/

// === WAY 1 ===
// setTimeout(() => {
//     document.write("<h1>Hello World</h1>");
// }, 3000);

// === WAY 2 ===
// setTimeout(function () {
//     document.write("<h1>Hello World</h1>");
// }, 3000);

//? Set interval

const id = setInterval(() => {
    // HTML DOM
    document.getElementsByTagName("body")[0].innerHTML += "<h1>Hello</h1>";
}, 1000)

const id2 = setInterval(() => {
    // HTML DOM
    document.getElementsByTagName("body")[0].innerHTML += "<h1>Bye</h1>";
}, 1000)

//* Stop after 5 times (5 seconds)
setTimeout(() => {
    clearInterval(id);

    // Callback function
    setTimeout(() => {
        clearInterval(id2);
    }, 5000);

}, 5000);