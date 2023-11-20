const formulario = document.querySelector("form");
formulario.addEventListener("submit", function(evento){
    evento.preventDefault();
    calcular();
})

function calcular(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const operacao = document.getElementById("operacao").value;

    const verif = (num1 !='')&&(num2 !='');     

    if (operacao=='mult' && verif){
        const result = Number(num1)*Number(num2)
        document.getElementById("resposta").innerHTML = "O resultado é: " + result;  
    }
    else if (operacao=='div' && verif){
        const result = Number(num1)/Number(num2)
        document.getElementById("resposta").innerHTML = "O resultado é: " + result;
    }
    else if (operacao=='soma' && verif){
        const result = Number(num1)+Number(num2)
        document.getElementById("resposta").innerHTML = "O resultado é: " + result;
    }
    else if (operacao=='subt' && verif){
        const result = Number(num1) - Number(num2)
        document.getElementById("resposta").innerHTML = "O resultado é: " + result;
    }
    else {
        alert("Opção inválida!!!");
    }    
}
