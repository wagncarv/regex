const texto = 'ABC [abc] a–c 1234'

console.log(texto.match(/[a-c]/g))
console.log(texto.match(/a–c/g))
console.log(texto.match(/[A-z]/g))

//TEM que respeitar a ordem da tabela ASCII / UNICODE