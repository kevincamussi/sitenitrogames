// CREATE GAME CARDS

const card = document.getElementById("jogos");

function criarCards() {
    
    
    const jogosAventura = [
      {
        nome: "Uncharted 4",
        imagem: "uncharted",
      },
      {
        nome: "Sonic Forces",
        imagem: "sonic",
      },
      {
        nome: "Horizon",
        imagem: "horizon"
      },
      {
        nome: "Kingdom Hearts 3 ",
        imagem: "kingdomhearts"
      }
      
    ];
    
    for (i = 0; i<jogosAventura.length; i++) {
            
            const newDiv = document.createElement('div');
            const nomeJogo = document.createElement('h1');
            const linkCompra = document.createElement('a');
            const imagem = document.createElement("img");

            newDiv.classList.add('card');
            card.appendChild(newDiv);
            
            imagem.src = `./imagens/aventura/${jogosAventura[i].imagem}.jpg`;
            imagem.alt =`Imagem do ${jogosAventura[i].nome}`
            newDiv.appendChild(imagem);
            
            newDiv.appendChild(nomeJogo);
            nomeJogo.innerText=`${jogosAventura[i].nome}`;

            newDiv.appendChild(linkCompra);
            linkCompra.innerText='Comprar';
            linkCompra.title = "Comprar jogo";
            linkCompra.href = "#";
  }
}

document.body.onload= criarCards;
