<<<<<<< HEAD
var TextoEntrada = document.getElementById('Entrada');
var TextoSalida = document.getElementById('Salida');
const botonCodificar = document.getElementById("Codificar");
const botonDecodificar = document.getElementById("Decodificar");
const borrar = document.getElementById("Limpiar");
const copiar = document.getElementById("Copiar");
const pegar = document.getElementById("Pegar");
var texto2;
var resultado = "";
let letras = ["a","e","i","o","u"];
let cambio = ["ai","enter","imes","ober","ufat"];

function mostrar() { //muestra el Textarea donde se imprime el texto codificado/decodificado y muestra el boton copiar
    document.getElementById("Sin-Texto").style.display = "none";
    document.getElementById("Copiar").style.display = "initial";
    document.getElementById("Salida").style.display = "initial";
}

copiar.addEventListener("click", () => {    //boton para copiar texto
    // el método select es utilizado para seleccionar el contenido de un campo de texto
    TextoSalida.select();
        // el método document.execCommand("copy") copia el texto seleccionado al portapapeles
        let exito = document.execCommand("copy");
});
 
pegar.addEventListener("click", () => {
    leerPortapapeles();
    async function leerPortapapeles() {
        try {
            const text = await navigator.clipboard.readText()
            document.getElementById("Entrada").value = text;
            console.log('Texto del portapapeles:', text)
          } catch (err) {
            console.error('Error al leer del portapapeles:', err)
          }
      }
});

botonCodificar.addEventListener("click",function(){     //boton para codificar
    CodificarTexto(TextoEntrada.value);
    document.getElementById("Salida").innerHTML = resultado;
    mostrar();
});

botonDecodificar.addEventListener("click",function(){   //boton para decodificar
    DecodificarTexto(TextoEntrada);
    document.getElementById("Salida").innerHTML = resultado;
    mostrar();
});

borrar.addEventListener("click",function(){      // boton para borrar textos
    document.getElementById("Salida").innerHTML = null;
    document.getElementById("Entrada").innerHTML = null;
    document.getElementById("Sin-Texto").style.display = "initial";
    document.getElementById("Salida").style.display = "none";
    document.getElementById("Copiar").style.display = "none";
    texto2 = "";
});

//proceso para codificar texto
function CodificarTexto(texto) {
    texto2 = [];
    //remplazar el contenido del texto 
    for (let index = 0; index < TextoEntrada.value.length; index++) {
        texto2[index] = texto[index]; // ingresa letra por letra del texto al array
        //condicional para modificar las letras del alfabeto
        for (let i = 0; i <= letras.length; i++) {
            if (TextoEntrada.value[index]==letras[i]) {
                texto2[index] = cambio[i];
             }
        }
    }
    resultado = texto2.toString();      //convertir array a cadena de texto
    resultado = resultado.replaceAll(",","");   //eliminar las comas generadas por el arreglo
}

//proceso para decodificar texto
function DecodificarTexto(texto) {
    resultado = TextoEntrada.value.toString();  //covertir el texto de entrada en una cadena de texto
    for (var i = 0; i < letras.length; i++){
        resultado = resultado.replaceAll(cambio[i],letras[i]);
    }
=======
var TextoEntrada = document.getElementById('Entrada');
var TextoSalida = document.getElementById('Salida');
const botonCodificar = document.getElementById("Codificar");
const botonDecodificar = document.getElementById("Decodificar");
const borrar = document.getElementById("Limpiar");
const copiar = document.getElementById("Copiar");
const pegar = document.getElementById("Pegar");
var texto2;
var resultado = "";
let letras = ["a","e","i","o","u"];
let cambio = ["ai","enter","imes","ober","ufat"];

function mostrar() { //muestra el Textarea donde se imprime el texto codificado/decodificado y muestra el boton copiar
    document.getElementById("Sin-Texto").style.display = "none";
    document.getElementById("Copiar").style.display = "initial";
    document.getElementById("Salida").style.display = "initial";
}

copiar.addEventListener("click", () => {    //boton para copiar texto
    // el método select es utilizado para seleccionar el contenido de un campo de texto
    TextoSalida.select();
        // el método document.execCommand("copy") copia el texto seleccionado al portapapeles
        let exito = document.execCommand("copy");
});
 
pegar.addEventListener("click", () => {
    leerPortapapeles();
    async function leerPortapapeles() {
        try {
            const text = await navigator.clipboard.readText()
            document.getElementById("Entrada").value = text;
            console.log('Texto del portapapeles:', text)
          } catch (err) {
            console.error('Error al leer del portapapeles:', err)
          }
      }
});

botonCodificar.addEventListener("click",function(){     //boton para codificar
    CodificarTexto(TextoEntrada.value);
    document.getElementById("Salida").innerHTML = resultado;
    mostrar();
});

botonDecodificar.addEventListener("click",function(){   //boton para decodificar
    DecodificarTexto(TextoEntrada);
    document.getElementById("Salida").innerHTML = resultado;
    mostrar();
});

borrar.addEventListener("click",function(){      // boton para borrar textos
    document.getElementById("Salida").innerHTML = null;
    document.getElementById("Entrada").innerHTML = null;
    document.getElementById("Sin-Texto").style.display = "initial";
    document.getElementById("Salida").style.display = "none";
    document.getElementById("Copiar").style.display = "none";
    texto2 = "";
});

//proceso para codificar texto
function CodificarTexto(texto) {
    texto2 = [];
    //remplazar el contenido del texto 
    for (let index = 0; index < TextoEntrada.value.length; index++) {
        texto2[index] = texto[index]; // ingresa letra por letra del texto al array
        //condicional para modificar las letras del alfabeto
        for (let i = 0; i <= letras.length; i++) {
            if (TextoEntrada.value[index]==letras[i]) {
                texto2[index] = cambio[i];
             }
        }
    }
    resultado = texto2.toString();      //convertir array a cadena de texto
    resultado = resultado.replaceAll(",","");   //eliminar las comas generadas por el arreglo
}

//proceso para decodificar texto
function DecodificarTexto(texto) {
    resultado = TextoEntrada.value.toString();  //covertir el texto de entrada en una cadena de texto
    for (var i = 0; i < letras.length; i++){
        resultado = resultado.replaceAll(cambio[i],letras[i]);
    }
>>>>>>> 6da3565efa7b4e7970032d84012c4e414f670bf0
}