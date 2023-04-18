
var TextoEntrada = document.getElementById('Entrada');
var TextoSalida = document.getElementById('Salida');
const botonCodificar = document.getElementById("Codificar");
const botonDecodificar = document.getElementById("Decodificar");
const borrar = document.getElementById("Limpiar");
const copiar = document.getElementById("Copiar");
const pegar = document.getElementById("Pegar");
var texto2 = [];
var resultado = "";

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
        console.log('funca');
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
});

//proceso para codificar texto
function CodificarTexto(texto) {

    for (let index = 0; index < TextoEntrada.value.length; index++) {

         //condicional para ignorarletras que no sean del alfabeto
        if (TextoEntrada[index] != "a" && TextoEntrada[index] != "e"   
        && TextoEntrada[index] != "i" && texto[index] != "o" 
        && texto[index]!= "u" ) {
            texto2[index] = texto[index];
        }

        //condicional para modificar las letras del alfabeto
        if (TextoEntrada.value[index]=="a") {
           texto2[index] = "ai";    
        }
        if (TextoEntrada.value[index]=="e") {
           texto2[index] = "enter";
        }
        if (TextoEntrada.value[index]=="i") {
           texto2[index] = "imes";
        }
        if (TextoEntrada.value[index]=="o") {
          texto2[index] = "ober";
        }
        if (TextoEntrada.value[index]=="u") {
         texto2[index] = "ufat";
        }
    }
    resultado = texto2.toString();      //convertir array a cadena de texto
    resultado = resultado.replaceAll(",","");   //eliminar las comas generadas por el arreglo
}

//proceso para decodificar texto
function DecodificarTexto(texto) {
    resultado = TextoEntrada.value.toString();  //covertir el texto de entrada en una cadena de texto
    //funcion para remplazar caracteres
    resultado = resultado.replaceAll("ai","a");
    resultado = resultado.replaceAll("enter","e");
    resultado = resultado.replaceAll("imes","i");
    resultado = resultado.replaceAll("ufat","u");
    resultado = resultado.replaceAll("ober","o");
}

