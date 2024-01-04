// let obj = {
//   name: 'Camilo',
//   lastName: 'Lindarte',
//   age: 45
// }

// let obj1 = Object.entries(obj)
// console.log(obj1)

// let obj2 = Object.keys(obj)
// console.log(obj2)

// let obj3 = Object.values(obj)
// console.log(obj3)

let ventasMounth = {
  venta1: 357,
  venta2: 456,
  venta3: 878,
  venta4: 654,
  venta5: 654,
}
let arrVentas = Object.values(ventasMounth)
console.log(arrVentas)
let letVentPr = arrVentas.reduce((valorActual, valorAcumulado) => {
  return valorActual + valorAcumulado
})
console.log(letVentPr)
console.log(letVentPr/arrVentas.length)