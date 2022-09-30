const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaValor(chute);
}

function exibeChuteNaTela(chute) {
    if (!elementoChute.contains(document.getElementById('box'))) {
        const elementoVoceDisse = document.createElement('div');
        elementoVoceDisse.innerHTML = 'Você disse:';
        elementoChute.appendChild(elementoVoceDisse);

        var elementoBox = document.createElement('span');
        elementoBox.id = 'box';
        elementoChute.appendChild(elementoBox);
    } else {
        elementoBox = document.getElementById('box')
    }

    elementoBox.innerHTML = chute;
}

recognition.addEventListener('end', () => recognition.start());