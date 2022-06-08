//html y css son lenguajes de maquetado, JS es lenguaje de programacion
//resolver problemas logicos o matematicos
// la programacion es una herramienta para resolver problemas
//pensamiento computacional:
// descomposicion: descomponer el problema
//patrones: similitudes
// abstraccion: achicar el problema, eliminar lo superfluo
// algoritmos: pasos para resolver el problema
 /*variables) espacio en memoria donde se almacena
   un valor
   que es? un cajon
   como armo una variable?
   let nombreDeLaVariable="valor"
   let nombre= "MATIAS"
   = es el operador de asignación
   var << para crear variables

   Tipos de datos:
numerico: enteros o con coma (integer, float)
strings: cadena de caracteres
booleano: true or false, 0 o 1
+ > suma o concatena
NaN = Not a Number
JS usa camelCase
las constantes se escriben en MAYUSCULA

Division:
/ >> cociente
% >> resto
= asigna un valor a una variable
== pregunta si el valor coinciden
=== pregunta si el valor y el tipo de dato coincide

and = &&
or = |

!true = false
!false = true
   */
const form=document.querySelector("#form-search");
const moneda=document.querySelector("#moneda");
const criptomoneda=document.querySelector("#criptomonedas");
var precio = document.getElementById("main-price")

document.addEventListener('FOMContentLoaded', () =>{consultarCriptos(moneda,criptomoneda);
})

var objBusqueda=[]

function submitForm(e){
   const {moneda, criptomoneda} = objBusqueda;
   consultarCriptos(objBusqueda.moneda,objBusqueda.criptomoneda)
}

function getValueofmoneda(e){
   console.log(e.target);
   objBusqueda["moneda"]=document.getElementById("moneda").value;
   console.log(objBusqueda);
}

function getValueofcriptomoneda(e){
   console.log(e.target);
   objBusqueda["criptomoneda"]=document.getElementById("criptomoneda").value;
   console.log(objBusqueda);
}

function consultarCriptos(moneda,criptomoneda){
   const url=`https://min-api.cryptocompare.com/data/price?fsym=${criptomoneda}&tsyms=${moneda}`;
   fetch(url)
   .then(respuesta => respuesta.json())
   .then(respuestaJson => {
      document.getElementById('main-price').innerText=respuestaJson[moneda];
      console.log(respuestaJson);
   })
   .catch(error=>console.log(error));
}







var lastbtc = new Date()
lastbtc.setFullYear(2140, 02, 20);
lastbtc.setHours(00);
lastbtc.setMinutes(00);

function compararFechas(){
   var now = new Date();

   var distance = lastbtc - now;
   var dias = Math.floor(distance / (1000 * 60 * 60 * 24));
   var horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var segundos = Math.floor((distance % (1000 * 60)) / 1000);
  
   document.getElementById('day').innerText = dias;
   document.getElementById('hour').innerText = horas;
  document.getElementById('minute').innerText = minutos;
  document.getElementById('second').innerText = segundos;
}

setInterval(
   function() { compararFechas(); } , 1000
)

window.onload = function () {
   compararFechas();
};