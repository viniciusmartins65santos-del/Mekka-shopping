function mostrarProdutos(lista, destino) {
    const modelo = document.getElementById("modelo-cartao");
    destino.replaceChildren();
    lista.forEach(function (produto) {
        const cartao = modelo.content.cloneNode(true);
        carregarFoto(cartao.querySelector(".imagem-produto"), produto.imagem);
        cartao.querySelector(".imagem-produto").alt = produto.nome;
        cartao.querySelector(".etiqueta").textContent = produto.categoria;
        cartao.querySelector(".nome-produto").textContent = produto.nome;
        cartao.querySelector(".local-produto").textContent = produto.cidade + " · " + produto.uf;
        cartao.querySelector(".info-produto").textContent = produto.ano + " · " + produto.condicao;
        cartao.querySelector(".preco-produto").textContent = formatarPreco(produto.preco);
        cartao.querySelector(".oferta").href = "../produto/produto.html?id=" + encodeURIComponent(produto.id);
        cartao.querySelector(".oferta").setAttribute("aria-label", "Ver oferta: " + produto.nome);
        destino.appendChild(cartao);
    });
}
