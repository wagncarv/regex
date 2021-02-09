//
//   metacaractere    Nome                   Significado
//    .               Ponto                   qualquer caractere
//    []              Conjunto                conjunto de caracteres permitidos
//    [^]             Conjunto negado         conjunto de caracteres proibidos

//
//Metacaracteres - quantificadores
// ?  Opcional  zero ou um
// *  asterisco  zero ou mais
// +  mais  um ou mais
//  {n, m} chaves  de n até m

//
// Metacaracteres - Âncoras
// ^  início de linha
// $  cifrão  fim de linha
// \b  borda início ou fim de palavra


//
// Outros metacaracteres para// \ escape uso de metecaractere como literal
// |  OU  operação de OU
// ()  grupo  define um grupo
// \1...\9  retrovisor  resgata grupos já definidos

//
//
const texto = '1,2,3,4,5,6,a.b c!d?e'
const regexPonto = /\./g
console.log(texto.split(regexPonto))

const regexSimbolos = /,|\.|\?|!| /g
console.log(texto.split(regexSimbolos))