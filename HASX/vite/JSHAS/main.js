import { inicioCarrinho } from "./src/menuCarrinho";
const catalogo = [
    {
        id: 1,
        nome:"Twitch Padrão",
        marca:"Zaun",
        preco:"Gratiuito",
        imagem:"skin-0.jpg",
    },
    {
        id: 2,
        nome:"Twitch Medieval",
        marca:"Medieval",
        preco:"2400",
        imagem:"skin-1.jpg",
    },
    {
        id: 3,
        nome:"Twitch Esquadrão Omega",
        marca:"Esuqdrão Omega",
        preco:"1350",
        imagem:"skin-3.jpg",
    },
    {
        id: 4,
        nome:"Twitch Vandalo",
        marca:"Vandalo",
        preco:"1350",
        imagem:"skin-4.jpg",
    },
    {
        id: 5,
        nome:"Twitch Classico",
        marca:"Classico",
        preco:"2500",
        imagem:"skin-5.jpg",
    },
    {
        id: 6,
        nome:"Twitch Caçador De Dragões",
        marca:"Caçador De Dragões",
        preco:"1350",
        imagem:"skin-6.jpg",
    },
    {
        id: 7,
        nome:"Twitch Velho Oeste",
        marca:"Velho Oeste",
        preco:"1350",
        imagem:"skin-7.jpg",
    },
    {
        id: 8,
        nome:"Twitch Rei do Crime",
        marca:"Rei do Crime",
        preco:"520",
        imagem:"skin-2.jpg",
    },
];

for (const skin of catalogo) {
    const cartdskin = `<div class='border-solid border-2 border-sky-500 w-80 m-2' id ="card-produto-${skin.id}">
        <img 
            src="./imagens/${skin.imagem}"  
            alt="${skin.nome}"
            style="height: 200px"
        />
        <p>${skin.nome}</p>
        <p class='marca'>${skin.marca}</p>
        <p>${skin.preco} RP</p>
        <button>Adicionar</button>
    </div>`;

    document.getElementById('container-produto').innerHTML += cartdskin;
}

inicioCarrinho();
