let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/grafico-ibov.jpg') {
      minhaImagem.setAttribute ('src','imagens/grafico-tecnico.jpg');
    } else {
      minhaImagem.setAttribute ('src',"imagens/grafico-ibov.jpg");
    }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    if(!meuNome || meuNome === null) {
      defineNomeUsuario();
    } else {
      localStorage.setItem('nome', meuNome);
      meuCabecalho.textContent = 'Estes são meus investimentos em renda fixa, ' + meuNome;
    }
  }

  if(!localStorage.getItem('nome')) {
    defineNomeUsuario();
  } else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Estes são meus investimentos em renda fixa, ' + nomeGuardado;
  }

  meuBotao.onclick = function() { defineNomeUsuario();
  }