function suma(a, b) {
  return a + b
}

console.log(suma(4, 5))

const suma2 = (a, b) => {
  return a + b
}

console.log(suma2(4, 5))

//Ejercicio
// Crear un a funcion lluvio , recibe un argumento booleanno, se imprimira un string 'esta lloviendo' en caso de que el parametro sea true,
// En caso contrario se imprimira 'No esta lloviendo' 
const lloviendo = (estaLloviendo) => {
  if (estaLloviendo) {
    return 'Esta lloviendo'
  } else {
    return 'No esta lloviendo'
  }
}



// Crear una funcion llamada 'Calcular' la funcion contendra 3 parametros x, y, z, de tipo number, la funcion retornara 
// el resultado de sumar x con y y multiplicado por z
const calcular = (x, y, z) => {
  let suma = x + y
  let res = suma * z
  return res
}
console.log(calcular(2,2,2))
