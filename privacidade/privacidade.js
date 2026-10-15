const limparDados = document.getElementById("limpar-dados");

limparDados.addEventListener("click", function () {
    if (!window.confirm("Apagar os anúncios deste navegador e o cadastro demonstrativo desta aba?")) {
        return;
    }
    try {
        localStorage.removeItem("mekkaAnuncios");
        sessionStorage.removeItem("mekkaCadastro");
        sessionStorage.removeItem("mekkaUsuario");
        atualizarCabecalho();
        mostrarMensagem("retorno-limpeza", "Os dados locais da demonstração foram apagados.");
    } catch {
        mostrarMensagem("retorno-limpeza", "Não foi possível apagar todos os dados. Confira as permissões do navegador.", true);
    }
});
limparDados.disabled = false;
