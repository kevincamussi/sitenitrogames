// CREATE GAME CARDS

const card = document.getElementById("jogos");

function criarCards() {
    
    
    const jogosTerror = [
      {
        nome: "Resident Evil",
        imagem: "resident",
      },
      {
        nome: "Until Dawn",
        imagem: "untildawn",
      },
      {
        nome: "The Evil Within",
        imagem: "evilwithin"
      },
      {
        nome: "Outlast ",
        imagem: "outlast"
      }
      
    ];
    
    for (i = 0; i<jogosTerror.length; i++) {
            
            const newDiv = document.createElement('div');
            const nomeJogo = document.createElement('h1');
            const linkCompra = document.createElement('a');
            const imagem = document.createElement("img");

            newDiv.classList.add('card');
            card.appendChild(newDiv);
            
            imagem.src = `./imagens/terror/${jogosTerror[i].imagem}.jpg`;
            imagem.alt =`Imagem do ${jogosTerror[i].nome}`
            newDiv.appendChild(imagem);
            
            newDiv.appendChild(nomeJogo);
            nomeJogo.innerText=`${jogosTerror[i].nome}`;

            newDiv.appendChild(linkCompra);
            linkCompra.innerText='Comprar';
            linkCompra.title = "Comprar jogo";
            linkCompra.href = "#";
  }
}

document.body.onload= criarCards;
