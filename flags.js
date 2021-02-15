// g - global
// i - ignore case

// const texto = 'Carlos assinou o abaixo-assinado'
// console.log(texto.match(/C|ab/))
// console.log(texto.match(/c|ab/i))
// console.log(texto.match(/ab|c/gi))
// console.log(texto.match(/ab|c/i))

const texto = 'Casa bonita é casa amarela da esquina com a Rua ACASALAR.'
const regex = /a c/gi
console.log(texto.match(regex))