// CREATE GAME CARDS

const card = document.getElementById("jogos");

function criarCards() {
    
    
    const jogosAcao = [
      {
        nome: "Mortal Kombat",
        imagem: "mortalkombat",
      },
      {
        nome: "Battlefield V",
        imagem: "battlefieldv",
      },
      {
        nome: "Black Ops 3",
        imagem: "blackops3"
      },
      {
        nome: "The Witcher 3",
        imagem: "witcher"
      }
      
    ];
    
    for (i = 0; i<jogosAcao.length; i++) {
            
            const newDiv = document.createElement('div');
            const nomeJogo = document.createElement('h1');
            const linkCompra = document.createElement('a');
            const imagem = document.createElement("img");

            newDiv.classList.add('card');
            card.appendChild(newDiv);
            
            imagem.src = `./imagens/acao/${jogosAcao[i].imagem}.jpg`;
            imagem.alt =`Imagem do ${jogosAcao[i].nome}`
            newDiv.appendChild(imagem);
            
            newDiv.appendChild(nomeJogo);
            nomeJogo.innerText=`${jogosAcao[i].nome}`;

            newDiv.appendChild(linkCompra);
            linkCompra.innerText='Comprar';
            linkCompra.title = "Comprar jogo";
            linkCompra.href = "#";
  }
}

document.body.onload= criarCards;
