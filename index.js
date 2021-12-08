import getJSON from "./getJSON.js";
import recebeNumero from "./recebeNumero.js";
import btnReset from "./btnReset.js";

let url = "https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300"; //URL com arquivo JSON

getJSON(url, function (err, data) {
  //Verifica entrada de erro JSON
  if (err !== null) {
    //Emite mensagem de erro 502
    var texto = document.getElementById("maior-menor-acertou");
    texto.innerHTML = "ERRO"; //Mensagem de Erro inserido no HTML
    texto.style.color = "#CC3300"; //Definição de cor de erro
    recebeNumero(502, "#CC3300"); //Chamada de condicionamento de entrada e chamada de display
    btnReset(); //Inclusão do botão reset e condição final de página
  } else {
    //Seleciona elemento botão para iniciar escuta de entrada
    var getInput = document.querySelector("#botao-enviar");

    //Inicia a escuta de entrada do form pelo botão
    getInput.addEventListener("click", function () {
      //Checa valor de entrada
      var numeroDigitado = document.getElementById("numero-digitado").value;
      //Inserir a função display aqui

      //Compara se valor de entrada é igual ao JSON
      if (numeroDigitado == data.value) {
        var texto = document.getElementById("maior-menor-acertou");
        texto.innerHTML = "Você acertou!!!!";
        texto.style.color = "#32BF00";
        recebeNumero(numeroDigitado, "#32BF00");
        btnReset();
      }

      //Compara se valor de entrada é menor que JSON
      else if (numeroDigitado < data.value) {
        document.getElementById("numero-digitado").value = "";
        var texto = document.getElementById("maior-menor-acertou");
        texto.innerHTML = "É maior";
        recebeNumero(numeroDigitado, "#000");
      }

      //Compara se valor de entrada é maior que JSON
      else if (numeroDigitado > data.value) {
        document.getElementById("numero-digitado").value = "";
        var texto = document.getElementById("maior-menor-acertou");
        texto.innerHTML = "É menor";
        recebeNumero(numeroDigitado, "#000");
      }
    });
  }
});
