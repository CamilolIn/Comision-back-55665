show dbs : Muestra las bases de datos existentes.
use <db name>: Crea una nueva base de datos (en caso de no existir) y se posiciona sobre ella 
db: Muestra en qué base de datos estamos posicionado.
show collections: Muestra todas las colecciones disponibles en la base de datos posicionada.
db.createCollection(name): Crea una colección en la base de datos posicionada.
db.dropDatabase(): Elimina la base de datos actual.
db.collection.drop(): Elimina la colección de la base de datos posicionada

##INSERTAR Y BUSCAR

db.collection.insertOne(doc) : Agrega un nuevo documento a la colección seleccionada.
db.collection.insertMany(docs): Agrega múltiples documentos a la colección seleccionada (dado un arreglo de documentos).
db.collection.findOne(opt): Busca un elemento que cumpla con los criterios de búsqueda (opt), devuelve el primer documento que cumpla con dicho criterio.
db.collection.find(opt):Devuelve todos los documentos que cumplan con dicho criterio. 
db.collection.find(opt).pretty(): Añadido para hacer más presentables los resultados de un find().

## CONTAR
db.collection.estimatedDocumentCount() Cuenta el estimado más próximo  al número de documentos según su metadata.
db.collection.countDocuments(opt) Cuenta los documentos que cumplan con el criterio definido en las opciones (opt).

## FILTROS
$and : Realiza operación AND -> sintaxis: {$and: [ {},{} ] }
$or : Realiza operación OR -> sintaxis: {$or: [ {},{} ] }
$lt : Coincide con valores que son menores que un valor especificado.
$lte : Coincide con valores menores o iguales a un valor especificado.

$gt : Coincide con valores mayores a un valor especificado.
$gte : Coincide con valores mayores o iguales a un valor especificado.
$ne : Coincide con valores que no son iguales a un valor especificado.
$eq : Selecciona los documentos que son iguales a un valor especificado. {year: {$eq : 2004}}

$exists : Selecciona los documentos según la existencia de un campo.
$in : Selecciona los documentos especificados en un array. 
sintaxis: {key:{$in: [array of values] } }
$nin : Coincide con ninguno de los valores especificados en un array.

$size : Coincide con el número de elementos especificados.
$all : Coincide con todos los valores definidos dentro de un array.
$elemMatch : Coincide con algún valor definido dentro del query.

## FILTROS AVANZADAS
db.coll.distinct( val )
devuelve un array con los distintos valores que toma un determinado campo en los documentos de la colección.
db.coll.find({doc.subdoc:value})
Se utiliza para filtrar subdocumentos.
db.coll.find({name: /^Max$/i})
filtra utilizando expresiones regulares

## PROYECCIONES
db.collection.find().sort({val_A:1,val_B:-1})
skip(offset)
.limit(num) 
 ObjectId("64938d2414b43a9c2b8c17bd")
 ObjectId("64938dfb14b43a9c2b8c17be")

## UPDATE
 db.collection.updateOne(
   <query>,
   { $set: { status: "D" }, $inc: { quantity: 2 } },
   ...
)