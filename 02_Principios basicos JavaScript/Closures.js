// Patron de javaScript
// es una funcion qeu retorna otra funcion

const calculadora = function(){
  let _contador = 0

  function suma(a, b){
    return a + b
  }
  function resta(a, b){
    return a - b
  }

  return {
    suma,
    resta,
    _contador
  }
}

let closure = calculadora()
console.log(closure.suma(7,5))
console.log(closure.resta(7,5))
console.log(closure._contador)