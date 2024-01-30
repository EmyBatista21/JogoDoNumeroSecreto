
let sorteados = [];
const numeroLimite = 4;
let numeroSecreto = gerarUmNumeroAleatorio();
let tentativas = 0;


function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Chute um número de 1 a ${numeroLimite}`);
};

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2}); Ativa voz do jogo
}

function limparInput(){
    let chute = document.querySelector('input');
    chute.value = '';
}


function gerarUmNumeroAleatorio() {
    let numeroGerado = parseInt(Math.random() * numeroLimite + 1);
    if(sorteados.length == numeroLimite)
        sorteados = [];
    if(sorteados.includes(numeroGerado)){
        console.log('O número já foi jogado');
        return gerarUmNumeroAleatorio();
    }
    sorteados.push(numeroGerado);
    //console.log(sorteados) mostra no console os numeros sorteados
    return numeroGerado;
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(numeroSecreto == chute){
        tentativas++;
        exibirTextoNaTela('h1', 'Acertou!')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        tentativas++;
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let tamanhoNumero = numeroSecreto > chute ? 'maior' : 'menor';
        let mensagemTentativas = `O número é ${tamanhoNumero} que ${chute} : ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        limparInput();
    }

}

function reiniciarJogo(){
    numeroSecreto = gerarUmNumeroAleatorio();
    tentativas = 0;
    limparInput();
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

mensagemInicial();