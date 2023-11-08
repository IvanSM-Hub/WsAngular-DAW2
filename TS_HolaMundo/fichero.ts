
//Creamos la variable saludo que contendrá el string de hola mundo!, pero especificamos el tipo de la variable.
let saludo:string = 'Hola Mundo!';
console.log(saludo);

//creamos un nodo H1
let cabeceraH1 = document.createElement('h1');

//asignamos a cabeceraH1 la variable saludo
cabeceraH1.textContent = saludo;

//colocamos cabeceraH1 dentro del body
document.body.appendChild(cabeceraH1);