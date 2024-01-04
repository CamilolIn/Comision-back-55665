// Tradicionales
// function suma(a, b){
//   return a + b
// }
// function suma2(a, b = 10){
//   return a + b
// }

// console.log(suma2(7, 45))

//Arrow Funtion
// const suma = (a, b = 20) =>{
//   return a + b
// }
// console.log(suma(7))

 // Funciones anonimas
( function(a,b){
  console.log(a + b)
 })(4, 5)

 let suma = function(a,b){
  return (a + b)
 }

 console.log(suma(7 ,8))