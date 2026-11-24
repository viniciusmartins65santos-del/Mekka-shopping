function normalizarTexto(texto) {
    return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function preencherOpcoes(id, valores) {
    const select = document.getElementById(id);
    const opcoes = [];
    valores.forEach(function (valor) {
        if (!opcoes.includes(valor)) {
            opcoes.push(valor);
        }
    });
    opcoes.sort(function (a, b) { return a.localeCompare(b, "pt-BR"); });
    opcoes.forEach(function (valor) {
        const opcao = document.createElement("option");
        opcao.value = valor;
        opcao.textContent = valor;
        select.appendChild(opcao);
    });
}

const todosProdutos = obterProdutos();
const filtros = document.getElementById("filtros");

function filtrarProdutos() {
    const busca = normalizarTexto(document.getElementById("busca").value.trim());
    const categoria = document.getElementById("categoria").value;
    const marca = document.getElementById("marca").value;
    const condicao = document.getElementById("condicao").value;
    const localizacao = document.getElementById("localizacao").value;
    const minimo = Number(document.getElementById("preco-minimo").value);
    const campoMaximo = document.getElementById("preco-maximo");
    const maximo = campoMaximo.value === "" ? Infinity : Number(campoMaximo.value);
    const ano = document.getElementById("ano").value;
    const uf = document.getElementById("uf").value;
    const ordem = document.getElementById("ordenacao").value;
    document.getElementById("erro-filtros").hidden = true;

    if (minimo > maximo) {
        mostrarMensagem("erro-filtros", "O preço mínimo não pode ser maior que o máximo.", true);
        return;
    }

    const resultado = todosProdutos.filter(function (produto) {
        const texto = normalizarTexto(produto.nome + " " + produto.marca + " " + produto.categoria);
        const local = produto.cidade + " / " + produto.uf;
        return texto.includes(busca)
            && (categoria === "" || produto.categoria === categoria)
            && (marca === "" || produto.marca === marca)
            && (condicao === "" || produto.condicao === condicao)
            && (localizacao === "" || local === localizacao)
            && (ano === "" || String(produto.ano) === ano)
            && (uf === "" || produto.uf === uf)
            && produto.preco >= minimo && produto.preco <= maximo;
    });

    if (ordem === "menor") {
        resultado.sort(function (a, b) { return a.preco - b.preco; });
    } else if (ordem === "maior") {
        resultado.sort(function (a, b) { return b.preco - a.preco; });
    } else if (ordem === "ano") {
        resultado.sort(function (a, b) { return b.ano - a.ano; });
    }

    mostrarProdutos(resultado, document.getElementById("lista-produtos"));
    document.getElementById("quantidade").textContent = resultado.length + (resultado.length === 1 ? " equipamento encontrado" : " equipamentos encontrados");
    document.getElementById("sem-resultados").hidden = resultado.length > 0;
}

if (filtros) {
    preencherOpcoes("categoria", todosProdutos.map(function (produto) { return produto.categoria; }));
    preencherOpcoes("ano", todosProdutos.map(function (produto) { return String(produto.ano); }));
    preencherOpcoes("uf", todosProdutos.map(function (produto) { return produto.uf; }));
    preencherOpcoes("marca", todosProdutos.map(function (produto) { return produto.marca; }));
    preencherOpcoes("localizacao", todosProdutos.map(function (produto) { return produto.cidade + " / " + produto.uf; }));
    const parametros = new URLSearchParams(window.location.search);
    document.getElementById("busca").value = parametros.get("busca") || "";
    filtros.addEventListener("submit", function (evento) {
        evento.preventDefault();
        filtrarProdutos();
    });
    filtros.addEventListener("reset", function (evento) {
        evento.preventDefault();
        filtros.querySelectorAll("input, select").forEach(function (campo) {
            campo.value = campo.id === "ordenacao" ? "padrao" : "";
        });
        filtrarProdutos();
    });
    filtrarProdutos();
}
