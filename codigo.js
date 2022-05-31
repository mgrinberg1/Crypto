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
const form=document.querySelector("#form-search");

document.addEventListener('FOMContentLoaded', () =>{consultarCriptos();
   form.addEventListener('submit',submitForm);
   moneda.addEventListener('change', getValue);
   criptomoneda.addEventListener('change', getValue);
})

function submitForm(e){
   e.preventDefault();
   const {moneda, criptomoneda} = objBusqueda;

   console.log(moneda);
   console.log(criptomoneda);
}

function getValue(e){
   objBusqueda[e.target.name]=e.target.value;
   console.log(e.target.value);
   console.log(e.target.name);
}

function consultarCriptos(){
   const url='https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
   fetch(url)
   .then(respuesta => respuesta.json())
   .then(respuestaJson => {
      selectCrriptos(respuestaJson.Data);
      console.log(respuestaJson);
   })
   .catch(error=>console.log(error));
}

function selectCriptos(criptos){
   criptos.forEach(cripto => {
      const{FullName, Name}=cripto.CoinInfo;
      const option=document.createElement("option");
      option.value = Name;
      option.textContent=FullName;
      criptomoneda.appendChild(option);
   });
}


var day = document.getElementById('day')
var second = document.getElementById('second')
var hour = document.getElementById('hour')
var minute = document.getElementById('minute')

var lastbtc = new Date()
lastbtc.setFullYear(2140, 02, 20);
lastbtc.setHours(20);
lastbtc.setMinutes(30);

function compararFechas(){
   var now = new Date();

   var distance = lastbtc - now;

   var dias = Math.floor(distance / (1000 * 60 * 60 * 24));
   var horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var segundos = Math.floor((distance % (1000 * 60)) / 1000);
   
   day.innerText = dias;
   hour.innerText = horas;
   minute.innerText = minutos;
   second.innerText = segundos;
}

setInterval(
   function() { compararFechas(); } , 10
)