



document.querySelectorAll('.botao').forEach(function (botao) {
    botao.addEventListener('click', function () {
        insert(this.value);
    });
})


function insert(valor) {

    let resultado = document.querySelector("#resultado").innerHTML;

    if (valor == "c") {
        limpar();
    } else if (valor == "<") {
        apagar();
    } else if (["+", "-", "*", "/", "."].includes(valor)) {
        if (resultado.length > 0 && !isNaN(parseInt(resultado[resultado.length - 1]))) {
            resultado += valor;
            document.querySelector("#resultado").innerHTML = resultado;
        }
    } else {
        if (document.querySelector("#resultado").innerHTML.length > 0 && valor == "=") {
            calcular();
        } else {
            resultado += valor;
            document.querySelector("#resultado").innerHTML = resultado;
        }
    }
}


function limpar() {
    document.querySelector("#resultado").innerHTML = "";
}

function apagar() {
    let resul = document.querySelector("#resultado").innerHTML;

    if (typeof resul === "string" && resul.length > 0) {
        resul = resul.substring(0, resul.length - 1);
        document.querySelector("#resultado").innerHTML = resul;
    }

    console.log(resul);
}


function calcular() {
    let res_calc = document.querySelector("#resultado").innerHTML;


    document.querySelector("#resultado").innerHTML = eval(res_calc);
}

