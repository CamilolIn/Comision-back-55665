// const numbers = [1, 2, 3];
// const names = ['Maria', 'Cami', 'Juli'];

// // console.log(...numbers, 4 , 8, 9 , 5)

// let arrNew = [...names, ...numbers]
// console.log(arrNew)

let empleados = {
  empl1: 'Juli',
  empl2: 'Maria',
  empl3: 'Andrea'
} 
// let jefes = {
//   jefe1: 'Juli',
//   jefe2: 'Maria'
// } 
// console.log({...empleados, ...jefes})


let empleados = {
  empl1: 'Juli',
  empl2: 'Maria',
  empl3: 'Andrea'
} 

let {empl1, empl3, ...rest} = empleados
console.log(rest)