const texto1 = 'De longe avistei o fogo e uma pessoa gritando: FOGOOOOOOO'
const texto2 = 'There is a big fog in NYC'
const texto3 = 'Os números 0123456789.'

//+ -> um ou mais
const regex = /fogo+/gi
// console.log(texto1.match(regex))
// console.log(texto2.match(regex))

// console.log(texto3.match(/[0-9]/g))
// console.log(texto3.match(/[0-9]+/g))
console.log(texto3.match(/\d+/g))