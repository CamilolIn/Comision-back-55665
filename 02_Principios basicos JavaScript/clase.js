// class Animal {
//   // Propiedades
//   // name = "Garfield";
//   // type = "cat";
//   constructor(name, type){
//     this.name = 'Tony'
//     this.type = 'Gato'
//   }
   
//   static nameStatic = 'correa'
//   static typeStatic = 'perr'

//   // Métodos
//   hablar() {
//     return "Odio los lunes."
//   }

//   correr() {
//     return `esta corriendo ${this.name}`
//   }
// }

// let animal1 = new Animal('Titi', 'Perro')
// console.log(animal1.nameStatic)

//Jewrcico
class Contador{
  constructor(nombre){
    this.nombre =nombre
    this.contador = 0
  }

  static contadorGlobal = 0

  getResponsable(){
    return this.nombre
  }

  contar(global){
    if(global){
      this.contadorGlobal++
    }
    this.contador++
  }

  getCuentaIndividual(){
    return this.contar()
  }

  getCuentaGlobal(){
    return this.contar('global')
  }
}

console.log(Contador.contadorGlobal)

let contador1 = new Contador('Camilo')
contador1.contar()
contador1.contar()
contador1.contar()
contador1.contar()

console.log(contador1.getResponsable())
console.log(Contador.contadorGlobal)