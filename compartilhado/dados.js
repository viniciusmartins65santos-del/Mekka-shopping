const produtos = [
    {
        id: "cat-320", nome: "Escavadeira Caterpillar 320", marca: "Caterpillar",
        categoria: "Construção", condicao: "Novo", ano: 2025, preco: 850000,
        cidade: "São Paulo", uf: "SP", imagem: "../produtos/escavadeira-cat.png",
        descricao: "Escavadeira hidráulica para trabalhos de movimentação de terra. Equipamento apresentado como exemplo no catálogo do projeto."
    },
    {
        id: "bobcat-s595", nome: "Minicarregadeira Bobcat S595", marca: "Bobcat",
        categoria: "Construção", condicao: "Seminovo", ano: 2023, preco: 250000,
        cidade: "Campinas", uf: "SP", imagem: "../produtos/carregadeira-bobcat.png",
        descricao: "Minicarregadeira para movimentação de materiais e apoio em obras. Anúncio demonstrativo para explorar a busca e o contato."
    },
    {
        id: "haas-vf2", nome: "Centro de usinagem Haas VF-2", marca: "Haas",
        categoria: "Usinagem", condicao: "Novo", ano: 2026, preco: 450000,
        cidade: "São Paulo", uf: "SP", imagem: "../produtos/usinagem-haas.png",
        descricao: "Centro de usinagem para produção de peças industriais. As condições e o preço deste anúncio são exemplos acadêmicos."
    },
    {
        id: "makino-v56", nome: "Centro de usinagem Makino V56i", marca: "Makino",
        categoria: "Usinagem", condicao: "Seminovo", ano: 2024, preco: 400000,
        cidade: "Sorocaba", uf: "SP", imagem: "../produtos/usinagem-makino.png",
        descricao: "Equipamento de usinagem para aplicações industriais. Exemplo de uma oportunidade de reaproveitamento de maquinário."
    },
    {
        id: "yale", nome: "Empilhadeira Yale", marca: "Yale",
        categoria: "Movimentação", condicao: "Usado", ano: 2021, preco: 95000,
        cidade: "Campinas", uf: "SP", imagem: "../produtos/empilhadeira-yale.png",
        descricao: "Empilhadeira para movimentação de cargas em estoques e operações industriais. Dados de demonstração."
    },
    {
        id: "jlg", nome: "Plataforma elevatória JLG", marca: "JLG",
        categoria: "Movimentação", condicao: "Seminovo", ano: 2023, preco: 78000,
        cidade: "Curitiba", uf: "PR", imagem: "../produtos/plataforma-JLG.png",
        descricao: "Plataforma elevatória para atividades de acesso em altura. Anúncio de exemplo para a apresentação do projeto."
    },
    {
        id: "compair", nome: "Compressor de ar CompAir", marca: "CompAir",
        categoria: "Peças e manutenção", condicao: "Usado", ano: 2020, preco: 32000,
        cidade: "Jundiaí", uf: "SP", imagem: "../produtos/compressor.de.ar-compair.png",
        descricao: "Compressor de ar para apoio em operações industriais. Exemplo de equipamento usado disponível no catálogo acadêmico."
    },
    {
        id: "weg", nome: "Transformador WEG", marca: "WEG",
        categoria: "Energia", condicao: "Novo", ano: 2026, preco: 115000,
        cidade: "Joinville", uf: "SC", imagem: "../produtos/Transformador-weg.png",
        descricao: "Transformador para instalações elétricas industriais. Imagem e dados utilizados para demonstrar o marketplace."
    },
    {
        id: "bosch", nome: "Motor elétrico Bosch", marca: "Bosch",
        categoria: "Energia", condicao: "Seminovo", ano: 2024, preco: 14500,
        cidade: "Campinas", uf: "SP", imagem: "../produtos/gerador-bosch.png",
        descricao: "Motor elétrico apresentado como exemplo na categoria de energia. As características comerciais são demonstrativas."
    },
    {
        id: "karcher", nome: "Lavadora de alta pressão Kärcher", marca: "Kärcher",
        categoria: "Limpeza", condicao: "Novo", ano: 2025, preco: 8200,
        cidade: "São Paulo", uf: "SP", imagem: "../produtos/lavadora-karcher.png",
        descricao: "Lavadora de alta pressão para limpeza de equipamentos e áreas de trabalho. Anúncio fictício do projeto."
    },
    {
        id: "lincoln", nome: "Sistema de lubrificação Lincoln", marca: "Lincoln",
        categoria: "Peças e manutenção", condicao: "Usado", ano: 2022, preco: 6800,
        cidade: "Belo Horizonte", uf: "MG", imagem: "../produtos/lubrificadora-lincoln.png",
        descricao: "Sistema de lubrificação para manutenção de máquinas. Exemplo de componente para reaproveitamento industrial."
    },
    {
        id: "wacker", nome: "Placa vibratória Wacker Neuson", marca: "Wacker Neuson",
        categoria: "Construção", condicao: "Seminovo", ano: 2023, preco: 18500,
        cidade: "Sorocaba", uf: "SP", imagem: "../produtos/placa-wacker.png",
        descricao: "Placa vibratória para compactação de solo. Equipamento ilustrativo para a demonstração do catálogo."
    }
];

function lerAnuncios() {
    try {
        const anuncios = JSON.parse(localStorage.getItem("mekkaAnuncios")) || [];
        if (!Array.isArray(anuncios)) {
            return [];
        }
        return anuncios.filter(function (anuncio) {
            return anuncio && typeof anuncio.id === "string" && typeof anuncio.nome === "string"
                && typeof anuncio.marca === "string" && typeof anuncio.categoria === "string"
                && typeof anuncio.cidade === "string" && typeof anuncio.uf === "string"
                && typeof anuncio.condicao === "string" && typeof anuncio.descricao === "string"
                && typeof anuncio.imagem === "string" && Number.isFinite(anuncio.preco)
                && Number.isFinite(anuncio.ano);
        });
    } catch {
        return [];
    }
}

function obterProdutos() {
    return produtos.concat(lerAnuncios());
}
