const texto = '<div>Conteúdo 01</div><div>Conteúdo 02</div>'

//quantificadores são gulosos (greedy)
// console.log(texto.match(/<.+>.+<\/.+>/g))
console.log(texto.match(/<div>.+<\/div>/g))
console.log(texto.match(/<div>.*<\/div>/g))
console.log(texto.match(/<div>.{0,100}<\/div>/g))


//quantificadores não gulosos
console.log(texto.match(/<div>.+?<\/div>/g))