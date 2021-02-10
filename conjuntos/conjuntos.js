
// definir um conjunto []
const texto = '1,2,3,4,5,6,a.b c!d?e[f'
const regexPares = /[02468]/g
console.log(texto.match(regexPares))

const texto2 = 'João não vai programar na windows'
const regexComESemAcento = /n[aã]/g
console.log(texto2.match(regexComESemAcento))


