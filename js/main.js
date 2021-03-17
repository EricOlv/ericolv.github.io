let minhaImagem =  document.querySelector('img');

minhaImagem.onclick = () => {
    let meuSrc = minhaImagem.getAttribute('src');
    if (meuSrc === 'img/icon.png') {
        minhaImagem.setAttribute('src', 'img/firefox2.png');
    } else {
        minhaImagem.setAttribute('src', 'img/icon.png');
    }
}

/*function multiplica(num1,num2) {
    let resultado = num1 * num2;
    return resultado;
}

document.querySelector('html').onclick = () => {
    alert('Para de me clicar');
}*/

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    if(!meuNome || meuNome === null) {
      defineNomeUsuario();
    } else {
      localStorage.setItem('nome', meuNome);
      meuCabecalho.innerHTML = 'Mozilla é legal, ' + meuNome;
    }
}

meuBotao.onclick = function() { 
    defineNomeUsuario();
}