const fs = require("fs");
const { DefaultDeserializer } = require("v8");

fs.readFile("./test.txt", "utf-8", (err, data) => {
  if (err) {
    return "Error en la lectura";
  } else {
    console.log(data);
  }
});

fs.writeFile("./test.txt", "Contenido nuevo", "utf-8", (err) => {
    if(err){
        return "Error en al escribir"
    }else{
        console.log("Se escribio correctamente")
    }
})

fs.unlink("./test.txt", (err) => {
    if(err){
        return "Error en al Borrar"
    }else{
        console.log("Se Borro correctamente")
    }
})


