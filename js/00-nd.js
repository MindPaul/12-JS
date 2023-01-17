// Kintamuju inicijavimas
const metai = 2023;
const menuo = 01;
const diena = 17;
console.log (metai);
console.log (menuo);
console.log (diena);

console.log ('----------');

const akys = 'melynos';
const ausis = 'placios';
const nosis = 'trumpa';
console.log (akys);
console.log (ausis);
console.log (nosis);

console.log ('----------');

const alga = [200, 4000, 0, 10, 99];
console.log (alga);
const data = [2001, 1900, 2020, 1930, 2055];
console.log (data);
const valanda = [22, 00, 12, 10, 15];
console.log (valanda);

console.log ('----------');

const vardai = ['Jonas', 'Petras', 'Agne', 'Ignas', 'Aiste'];
console.log (vardai);
const salis = ['Austrija', 'Lenkija', 'Danija', 'Suomija', 'Estija'];
console.log (salis);
const vaisiai = ['obuolys', 'aviete', 'braske', 'mangas', 'arbuzas'];
console.log (vaisiai);


console.log ('----------');

//Veiksmai su kintamaisiais

const suma = metai + menuo + diena;
console.log (suma);

const tekstasSuTarpu = `${akys} ${ausis} ${nosis}`;
console.log (tekstasSuTarpu);

const sumAlga = alga[0] + alga[1] - alga[2] + alga[3] - alga[4];
console.log (sumAlga);
const sumData = data[0] + data[1] - data[2] + data[3] - data[4];
console.log (sumData);
const sumValanda = valanda[0] + valanda[1] - valanda[2] + valanda[3] - valanda[4];
console.log (sumValanda);


const sumVardai =`${vardai[4]}, ${vardai[3]}, ${vardai[2]}, ${vardai[1]}, ${vardai[0]}.`
console.log (sumVardai);
const sumSalis =`${salis[4]}, ${salis[3]}, ${salis[2]}, ${salis[1]}, ${salis[0]}.`
console.log (sumSalis);
const sumVaisiai =`${vaisiai[4]}, ${vaisiai[3]}, ${vaisiai[2]}, ${vaisiai[1]}, ${vaisiai[0]}.`
console.log (sumVaisiai);

console.log ('----------');

//Kintamuju palyginimas

const a = 23;
const b = 12;

if (a > b) {
  console.log ('Pomidoras');
} else {
  console.log ('Bandykite kita karta');
}
if (a < b) {
  console.log ('Pomidoras');
} else {
  console.log ('Bandykite kita karta');
}

if (a === b) {
  console.log ('Pomidoras');
} else {
  console.log ('Bandykite kita karta');
}
if (a !== b) {
  console.log ('Pomidoras');
} else {
  console.log ('Bandykite kita karta');
}

if (a >= b) {
  console.log ('Pomidoras');
} else {
  console.log ('Bandykite kita karta');
}
if (a <= b) {
  console.log ('Pomidoras');
} else {
  console.log ('Bandykite kita karta');
}

console.log ('----------');

const teks1 = 'jsd f2344 sdfsn f, f,gfswefcgdfg s . s d, ,,, dfg'
console.log(teks1.length);
const teks2 = 'jsd dfsdfsn f, f,gffsn f, f,gffsn f, f,gfsd, ,,, dfg'
console.log(teks2.length);

if (teks1.length > teks2.length) {
  console.log ('teks1 didesnis');
} else {
  console.log ('teks2 didesnis');
}
if (teks1.length < teks2.length) {
  console.log ('teks1 mazesnis');
} else {
  console.log ('teks2 mazesnis');
}

if (teks1.length === teks2.length) {
  console.log ('pomidoras');
} else {
  console.log ('bandyk dar karta');
}

if (teks1.length !== teks2.length) {
  console.log ('pomidoras');
} else {
  console.log ('bandyk dar karta');
}

if (teks1.length >= teks2.length) {
  console.log ('teks1 didesnis');
} else {
  console.log ('teks2 didesnis');
}
if (teks1.length <= teks2.length) {
  console.log ('teks1 mazesnis');
} else {
  console.log ('teks2 mazesnis');
}

console.log ('----------');

const sarasas1 = ['sdf', 'dsfewe', 'fwf'];
console.log (sarasas1.length);
const sarasas2 = ['sdf', 'dsfewe', 'fwf','sdf', 'dsfewe', 'fwf'];
console.log (sarasas2.length);