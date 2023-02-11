


// adicionado um evento click a cada button que tiver uma classe .botao. Observe que foi utilizado um SelectorAll e um foreach p/ pegar os N button com classe botao
document.querySelectorAll('.botao').forEach(function (botao) {
    botao.addEventListener('click', function () {
        insert(this.value);
    });
})

// função que insere os valores
function insert(valor) {

    remove_reticencia();// Remove a reticência se, por ventura, o usuário tentou calcular sem inserir os números. E, como consequência, lá na função calcular, ele adiciona uma (...). Se o usuário preencher um número, logo após tentar calcular sem valor, ele remove a (...) evitando que a saída fique assim : ...5 ou ...7 

    let resultado = document.querySelector("#resultado").innerHTML;
    // valor initial do campo #resultado -> que será "" na primeira vez.

    // Se o valor do evento ativado for "c" => ativa função limpar
    if (valor == "c") {
        limpar();
    } else if (valor == "<") {
        //Se o valor do evento ativado for "<" ativa a função apagar
        apagar();
    } else if (["+", "-", "*", "/", "."].includes(valor)) {

        if (resultado.length > 0 && !isNaN(parseInt(resultado[resultado.length - 1]))) {
            resultado += valor;
            document.querySelector("#resultado").innerHTML = resultado;
        }

    } else {
        if (valor == "=") {
            calcular();
        } else {
            resultado += valor;
            document.querySelector("#resultado").innerHTML = resultado;
        }
    }
}


// função para limpar o elemento com id resultado
function limpar() {
    document.querySelector("#resultado").innerHTML = "";
}

function remove_reticencia() {
    if (document.querySelector("#resultado").innerHTML == "...") {
        // se existir reticência, ele remove.
        document.querySelector("#resultado").innerHTML = "";
    }
}

// função que apaga o último elemento digitado
function apagar() {
    let resul = document.querySelector("#resultado").innerHTML;

    if (typeof resul === "string" && resul.length > 0) {
        resul = resul.substring(0, resul.length - 1);
        document.querySelector("#resultado").innerHTML = resul;
    }

    console.log(resul);
}



// função que calcula 
function calcular() {
    let res_calc = document.querySelector("#resultado").innerHTML;
    // pegando a expressão montada no elemento #resultado : 1 + 1
    // alert(res_calc.length)
    if (res_calc) {
        document.querySelector("#resultado").innerHTML = eval(res_calc);
        // a função eval() pega uma string e realiza o calculo de acordo com o valor passado. No caso, ele leu uma string : 1+1 e, em seguinda, efetuou o cálculo e inseriu no nosso elemento resultado
    } else {
        document.querySelector("#resultado").innerHTML = "...";
        // adiciona reticência se houve uma tentativa de calcular valores sem inserir números
    }
}

