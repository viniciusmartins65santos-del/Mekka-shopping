const limparDados = document.getElementById("limpar-dados");

limparDados.addEventListener("click", function () {
    if (!window.confirm("Apagar os anúncios deste navegador e o cadastro demonstrativo desta aba?")) {
        return;
    }
    const falhas = [];
    function apagar(armazenamento, chave, nome) {
        try {
            window[armazenamento].removeItem(chave);
        } catch {
            falhas.push(nome);
        }
    }
    apagar("localStorage", "mekkaAnuncios", "anúncios");
    apagar("sessionStorage", "mekkaCadastro", "cadastro");
    apagar("sessionStorage", "mekkaUsuario", "sessão");
    atualizarCabecalho();
    if (falhas.length) {
        const resumo = falhas.length === 3 ? "Limpeza bloqueada." : "Limpeza parcial.";
        mostrarMensagem("retorno-limpeza", resumo + " Falha ao apagar: " + falhas.join(", ") + ".", true);
    } else {
        mostrarMensagem("retorno-limpeza", "Os dados locais da demonstração foram apagados.");
    }
});
limparDados.disabled = false;
