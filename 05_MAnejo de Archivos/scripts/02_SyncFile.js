const { deepStrictEqual } = require("assert")
const fs = require("fs")




// try{
//     let readFile = fs.readFileSync("./test.txt", {encoding:"utf-8"})
//     console.log(readFile)
// }catch(err){
//     console.log("Errore al leer")
// }

try{
    fs.unlinkSync("test.txt")
    console.log("Archivo eliminado")
}catch(err){
    console.log("Error al borrar archivo")
}


// fs.writeFileSync("./test.txt", "Nuevo comentario dentroooooooo del txt", {encoding:"utf-8"} )

// let obj = [
//     {
//       noma: "camilo",
//       lastName: "Lindarte",
//     },
//     {
//       noma: "camilo",
//       lastName: "Lindarte",
//     },
//     {
//       noma: "camilo",
//       lastName: "Lindarte",
//     },
//   ];

// // fs.writeFileSync("./text.json", JSON.stringify(obj), {encoding:"utf-8"})
// fs.appendFileSync("./test.txt", "Textro añadido\n", {encoding:"utf-8"})

