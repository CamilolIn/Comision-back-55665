function testCallBack(array, callBack){
  array.push('Camilo')
  callBack()
}

function mesagge(){
  console.log('Se modifico el array')
}

testCallBack([], mesagge)

function calculadora(num1, num2, cb){
  
  console.log(cb(num1, num2))
}

function suma(a, b){
  return a + b
}

calculadora(4,9, suma)