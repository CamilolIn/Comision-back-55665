const mostrarLista = (arreglo) => {
  if (arreglo.length == 0) {
    return 'Lista Vacia'
  } else {
    console.log(arreglo)
    // for (i = 0; i <= arreglo.length - 1; i++) {
    //   // if (arreglo[i] !== undefined) {
    //     console.log(`Valor ${i} es : ${arreglo[i]}`)
    //   // }
    // }
    arreglo.forEach(element => {
      console.log(element)
    });
    console.log(`La longitud de array es ${arreglo.length}`)
  }
}

console.log(mostrarLista([1, 5, 89, 7, 4, 54]))