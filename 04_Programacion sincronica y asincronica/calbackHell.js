const lugaresVisitados = []
 
function irDePaseo() {
 
	setTimeout(function() {
		lugaresVisitados.push('Salta');
		
		setTimeout(function() {
			lugaresVisitados.push('Cordoba');
			
			setTimeout(function() {
				lugaresVisitados.push('Jujuy');
				
				setTimeout(function() {
					lugaresVisitados.push('Tierra del fuego');
					console.log(lugaresVisitados)
				},1000);
			},1000);
		},1000);
	},1000);
}
 
irDePaseo();// OUTPUT : Salta, Cordoba, Jujuy, Tierra del fuego
//console.log(lugaresVisitados)