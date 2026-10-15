const parametrosProduto = new URLSearchParams(window.location.search);
const idProduto = parametrosProduto.get("id");
const produtoSelecionado = obterProdutos().find(function (produto) {
    return produto.id === idProduto;
});

if (!produtoSelecionado) {
    document.getElementById("titulo-produto").textContent = "Equipamento não encontrado";
    document.getElementById("produto-inexistente").hidden = false;
} else {
    document.title = produtoSelecionado.nome + " | Mekka Shopping";
    document.getElementById("detalhes-produto").hidden = false;
    document.getElementById("titulo-produto").textContent = produtoSelecionado.nome;
    document.getElementById("foto-produto").src = produtoSelecionado.imagem;
    document.getElementById("foto-produto").alt = produtoSelecionado.nome;
    document.getElementById("preco-produto").textContent = formatarPreco(produtoSelecionado.preco);
    document.getElementById("local-produto").textContent = produtoSelecionado.cidade + " / " + produtoSelecionado.uf;
    document.getElementById("condicao-produto").textContent = produtoSelecionado.condicao + " · " + produtoSelecionado.ano;
    document.getElementById("descricao-produto").textContent = produtoSelecionado.descricao;
    document.getElementById("marca-produto").textContent = produtoSelecionado.marca;
    document.getElementById("categoria-produto").textContent = produtoSelecionado.categoria;
    document.getElementById("ano-produto").textContent = produtoSelecionado.ano;
    document.getElementById("estado-produto").textContent = produtoSelecionado.condicao;
    document.getElementById("cidade-produto").textContent = produtoSelecionado.cidade + " / " + produtoSelecionado.uf;

    const contato = document.getElementById("form-contato");
    contato.addEventListener("submit", function (evento) {
        evento.preventDefault();
        if (!validarFormulario(contato, "retorno-contato")) {
            return;
        }
        contato.reset();
        mostrarMensagem("retorno-contato", "Simulação concluída! Em um sistema real, o vendedor receberia sua mensagem. Nenhum contato foi enviado.");
    });
    contato.querySelector('button[type="submit"]').disabled = false;
}
