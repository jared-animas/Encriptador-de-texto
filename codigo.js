var TextoEntrada = document.getElementById("Entrada");
var TextoSalida = document.getElementById("Salida");
const botonCodificar = document.getElementById("Codificar");
const botonDecodificar = document.getElementById("Decodificar");
const borrar = document.getElementById("Limpiar");
const copiar = document.getElementById("Copiar");
const pegar = document.getElementById("Pegar");
let letras = [ "e","i", "a", "o", "u"];
let letras2 = [/e/g,/i/g, /a/g, /e/g, /o/g, /u/g];
let cambio = ["enter","imes", "ai", "ober", "ufat"];

function mostrar() {// muestra el Textarea donde se imprime el texto codificado/decodificado y muestra el boton copiar
  if (TextoEntrada.value.length != 0) {
    document.getElementById("Sin-Texto").style.display = "none";
    document.getElementById("Copiar").style.display = "initial";
    document.getElementById("Salida").style.display = "initial";
  } else {
    document.getElementById("Sin-Texto").style.display = "initial";
    document.getElementById("Copiar").style.display = "none";
    document.getElementById("Entrada").style.display = "initial";
  }
}

copiar.addEventListener('click', () => {// boton copiar
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(TextoSalida.innerText);
    } else {
        alert('Tu navegador no soporta esta funcion');
    }
})
pegar.addEventListener("click", () => { //boton pegar
  leerPortapapeles();
  async function leerPortapapeles() {
    try {
      const text = await navigator.clipboard.readText();
      document.getElementById("Entrada").value = text;
      console.log("Texto del portapapeles:", text);
    } catch (err) {
      console.error("Error al leer del portapapeles:", err);
    }
  }
});

botonCodificar.addEventListener("click", function () {// boton para codificar
  document.getElementById("Salida").innerHTML = CodificarTexto(TextoEntrada.value);
  mostrar();
});

botonDecodificar.addEventListener("click", function () {// boton para decodificar
  document.getElementById("Salida").innerHTML = DecodificarTexto(TextoEntrada.value);
  mostrar();
});

borrar.addEventListener("click", function () {// boton para borrar textos
  document.getElementById("Salida").innerHTML = TextoEntrada.value=null;
  document.getElementById("Entrada").innerHTML = TextoEntrada.value=null;
  document.getElementById("Sin-Texto").style.display = "initial";
  document.getElementById("Salida").style.display = "initial";
  document.getElementById("Entrada").style.display = "initial";
  document.getElementById("Salida").style.display = "none";
  document.getElementById("Copiar").style.display = "none";
});

function CodificarTexto(texto) {// proceso para codificar texto
  for (var i = 0; i < letras.length; i++) {
    texto = texto.replaceAll(letras[i], cambio[i]);
  }
  return texto;
}

function DecodificarTexto(texto) {// proceso para decodificar texto
  for (var i = 0; i < letras.length; i++) {
    texto = texto.replaceAll(cambio[i], letras[i]);
  }
  return texto;
}

TextoEntrada.addEventListener('keydown', autosize);// autosize de textbox
function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
    
  },0);
}
