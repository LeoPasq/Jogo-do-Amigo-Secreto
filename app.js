//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = [];
let numeroLimite = 10;

function adicionarAmigo() {
    let nomeAmigo = document.querySelector('input').value;
    if (nomeAmigo.trim() === '') { // Impede insert de nomes vazios
        alert("Nome não pode estar em branco");
        return;
    }

    if (listaAmigos.includes(nomeAmigo)) {  // include ==> funcao de nomes duplicados
        alert("Esse nome já foi adicionado!");
        return;
    }

    if (listaAmigos.length >= numeroLimite) {
        alert(`Você só pode adicionar até ${numeroLimite} amigos.`);
        return;
    }

    listaAmigos.push(nomeAmigo);
    exibirNomeNaTela('ul', 'listaAmigos', listaAmigos); // Passa listaAmigos como texto
    limparCampo();
}

function exibirNomeNaTela(tag, id, texto) {
    let lista = document.getElementById(id); // Obtém o elemento ul pela ID
    lista.innerHTML = ''; // Limpa a lista existente

    texto.forEach (nome => { // Itera sobre o array de nomes
        let novoNome = document.createElement('li'); // Cria um novo elemento li
        novoNome.textContent = nome; // Define o texto do item como o nome
        lista.appendChild(novoNome); // Adiciona o item à lista
    } );
    
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
}

function limparCampo() {
    document.querySelector('input').value = '';
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Adicione pelo menos dois amigos para o sorteio.");
        return;
    }
    
    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceSorteado];
        
    exibirResultadoSorteio(amigoSorteado); // Função para exibir o resultado

    // Limpar a lista de amigos
    listaAmigos = [];
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    limparCampo();
}
    
function exibirResultadoSorteio(amigoSorteado) {
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpa resultados anteriores
    
    let resultadoSorteio = document.createElement("li");
    resultadoSorteio.textContent = "Amigo sorteado: " + amigoSorteado;
    resultadoLista.appendChild(resultadoSorteio);
}
