let notas = {
  nota1:4, //llave //Valor
  nota2:8,
  nota3:7,
  nota4:9,
  nota5:1,
  nota6:6,
  nota7:2,
}

// let llaveValor = Object.entries(notas)
// console.log(llaveValor)
// let llaves = Object.keys(notas)
// console.log(llaves)

let valores = Object.values(notas)
//console.log(llaves)

let sumaNotas = valores.reduce((vInit, vAcum) => {
  return vInit+vAcum
})

console.log(sumaNotas)