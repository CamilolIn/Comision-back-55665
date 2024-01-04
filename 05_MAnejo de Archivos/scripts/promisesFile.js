const fs = require("fs")

// fs.promises.readFile("./testfdsfsd.txt", "utf-8")
// .then((data)=> {
//     try{
//         console.log(data)
//     }catch{
//         console.log("Error")
//     }
// }).catch((err)=> {
//     throw "fhghf"
// })

// Sync / await

const save = async () => {
    try{
        let read =  await fs.promises.readFile("./test.txt", "utf-8")
        console.log(read)
    }catch(err){
        console.log("Error al leer!!")
    }

}

save()

