const texto = `CPF dos aprovados:
-600.567.890-12
-765.998.345-23
-080.467.790-15
-761.908.345-00
-070.567.890-20
-065.008.335-11
-081.407.780-22
-777.900.322-89
`

console.log(texto.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g))