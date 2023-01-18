// Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
// 0 … 0
// let sum0 = 0;
// for (let i = 0; i <= 0; i++){
//     suma += i;
// }
// console.log ('Suma 0..0:', sum0);

// 0 … 4
const sk04 = [0, 1, 2, 3, 4];

let suma = 0;
// let i = 0;
// suma += sk04[i++]
// suma += sk04[i++]
// suma += sk04[i++]
// suma += sk04[i++]
// suma += sk04[i++]
for (let i = 0; i <= 4; i++){
    suma += i;
}
console.log ('Suma 0..4:', suma);

// 0 … 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log ('Suma 0..100:', sum);
// 574 … 815 
let sum1 = 0;
for (let i = 574; i <= 815; i++) {
    sum1 += i;
}
console.log ('Suma 574..815:', sum1);

// -50 … 50
let sum2 = 0;
for (let i = -50; i <= 50; i++) {
    sum2 += i;
}
console.log ('Suma -50..50:', sum2);

// -70 … 30
let sum3 = 0;
for (let i = -70; i <= 30; i++) {
    sum3 += i;
}
console.log ('Suma -70..30:', sum3);


console.log ('----panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:------');
//pvz.: “abcdef” -> “fedcba”

const teksto = 'mindaugas'
let eilute = '';
for (let i = teksto.length-1; i >= 0; i-- ){
    eilute += teksto[i];
    console.log (eilute);
}


console.log ('----Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:------');


const dalinuIs = 3; //keiciam 5 ir 7 --->gausime reikalingus rezultatus
let vnt = 0;
const a = 0;
const b = 11;
for (let i = 0; i <= 11; i++){
    if (i % dalinuIs === 0) {
        vnt++;
    }
}

const rezultat = `Skaičių intervale tarp ${a} ir ${b}, besidalijančių be liekanos iš ${dalinuIs} yra ${vnt} vienetai.`;

console.log (rezultat)

// 8 - 31

const dalinuIs1 = 7; //keiciam 3 ir 5 --->gausime reikalingus rezultatus
let vnt1 = 0;
const a1 = 8;
const b1 = 31;
for (let i = 8; i <= 31; i++){
    if (i % dalinuIs1 === 0) {
        vnt1++;
    }
}

const rezultat1 = `Skaičių intervale tarp ${a1} ir ${b1}, besidalijančių be liekanos iš ${dalinuIs1} yra ${vnt1} vienetai.`;

console.log (rezultat1)

// -18 - 18
const dalinuIs2 = 3; //keiciam 7 ir 5 --->gausime reikalingus rezultatus
let vnt2 = 0;
const a2 = -18;
const b2 = 18;
for (let i = -18; i <= 18; i++){
    if (i % dalinuIs2 === 0) {
        vnt2++;
    }
}

const rezultat2 = `Skaičių intervale tarp ${a2} ir ${b2}, besidalijančių be liekanos iš ${dalinuIs2} yra ${vnt2} vienetai.`;

console.log (rezultat2)
// rezultatą pateikti tokiu formatu:
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.
