// Variable
// Valores que pueden cambiar su valor a lo largo de codigo
// let, var, const


//Tipo de datos
// Primitivos, Objetos
// Primitivos
// Numericos>Number, BigInt
// String
// Booleanos
// Null
// Undefined

//Declaracion de Variables
//var -> Variable para JavaScript
var variable = 'hola'
// let -> Variable para javaScript , se usa cuando quiero decalrar dentro de un bloque de codigo
// if(true){
//   let res;
//   return res
// }
// const-> Valor que no puede cambiar alolargo del codigo
const constatn = 'hola'

// Let y const son actial;izacion del ecmaScript ES6 del 2015


// Ejempllo con let y var
let i = 0
// console.log(i)
// function foo(){
//   i=1
//   if(true){
//     console.log(i)
//   }
// }
// foo()

function foo(){
  var i=0
  if(true){
    var i = 1
    console.log(i)
  }
  console.log(i)
}
// foo()

function foo2(){
  if(true){
    let i = 1
    // i = 6
    // console.log(i)
  }
   console.log(i)
}
// foo2()

//Mutabilidad
// const user = 'camilo'
// user='jairo'
// console.log*(user)

const user = {
  name:'camilo'
}
user.name = 'jairo'
// console.log(user)