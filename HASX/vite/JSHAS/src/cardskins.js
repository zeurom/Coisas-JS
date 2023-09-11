import { catalogo } from "./catalogo";

export function renderizarCatalogo() {
  for (const skin of catalogo) {
    const cartdskin = `<div class='border-solid border-2 border-sky-700 w-80 mx-14 my-4' id ="card-produto-${skin.id}">
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
}

