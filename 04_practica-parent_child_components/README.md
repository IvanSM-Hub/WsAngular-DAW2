## Enunciado

Para este caso vamos a coger como base el ejemplo anterior **02_practica-CRUD** y lo vamos a adaptar a un modelo de padres e hijos, en vez de tenerlo todo en un solo componente.

Para ello haremos el componente **heroes** y el componente **heroe**, y repartiremos en cada uno de ellos la funcionalidad del ejemplo anterior. El componente **heroe** pintará únicamente el héroe que
le pase el componente **heroes**.

El componente héroe debe de tener un atributo decorado con **@Input** para poder recibirlo.

De esta manera, podremos usar el componente **heroe** dentro del componente **heroes**, pero además podremos usarlo en cualquier otra parte de nuestra aplicación de manera independiente.

Por otro lado, tenemos también un componente llamado **cvariable** cuya función es hacer de cabecera y de pie de página al mismo tiempo. Como queremos que el texto sea variable, el componente tendrá
un atributo **@Input** que recogera datos del componente padre **app**.

## Bibliografía

- <https://angular.io/guide/inputs-outputs>

