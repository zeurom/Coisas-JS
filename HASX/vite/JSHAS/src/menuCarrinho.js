function abrirCarrinho() {
    document.getElementById('carrinho').classList.remove("right-[-430px]");
    document.getElementById('carrinho').classList.add("right-[0px]");
}

function fecharCarrinho() {
    document.getElementById('carrinho').classList.remove("right-[0px]");
    document.getElementById('carrinho').classList.add("right-[-430px]");
}

export function inicioCarrinho() {
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
    const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");

    botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
    botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
}

export function AdicionarAoCarrinho() {
    const containerprodutoscarrinho = document.getElementById('produtos-carrinho');
    const cartaoDoProduto = `
    <article class="flex bg-slate-100 rounded-lg p-1 relative">
    <button id="fechar-carrinho" class="absolute top-0 right-1">
        <i class="fa-solid fa-circle-xmark text-green-700 hover:text-green-300"></i>
    </button>
    <img 
    src="./imagens/png-transparent-rat-rodent-pest-control-pest-dead-rat-animals-text-logo.png" 
    alt="ratao classico" 
    class="h-20 rounded-lg">
    
    <div class="py-2">
        <p class="text-slate-900 text-sm p-1">rato classico</p>
        <p class="text-slate-400 text-xs p-1">tamanho: M</p>
        <p class="text-green-700 text-lg p-1">RP: 1500</p>
    </div>
</article>`;
    containerprodutoscarrinho.innerHTML += cartaoDoProduto;
}
