console.log(process.cwd())
console.log(process.pid)
console.log(process.env)
console.log(process.argv)
require('dotenv').config(
  {path: '.env.prod'}
)
const express = require('express')
const {fork} = require('child_process')

// // console.log(process.version)
console.log(process.env.PORT)
//console.log(process.argv.slice(2))

const { Command } = require('commander');
const path = require('path')

const program = new Command()

program
  .option('-d', 'Variable para hacer debug', false)
  .option('-p <port>', 'Puerto delservidor', 8080)
  .option('--mode <mode>', 'Modo de trabajo ', 'produccion')
  .requiredOption('-u <user>', 'Usuario utilizando el APP ', 'No se a declarado un usuario')
  .option('-l, --letters [letters...]', 'Especificar letra')


  program.parse()

  console.log('Options: ', program.opts())
  // console.log(program.args)

  // node index.js -d -p 3000 --mode dev -u root --letters a b c
//     //node index.js -p 3000 --mode dev -u root 2 a c --letters a b c

process.on('exit', (x)=>{
  console.log('Se ejecuta antes de salir del proceso ', x)
})
process.on('uncaughtException', (exe)=>{
  console.log('Atrapa las expeciones no controladas', exe)
})
process.on('message', ()=>{
  console.log('Se ejecuta cuando reciba un mensaje de otro proceso')
})

// console.logs('jhfghfd')
// process.exit(1)

function arrNum(nums){
  for(let i = 0; i<nums.length; i++){
    if(typeof nums[i] !== 'number'){
      process.exit(4)
    }
  }
}

//arrNum([1, 2, 4, true])

const app = express()

function operacionCompleja(){
  let result = 0

  for(let i = 0; i<5e9; i++){
    result+=i
  }

  return result
}

app.get("/suma", (req, res)=>{
  const resp = operacionCompleja()
  res.send('Result: ' + resp)
  // const child = fork('./operacionCompleja')
  // child.send('Inicia la operacion')
  // child.on('message', (resp)=>{
  //   res.send('Result: ' + resp)
  // })
})


app.get("/home", (req, res)=>{
  res.send('Hola mundo ')
})
let visitas = 0
app.get("/visitas", (req, res)=>{
  visitas++
  res.send('Haz vistado la pagina ' + visitas + ' vecees')
})
app.listen(8080, ()=>{
  console.log('Server ok')
})

 