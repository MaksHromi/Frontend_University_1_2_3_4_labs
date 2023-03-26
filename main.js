function runZadanie1() {
alert("Hello World!");
}

function runZadanie3() {
let a = 10;
let b = 20;
let c = 23.2;
let sum = a + b + c;
let difference = b - a;
let quotient = c / a;
alert("Suma: " + sum);
alert("Różnica: " + difference);
alert("Iloraz: " + quotient);
}

function runZadanie31() {
let a = 15.9;
let b = 18.6;
let c = 24.3;
let sum = a + b + c;
document.getElementById("sum").innerHTML = `Wynik dodawania: ${sum.toFixed(2)}`;
let difference = b - a;
document.getElementById("difference").innerHTML = `Wynik odejmowania: ${difference.toFixed(2)}`;
let quotient = c / a;
document.getElementById("quotient").innerHTML = `Wynik podziału: ${quotient.toFixed(2)}`;
}

function runZadanie4() {
const name = prompt("Jak masz na imię?");
alert(`Cześć ${name}! Witam na mojej stronie!`);
}

function runZadanie5() {
let a = parseFloat(prompt("Podaj długość a:"));
let b = parseFloat(prompt("Podaj długość b:"));
let c = parseFloat(prompt("Podaj długość c:"));
let p = (a + b + c) / 2;
 let pole = Math.sqrt(p * (p - a) * (p - b) * (p - c));
alert(`wynik ${pole.toFixed(2)}`);
}

function runZadanie6() {
const userNumber = Math.floor(Math.random() * 5) + 1;
const userInput = parseInt(prompt("Zgadnij liczbę od 1 do 5"));
if (userInput === userNumber) {
  alert("Dobra robota!");
} 
else {
  alert(`Nie pasuje. Liczba odgadywana to ${userNumber}.`);
}}

function runZadanie7() {
const liczba1 = parseFloat(prompt("Podaj pierwszą liczbę:"));
const liczba2 = parseFloat(prompt("Podaj drugą liczbę:"));
const liczba3 = parseFloat(prompt("Podaj trzecią liczbę:"));
let najwieksza = liczba1;
if (liczba2 > najwieksza) {
  najwieksza = liczba2;
}
if (liczba3 > najwieksza) {
  najwieksza = liczba3;
}
alert(`Największa liczba to ${najwieksza}.`);}
