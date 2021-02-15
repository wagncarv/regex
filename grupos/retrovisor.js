const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteúdo</div>'
// console.log(texto1.match(/<(\w+)>.*<\/\w+>/g)) //sem usar retrovisor
// console.log(texto1.match(/<(\w+)>.*<\/\1>/gi)) //usando retrovisor

const texto2 = 'Lentamente é mente muito lenta.'
console.log(texto2.match(/(lenta)(mente).*\2.*\1\./gi))
console.log(texto2.match(/(?:lenta)(mente).*\1/gi)) //evitar que valor seja gravado no retrovisor com ?:

console.log(texto2.match(/(lenta)(mente)/gi))
console.log(texto2.match(/(lenta)(mente)?/gi))
console.log(texto2.replace(/(lenta)(mente)/gi, '$2'))