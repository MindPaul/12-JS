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

console.clear();
console.log ('----panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:------');
//pvz.: “abcdef” -> “fedcba”

console.clear();

const teksto = 'mindaugas'
let eilute = '';
for (let i = teksto.length-1; i >= 0; i-- ){
    eilute += teksto[i];
    console.log (eilute);
}
console.clear();

console.log ('----Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:------');

// 0 - 11
let sum4 = 0;

for (let i = 0; i <= 11; i++){
    sum4 = i;
    let sk3 =sum4/3;
    if (sk3 )
    console.log (sk3);
}


// 8 - 31
// -18 - 18
// rezultatą pateikti tokiu formatu:
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.
