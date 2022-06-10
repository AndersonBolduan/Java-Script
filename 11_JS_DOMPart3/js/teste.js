// Método querySelector
let paragrafo = document.querySelector('p');
paragrafo.style.background = '#FBBEBA';

// Busca a tag e a classe
let parClasse = (document.querySelector('p.exemplo').innerHTML = 'Mudei o texto aqui');

// Busca somente a classe
let elemento = (document.querySelector('.myclass').style.fontSize = 'x-large');

// Função chamada pelo evento onclick 
const Clique = () => {     
    document.querySelector('#my-span').style.backgroundColor = '#CEFBBA'; 
};