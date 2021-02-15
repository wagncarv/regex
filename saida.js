var out = document.getElementById('out')
const texto = 'Você precisa responder sim, não ou não sei'
// console.log(texto.match(/sim|não|sei/g)) //alternativa (OU)
out.innerHTML =  texto.match(/sim|não|sei/g)