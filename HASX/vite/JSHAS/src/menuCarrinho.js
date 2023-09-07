function abrirCarrinho() {
    document.getElementById('carrinho').classList.remove("right-[-430px]");
    document.getElementById('carrinho').classList.add("right-[0px]");
}

function fecharCarrinho(){
    document.getElementById('carrinho').classList.remove("right-[0px]");
    document.getElementById('carrinho').classList.add("right-[-430px]");
}

export function inicioCarrinho(){
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
    const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");

    botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
    botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
}
