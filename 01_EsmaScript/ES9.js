let obj1 = {
  name:'Camilo',
  lastName:'Lindarte',
  age:'20'
}
let obj2 = {
  addres:'Cra 112f',
  phone:'3115105614',
  code:'12345620'
}

//Desetruturacion
let { lastName, age } = obj1
console.log(lastName)
console.log(age)

//Spread

let obj3 = {...obj1, ...obj2, job:'Ingeniero'}
console.log(obj3)

//Rest
let obj = {
  a:1,
  b:2,
  c:3,
  d:4
}

let {a,b, ...rest} = obj
console.log(rest)