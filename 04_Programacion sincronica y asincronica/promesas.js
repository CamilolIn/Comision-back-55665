// const sumar = (a, b)=>{
//   return new Promise((resolve, reject)=>{
//     if(a <= 0 && a <= 0){
//       reject('La suma no se puede hacer, su resultado siempre sera cero')
//     }
//     resolve(a + b)
//   })
// }

// const funcionTestPromise = async ()=>{
//   try{
//     let res = await sumar(4, 5)
//     console.log(res)
//   }catch(err){
//     console.log(err)
//   }

// }


// funcionTestPromise()

let datos = [
  {
    name: 'camilo',
    lastname: 'Lindarte'
  },
  {
    name: 'Viviana',
    lastname: 'Lindarte'
  },
  {
    name: 'Carlos',
    lastname: 'Lindarte'
  }
]

const getDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(datos)
    }, 1500)
  })
}

// getDatos().then(res =>{
//   console.log(res)
// }).catch(err =>{
//   console.log(err)
// })

