//clase orientada a objetos profundizado en JS
//objeto literal
var pelicula = {
    nombre : 'harry',
    id : 01,
    reproducir(){
        return `Reproduciendo película....${this.nombre}`;
    }
}
//clase es como una plantila (molde) para objetos
//se empieza el nombre de la clase con mayúscula para hacer referencia a que es una clase
class Pelicula{
    //constructor para plantilla
    constructor(nombre,id){
        this.nombre = nombre;
        this.id = id;
    }
    //metodo
    reproducir(){
        return`Reproduciendo... ${this.nombre}`;
    }
}
//HERENCIA 
//palabra reservada extends para heredar de la clase Pelicula
class Serie extends Pelicula{
    constructor(nombre,id,cap){ 
        //se usa super para utilizar lo que se le paso por parámetros, que vamos a usar el nombre y el id que estamos extendiendo de la 
        //clase pelicula
        super(nombre,id)
        this.cap = cap;
    }
    //metodo propio
    reproducirCapitulo(){
        return`Reproduciendo capítulo ${this.cap}...${this.nombre}`;
    }
}
//INSTANCIAMIENTO   
const peliculaUno = new Pelicula('Harry', 1);
const peliculaDos = new Pelicula('Araña', 2);
const SerieUno = new Serie('Dexter', 3,55);
console.log(peliculaUno.reproducir());
console.log(peliculaDos.reproducir());
console.log(SerieUno.reproducirCapitulo());

document.getElementById("mostrar");
function muestra(){
    document.write(pelicula.nombre +"<br/>");
    document.write(pelicula.id);
}

function toque(){
    var pregunta = prompt("¿Qué objeto quieres crear?");
    if(pregunta=="pelicula"){
        nombre=prompt("nombre de la película");
        id=prompt("tu cédula mano");
        const peli1= new Pelicula(nombre,id);
    }
}
/**********************************************************************************************************************/
function capturar(){
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value
    if(nombre =='' || edad ==''){
        alert("alguno de los dos campos están vacíos");
    }else{
        var test = document.getElementById("nombre").value;
        if(!isNaN(test)){
            alert("No se puede introducir numeros en el campo de Nombre");
            reset();
        }else{
        
        //console.log("capturado");
        function Persona(nombre,edad){
            this.nombre=nombre;
            this.edad=edad;
        }
        var nombreCapturar = document.getElementById("nombre").value;
        var edadCapturar = document.getElementById("edad").value;
        
        
        // se pone el nombre de la variable sin el identificador "var" para crear variables globales
        nuevoSujeto = new Persona(nombreCapturar,edadCapturar);
        agregar();
        reset()
    }
    function reset(){
        document.getElementById("nombre").value="";
        document.getElementById("edad").value=""; 
        }
    }
}
var baseDatos=[];
function agregar(){
    baseDatos.push(nuevoSujeto);
    document.getElementById("tabla").innerHTML += '<tr class="row"><td>'+nuevoSujeto.nombre+'</td><td>'+nuevoSujeto.edad+'</td></tr>';
    
}