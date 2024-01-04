console.log("start")

setTimeout(()=> {
    console.log("Timeout !")
}, 1000)

Promise.resolve("Promise")
.then(res => console.log(res))

console.log("End")