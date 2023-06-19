let botoes = document.querySelectorAll("button");
let tela = document.querySelector(".visor span");
let valorOp ="";

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    let btnValue = botao.textContent;
    let btnId = botao.id;
    if (btnId === "btn-number") {
      takeNum(btnValue);
     
    } else if (btnId === "btn-operadores") {
     
      switch (true) {
        case tela.textContent.includes("+"):
        case tela.textContent.includes("-"):
        case tela.textContent.includes("*"):
        case tela.textContent.includes("/"):
          tela.textContent;
          break;
        default:
            valorOp = btnValue;
          tela.textContent += btnValue;
          break;
      }
    } else if (btnId === "btn-backspace") {
      apagueNum();
    } else if (btnId === "btn-clear") {
      tela.textContent = "";
    } else if (btnId === "btn-resultado") {
      tela.textContent = showResult(tela.textContent,valorOp);
    }
  });
});

function takeNum(number) {
  tela.textContent += number;
}
function apagueNum() {
  tela.textContent = tela.textContent.substring(0, tela.textContent.length - 1); 
}
function showResult(calcular,ind) {

    let i = calcular.indexOf(ind);
    let num1 = Number(calcular.substring(0,i));
    let num2 = Number(calcular.substring(i+1,calcular.length))
    
    if(ind ==="+"){
        console.log(num1+num2)
       return num1 + num2;
    }
    else if(ind === '-'){
        return num1 - num2;
    }
    else if(ind ==="*"){
        return num1 * num2;
    }
    else if(ind ==="/"){
        return num1 / num2;
    }

}

