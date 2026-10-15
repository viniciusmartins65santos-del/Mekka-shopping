const formularioAnuncio = document.getElementById("form-anuncio");
const campoImagem = document.getElementById("imagem");
const previaImagem = document.getElementById("previa-imagem");
const botaoSalvar = formularioAnuncio.querySelector('button[type="submit"]');
let imagemAnuncio = "../produtos/sem-imagem.svg";
let leitorImagem = null;

document.getElementById("ano").max = new Date().getFullYear();

campoImagem.addEventListener("change", function () {
    if (leitorImagem && leitorImagem.readyState === 1) {
        leitorImagem.abort();
    }
    const arquivo = campoImagem.files[0];
    imagemAnuncio = "../produtos/sem-imagem.svg";
    previaImagem.src = imagemAnuncio;
    campoImagem.setCustomValidity("");
    botaoSalvar.disabled = false;
    document.getElementById("retorno-anuncio").hidden = true;
    if (!arquivo) {
        return;
    }
    const tiposPermitidos = ["image/jpeg", "image/png", "image/webp"];
    if (!tiposPermitidos.includes(arquivo.type) || arquivo.size > 500 * 1024) {
        campoImagem.setCustomValidity("Escolha uma imagem JPG, PNG ou WebP de até 500 KB.");
        mostrarMensagem("retorno-anuncio", "Escolha uma imagem JPG, PNG ou WebP de até 500 KB.", true);
        return;
    }
    botaoSalvar.disabled = true;
    leitorImagem = new FileReader();
    leitorImagem.addEventListener("load", function () {
        imagemAnuncio = leitorImagem.result;
        previaImagem.src = imagemAnuncio;
        botaoSalvar.disabled = false;
    });
    leitorImagem.addEventListener("error", function () {
        campoImagem.setCustomValidity("Não foi possível ler a imagem. Escolha outro arquivo.");
        mostrarMensagem("retorno-anuncio", "Não foi possível ler a imagem. Escolha outro arquivo.", true);
        botaoSalvar.disabled = false;
    });
    leitorImagem.readAsDataURL(arquivo);
});

previaImagem.addEventListener("error", function () {
    imagemAnuncio = "../produtos/sem-imagem.svg";
    previaImagem.src = imagemAnuncio;
    campoImagem.setCustomValidity("O arquivo não contém uma imagem válida.");
    mostrarMensagem("retorno-anuncio", "O arquivo não contém uma imagem válida. Escolha outra imagem.", true);
});

formularioAnuncio.addEventListener("submit", function (evento) {
    evento.preventDefault();
    if (!validarFormulario(formularioAnuncio, "retorno-anuncio")) {
        return;
    }
    const anuncio = {
        id: "anuncio-" + Date.now(),
        nome: document.getElementById("nome").value,
        categoria: document.getElementById("categoria").value,
        marca: document.getElementById("marca").value,
        ano: Number(document.getElementById("ano").value),
        condicao: document.getElementById("condicao").value,
        preco: Number(document.getElementById("preco").value),
        cidade: document.getElementById("cidade").value,
        uf: document.getElementById("uf").value,
        descricao: document.getElementById("descricao").value,
        imagem: imagemAnuncio
    };
    const anuncios = lerAnuncios();
    anuncios.push(anuncio);
    try {
        localStorage.setItem("mekkaAnuncios", JSON.stringify(anuncios));
    } catch {
        mostrarMensagem("retorno-anuncio", "Não foi possível salvar. O armazenamento pode estar cheio ou bloqueado. Tente uma imagem menor ou apague anúncios pela página de privacidade.", true);
        return;
    }
    formularioAnuncio.reset();
    document.getElementById("ver-anuncio").href = "../produto/produto.html?id=" + encodeURIComponent(anuncio.id);
    const confirmacao = document.getElementById("anuncio-criado");
    confirmacao.hidden = false;
    confirmacao.focus();
});

formularioAnuncio.addEventListener("reset", function () {
    if (leitorImagem && leitorImagem.readyState === 1) {
        leitorImagem.abort();
    }
    formularioAnuncio.querySelectorAll("input, textarea").forEach(function (campo) {
        campo.setCustomValidity("");
    });
    imagemAnuncio = "../produtos/sem-imagem.svg";
    previaImagem.src = imagemAnuncio;
    document.getElementById("retorno-anuncio").hidden = true;
    document.getElementById("anuncio-criado").hidden = true;
    botaoSalvar.disabled = false;
});

botaoSalvar.disabled = false;
