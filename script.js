const botoes = document.querySelectorAll('.btn-proximo');

botoes.forEach(botao => {
    botao.addEventListener('click', function(){
        const passoAtual = document.querySelector('.ativo');
        const proximoID = 'passo-' + this.getAttribute('data-proximo');

        passoAtual.classList.remove('ativo');
        document.getElementById(proximoID).classList.add('ativo');
    });
});
