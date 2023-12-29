// CREATE GAME CARDS

const card = document.getElementById("jogos");

function criarCards() {
    
    
    const jogosInfantis = [
      {
        nome: "Lego Star Wars",
        imagem: "legosw",
      },
      {
        nome: "Crash",
        imagem: "crash",
      },
      {
        nome: "Bob Esponja",
        imagem: "bobesponja"
      },
      {
        nome: "Sackboy ",
        imagem: "sackboy"
      }
      
    ];
    
    for (i = 0; i<jogosInfantis.length; i++) {
            
            const newDiv = document.createElement('div');
            const nomeJogo = document.createElement('h1');
            const linkCompra = document.createElement('a');
            const imagem = document.createElement("img");

            newDiv.classList.add('card');
            card.appendChild(newDiv);
            
            imagem.src = `./imagens/infantil/${jogosInfantis[i].imagem}.jpg`;
            imagem.alt =`Imagem do ${jogosInfantis[i].nome}`
            newDiv.appendChild(imagem);
            
            newDiv.appendChild(nomeJogo);
            nomeJogo.innerText=`${jogosInfantis[i].nome}`;

            newDiv.appendChild(linkCompra);
            linkCompra.innerText='Comprar';
            linkCompra.title = "Comprar jogo";
            linkCompra.href = "#";
  }
}

document.body.onload= criarCards;
