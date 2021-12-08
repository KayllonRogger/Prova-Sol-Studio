function btnReset() {
  var reset = document.querySelector("#botao-reset");
  reset.style.display = "inline-block";
  reset.addEventListener("click", function () {
      window.location.reload()
    });

    document.getElementById("botao-enviar").disabled = true;
    document.getElementById("botao-enviar").style.backgroundColor = "#DDD";

    document.getElementById("numero-digitado").disabled = true;
    document.getElementById("numero-digitado").value = " ";
}

export default btnReset;