function recebeNumero(numero, flag) {
  var myInt = numero;
  //Verifica se é um número, caso contrário, reseta o jogo
  if (!isNaN(myInt)) {
    //Verifica se está dentro do range, caso contrário, reseta o jogo
    if (myInt >= 1 && myInt <= 300 || myInt == 502) { 
      var numCorrigido = parseInt(myInt, 10); //Arredonda valor para inteiro inferior
      // Recebe um parâmetro como string
      // e o transforma em um número
      let myFunc = (numCorrigido) => Number(numCorrigido);
      //Converte os números em uma array de número para printar em 7 segmentos
      var intArr = Array.from(String(numCorrigido), myFunc);
      //Imprime o numero vetorizado no display 7 segmentos
      switch (intArr[intArr.length-1]) {
        case 0:
          document.querySelector("#A1").style.fill = flag;
          document.querySelector("#B1").style.fill = flag;
          document.querySelector("#C1").style.fill = flag;
          document.querySelector("#D1").style.fill = flag;
          document.querySelector("#E1").style.fill = flag;
          document.querySelector("#F1").style.fill = flag;
          document.querySelector("#G1").style.fill = "#DDD";
          break;
        case 1:
          document.querySelector("#A1").style.fill = "#DDD";
          document.querySelector("#B1").style.fill = "#DDD";
          document.querySelector("#C1").style.fill = flag;
          document.querySelector("#D1").style.fill = "#DDD";
          document.querySelector("#E1").style.fill = "#DDD";
          document.querySelector("#F1").style.fill = flag;
          document.querySelector("#G1").style.fill = "#DDD";
          break;
        case 2:
          document.querySelector("#A1").style.fill = flag;
          document.querySelector("#B1").style.fill = "#DDD";
          document.querySelector("#C1").style.fill = flag;
          document.querySelector("#D1").style.fill = flag;
          document.querySelector("#E1").style.fill = flag;
          document.querySelector("#F1").style.fill = "#DDD";
          document.querySelector("#G1").style.fill = flag;
          break;
        case 3:
          document.querySelector("#A1").style.fill = flag;
          document.querySelector("#B1").style.fill = "#DDD";
          document.querySelector("#C1").style.fill = flag;
          document.querySelector("#D1").style.fill = flag;
          document.querySelector("#E1").style.fill = "#DDD";
          document.querySelector("#F1").style.fill = flag;
          document.querySelector("#G1").style.fill = flag;
          break;
        case 4:
          document.querySelector("#A1").style.fill = "#DDD";
          document.querySelector("#B1").style.fill = flag;
          document.querySelector("#C1").style.fill = flag;
          document.querySelector("#D1").style.fill = "#DDD";
          document.querySelector("#E1").style.fill = "#DDD";
          document.querySelector("#F1").style.fill = flag;
          document.querySelector("#G1").style.fill = flag;
          break;
        case 5:
          document.querySelector("#A1").style.fill = flag;
          document.querySelector("#B1").style.fill = flag;
          document.querySelector("#C1").style.fill = "#DDD";
          document.querySelector("#D1").style.fill = flag;
          document.querySelector("#E1").style.fill = "#DDD";
          document.querySelector("#F1").style.fill = flag;
          document.querySelector("#G1").style.fill = flag;
          break;
        case 6:
          document.querySelector("#A1").style.fill = flag;
          document.querySelector("#B1").style.fill = flag;
          document.querySelector("#C1").style.fill = "#DDD";
          document.querySelector("#D1").style.fill = flag;
          document.querySelector("#E1").style.fill = flag;
          document.querySelector("#F1").style.fill = flag;
          document.querySelector("#G1").style.fill = flag;
          break;
        case 7:
          document.querySelector("#A1").style.fill = flag;
          document.querySelector("#B1").style.fill = "#DDD";
          document.querySelector("#C1").style.fill = flag;
          document.querySelector("#D1").style.fill = "#DDD";
          document.querySelector("#E1").style.fill = "#DDD";
          document.querySelector("#F1").style.fill = flag;
          document.querySelector("#G1").style.fill = "#DDD";
          break;
        case 8:
          document.querySelector("#A1").style.fill = flag;
          document.querySelector("#B1").style.fill = flag;
          document.querySelector("#C1").style.fill = flag;
          document.querySelector("#D1").style.fill = flag;
          document.querySelector("#E1").style.fill = flag;
          document.querySelector("#F1").style.fill = flag;
          document.querySelector("#G1").style.fill = flag;
          break;
        case 9:
          document.querySelector("#A1").style.fill = flag;
          document.querySelector("#B1").style.fill = flag;
          document.querySelector("#C1").style.fill = flag;
          document.querySelector("#D1").style.fill = flag;
          document.querySelector("#E1").style.fill = "#DDD";
          document.querySelector("#F1").style.fill = flag;
          document.querySelector("#G1").style.fill = flag;
          break;
          case 0:
            document.querySelector("#A1").style.fill = flag;
            document.querySelector("#B1").style.fill = "#DDD";
            document.querySelector("#C1").style.fill = flag;
            document.querySelector("#D1").style.fill = flag;
            document.querySelector("#E1").style.fill = flag;
            document.querySelector("#F1").style.fill = flag;
            document.querySelector("#G1").style.fill = flag;
            break;
      }
      //Verifica se o próximo do elemento é um número, se SIM, imprime o próximo número
      if(intArr[intArr.length-2] != null){
        document.querySelector("#digito-dois").style.display = "flex";
        switch (intArr[intArr.length-2]) {
          case 0:
            document.querySelector("#A2").style.fill = flag;
            document.querySelector("#B2").style.fill = flag;
            document.querySelector("#C2").style.fill = flag;
            document.querySelector("#D2").style.fill = flag;
            document.querySelector("#E2").style.fill = flag;
            document.querySelector("#F2").style.fill = flag;
            document.querySelector("#G2").style.fill = "#DDD";
            break;
          case 1:
            document.querySelector("#A2").style.fill = "#DDD";
            document.querySelector("#B2").style.fill = "#DDD";
            document.querySelector("#C2").style.fill = flag;
            document.querySelector("#D2").style.fill = "#DDD";
            document.querySelector("#E2").style.fill = "#DDD";
            document.querySelector("#F2").style.fill = flag;
            document.querySelector("#G2").style.fill = "#DDD";
            break;
          case 2:
            document.querySelector("#A2").style.fill = flag;
            document.querySelector("#B2").style.fill = "#DDD";
            document.querySelector("#C2").style.fill = flag;
            document.querySelector("#D2").style.fill = flag;
            document.querySelector("#E2").style.fill = flag;
            document.querySelector("#F2").style.fill = "#DDD";
            document.querySelector("#G2").style.fill = flag;
            break;
          case 3:
            document.querySelector("#A2").style.fill = flag;
            document.querySelector("#B2").style.fill = "#DDD";
            document.querySelector("#C2").style.fill = flag;
            document.querySelector("#D2").style.fill = flag;
            document.querySelector("#E2").style.fill = "#DDD";
            document.querySelector("#F2").style.fill = flag;
            document.querySelector("#G2").style.fill = flag;
            break;
          case 4:
            document.querySelector("#A2").style.fill = "#DDD";
            document.querySelector("#B2").style.fill = flag;
            document.querySelector("#C2").style.fill = flag;
            document.querySelector("#D2").style.fill = "#DDD";
            document.querySelector("#E2").style.fill = "#DDD";
            document.querySelector("#F2").style.fill = flag;
            document.querySelector("#G2").style.fill = flag;
            break;
          case 5:
            document.querySelector("#A2").style.fill = flag;
            document.querySelector("#B2").style.fill = flag;
            document.querySelector("#C2").style.fill = "#DDD";
            document.querySelector("#D2").style.fill = flag;
            document.querySelector("#E2").style.fill = "#DDD";
            document.querySelector("#F2").style.fill = flag;
            document.querySelector("#G2").style.fill = flag;
            break;
          case 6:
            document.querySelector("#A2").style.fill = flag;
            document.querySelector("#B2").style.fill = flag;
            document.querySelector("#C2").style.fill = "#DDD";
            document.querySelector("#D2").style.fill = flag;
            document.querySelector("#E2").style.fill = flag;
            document.querySelector("#F2").style.fill = flag;
            document.querySelector("#G2").style.fill = flag;
            break;
          case 7:
            document.querySelector("#A2").style.fill = flag;
            document.querySelector("#B2").style.fill = "#DDD";
            document.querySelector("#C2").style.fill = flag;
            document.querySelector("#D2").style.fill = "#DDD";
            document.querySelector("#E2").style.fill = "#DDD";
            document.querySelector("#F2").style.fill = flag;
            document.querySelector("#G2").style.fill = "#DDD";
            break;
          case 8:
            document.querySelector("#A2").style.fill = flag;
            document.querySelector("#B2").style.fill = flag;
            document.querySelector("#C2").style.fill = flag;
            document.querySelector("#D2").style.fill = flag;
            document.querySelector("#E2").style.fill = flag;
            document.querySelector("#F2").style.fill = flag;
            document.querySelector("#G2").style.fill = flag;
            break;
          case 9:
            document.querySelector("#A2").style.fill = flag;
            document.querySelector("#B2").style.fill = flag;
            document.querySelector("#C2").style.fill = flag;
            document.querySelector("#D2").style.fill = flag;
            document.querySelector("#E2").style.fill = "#DDD";
            document.querySelector("#F2").style.fill = flag;
            document.querySelector("#G2").style.fill = flag;
            break;
            case 0:
              document.querySelector("#A2").style.fill = flag;
              document.querySelector("#B2").style.fill = "#DDD";
              document.querySelector("#C2").style.fill = flag;
              document.querySelector("#D2").style.fill = flag;
              document.querySelector("#E2").style.fill = flag;
              document.querySelector("#F2").style.fill = flag;
              document.querySelector("#G2").style.fill = flag;
              break;
        } // Caso tenha mudado status do display para mais de 1 digito, e retorna para 1 digito
          // a menos, oculta novamento o display
      }else {document.querySelector("#digito-dois").style.display = "none";
    }
    if(intArr[intArr.length-3] != null){
      document.querySelector("#digito-tres").style.display = "flex";
      switch (intArr[intArr.length-3]) {
        case 0:
          document.querySelector("#A3").style.fill = flag;
          document.querySelector("#B3").style.fill = flag;
          document.querySelector("#C3").style.fill = flag;
          document.querySelector("#D3").style.fill = flag;
          document.querySelector("#E3").style.fill = flag;
          document.querySelector("#F3").style.fill = flag;
          document.querySelector("#G3").style.fill = "#DDD";
          break;
        case 1:
          document.querySelector("#A3").style.fill = "#DDD";
          document.querySelector("#B3").style.fill = "#DDD";
          document.querySelector("#C3").style.fill = flag;
          document.querySelector("#D3").style.fill = "#DDD";
          document.querySelector("#E3").style.fill = "#DDD";
          document.querySelector("#F3").style.fill = flag;
          document.querySelector("#G3").style.fill = "#DDD";
          break;
        case 2:
          document.querySelector("#A3").style.fill = flag;
          document.querySelector("#B3").style.fill = "#DDD";
          document.querySelector("#C3").style.fill = flag;
          document.querySelector("#D3").style.fill = flag;
          document.querySelector("#E3").style.fill = flag;
          document.querySelector("#F3").style.fill = "#DDD";
          document.querySelector("#G3").style.fill = flag;
          break;
        case 3:
          document.querySelector("#A3").style.fill = flag;
          document.querySelector("#B3").style.fill = "#DDD";
          document.querySelector("#C3").style.fill = flag;
          document.querySelector("#D3").style.fill = flag;
          document.querySelector("#E3").style.fill = "#DDD";
          document.querySelector("#F3").style.fill = flag;
          document.querySelector("#G3").style.fill = flag;
          break;
        case 4:
          document.querySelector("#A3").style.fill = "#DDD";
          document.querySelector("#B3").style.fill = flag;
          document.querySelector("#C3").style.fill = flag;
          document.querySelector("#D3").style.fill = "#DDD";
          document.querySelector("#E3").style.fill = "#DDD";
          document.querySelector("#F3").style.fill = flag;
          document.querySelector("#G3").style.fill = flag;
          break;
        case 5:
          document.querySelector("#A3").style.fill = flag;
          document.querySelector("#B3").style.fill = flag;
          document.querySelector("#C3").style.fill = "#DDD";
          document.querySelector("#D3").style.fill = flag;
          document.querySelector("#E3").style.fill = "#DDD";
          document.querySelector("#F3").style.fill = flag;
          document.querySelector("#G3").style.fill = flag;
          break;
        case 6:
          document.querySelector("#A3").style.fill = flag;
          document.querySelector("#B3").style.fill = flag;
          document.querySelector("#C3").style.fill = "#DDD";
          document.querySelector("#D3").style.fill = flag;
          document.querySelector("#E3").style.fill = flag;
          document.querySelector("#F3").style.fill = flag;
          document.querySelector("#G3").style.fill = flag;
          break;
        case 7:
          document.querySelector("#A3").style.fill = flag;
          document.querySelector("#B3").style.fill = "#DDD";
          document.querySelector("#C3").style.fill = flag;
          document.querySelector("#D3").style.fill = "#DDD";
          document.querySelector("#E3").style.fill = "#DDD";
          document.querySelector("#F3").style.fill = flag;
          document.querySelector("#G3").style.fill = "#DDD";
          break;
        case 8:
          document.querySelector("#A3").style.fill = flag;
          document.querySelector("#B3").style.fill = flag;
          document.querySelector("#C3").style.fill = flag;
          document.querySelector("#D3").style.fill = flag;
          document.querySelector("#E3").style.fill = flag;
          document.querySelector("#F3").style.fill = flag;
          document.querySelector("#G3").style.fill = flag;
          break;
        case 9:
          document.querySelector("#A3").style.fill = flag;
          document.querySelector("#B3").style.fill = flag;
          document.querySelector("#C3").style.fill = flag;
          document.querySelector("#D3").style.fill = flag;
          document.querySelector("#E3").style.fill = "#DDD";
          document.querySelector("#F3").style.fill = flag;
          document.querySelector("#G3").style.fill = flag;
          break;
          case 0:
            document.querySelector("#A3").style.fill = flag;
            document.querySelector("#B3").style.fill = "#DDD";
            document.querySelector("#C3").style.fill = flag;
            document.querySelector("#D3").style.fill = flag;
            document.querySelector("#E3").style.fill = flag;
            document.querySelector("#F3").style.fill = flag;
            document.querySelector("#G3").style.fill = flag;
            break;
      }
    }else {document.querySelector("#digito-tres").style.display = "none";
  }
    } else // Alerta para condição errada de input e reseta o jogo ou somente apaga conteúdo (comentado)
      return (
        alert("Insira um valor inteiro entre 1 e 300!"),
        window.location.reload()
        //    document.getElementById("numero-digitado").value = " ";
      );
  } else
    return (
      alert("Insira um valor inteiro entre 1 e 300!"), 
      window.location.reload()
      //    document.getElementById("numero-digitado").value = " ";
    );
}

export default recebeNumero;