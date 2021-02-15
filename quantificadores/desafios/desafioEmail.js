const texto = `Os e-mails dos convidados são:
- fulano@cod3r.com.br
- xyzw@gmail.com
- beltrano.de.tal@email.com
- uaiSo@mail.gov.br
- montblanc@internet.info
- joao@empresa.info.br
- empresa.boa@mol.ag
- conta_to@hotmail.com.gb`

// console.log(texto.match(/[\w.]+@[0-9a-zA-Z]{3,}\.\w{2,}\.*\w*/g))
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g))