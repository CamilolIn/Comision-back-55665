console.log('Hola JS del cliente')

fetch('http://localhost:8080/home')
      .then(response => response.json())
      .then(json => {
        console.log(json)


        document.getElementById('box').innerHTML = json.data
      })
        
        
        