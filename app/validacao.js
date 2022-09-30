function verificaValor(chute) {
    const numero = +chute;

    if (!document.contains(document.getElementById('validacao'))) {
        elementoValidacao = document.createElement('div');
        elementoValidacao.id = 'validacao';
        elementoChute.appendChild(elementoValidacao);
    }

    if (chuteInvalido(numero)) {
        elementoValidacao.innerHTML = 'Valor Inválido!';
        return;
    }

    if (numeroValido(numero)) {
        elementoValidacao.innerHTML = `Valor Inválido: Fale um número entre ${menorValor} e ${maiorValor}`;
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = '<h2> Você acertou! </h2>';
        document.body.innerHTML += `<h3> O número secreto era ${numero} </h3>`;
        botaoReiniciar = document.createElement('button');
        botaoReiniciar.id = 'jogar-novamente';
        botaoReiniciar.classList.add("btn-jogar")
        botaoReiniciar.innerHTML = 'Jogar Novamente!';
        document.body.appendChild(botaoReiniciar);
    } else if (numero < numeroSecreto) {
        elementoValidacao.innerHTML = 'O número secreto é maior <i class="fa-solid fa-arrow-up"></i>';
    } else {
        elementoValidacao.innerHTML = 'O número secreto é menor <i class="fa-solid fa-arrow-down"></i>';
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroValido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id === 'jogar-novamente') {
        window.location.reload();
    }
});
