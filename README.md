# Mekka Shopping

Marketplace acadêmico de máquinas e equipamentos industriais, desenvolvido para o PI de Desenvolvimento de Sistemas Web da PUC-Campinas.

## Integrantes

| Nome | RA |
|---|---|
| Thiago Lemes | 26003299 |
| Henrique Sampaio | 26010402 |
| Vinicius Mendes | 26008770 |
| Gabriel Carvalho | 26002682 |

## Como abrir

Abra esta pasta no VS Code e inicie um servidor local pelo arquivo `index.html`. Se a extensão Live Server estiver instalada, use **Open with Live Server**. O `index.html` encaminha para `inicio/mekka.html`.

Não é necessário instalar bibliotecas JavaScript ou executar uma compilação. Use sempre o mesmo endereço e a mesma porta durante os testes, pois os dados da demonstração pertencem ao endereço aberto no navegador.

## Organização

Cada tela tem sua própria pasta com HTML, CSS e JavaScript:

```text
index.html
inicio/
    mekka.html
    mekka.css
    mekka.js
marketplace/
    market.html
    market.css
    market.js
produto/
    produto.html
    produto.css
    produto.js
anunciar/
    anunciar.html
    anunciar.css
    anunciar.js
cadastro/
    cadastro.html
    cadastro.css
    cadastro.js
login/
    login.html
    login.css
    login.js
recuperar-senha/
    recuperar-senha.html
    recuperar-senha.css
    recuperar-senha.js
privacidade/
    privacidade.html
    privacidade.css
    privacidade.js
compartilhado/
    estilos.css
    formularios.css
    comum.js
    dados.js
    cartoes.js
logos/
produtos/
```

A pasta `compartilhado` evita repetir os mesmos estilos e funções. `logos` e `produtos` contêm as imagens. A pasta `outputs`, se presente, contém documentos acadêmicos anteriores e não é necessária para executar o site.

## Funcionalidades

- Navegação entre todas as telas, com cabeçalho e rodapé comuns.
- Página inicial com pesquisa, fabricantes e equipamentos em destaque.
- Marketplace com 12 equipamentos de demonstração.
- Busca por nome, marca ou categoria, sem diferença entre letras maiúsculas e minúsculas ou acentos.
- Filtros combinados por categoria, marca, condição, cidade e faixa de preço.
- Ordenação por menor preço, maior preço e ano mais recente.
- Mensagens para busca sem resultados e intervalo de preço inválido.
- Detalhes do equipamento selecionado e tratamento de identificador inexistente.
- Contato com o vendedor e recuperação de senha simulados.
- Cadastro com validação, confirmação de senha e aceite da demonstração.
- Entrada demonstrativa e acesso como visitante.
- Criação de anúncio com imagem opcional, prévia e armazenamento local.
- Limpeza dos dados da demonstração na página de privacidade.
- Layout adaptável a celular, tablet e computador.

## Limites da demonstração

O projeto usa HTML, CSS e JavaScript puro. Não possui servidor de contas, banco de dados, autenticação real, envio de e-mails ou pagamentos.

Os preços, as condições e as localizações são exemplos acadêmicos. Os anúncios criados pelo formulário ficam apenas neste navegador e não são publicados para outros usuários.

No cadastro, apenas o nome e o e-mail fictícios são guardados em `sessionStorage`. Senhas, nascimento e gênero não são salvos. O login aceita o e-mail cadastrado nesta aba e qualquer senha fictícia com pelo menos 6 caracteres. Isso simula o fluxo da interface; não valida uma identidade real.

Os anúncios ficam em `localStorage` e permanecem após recarregar as páginas. A imagem deve ser JPG, PNG ou WebP e ter até 500 KB. Se o espaço do navegador estiver cheio ou bloqueado, o formulário apresenta uma mensagem e mantém os campos preenchidos.

Use informações fictícias durante a apresentação.

## Como explicar o JavaScript

O código está sem comentários e usa funções pequenas com nomes em português. Os arquivos são carregados com `defer`, para executar depois da leitura do HTML.

| Arquivo | O que explicar |
|---|---|
| `compartilhado/dados.js` | `produtos` é uma lista de objetos. Cada objeto tem nome, preço, imagem e outras informações de um equipamento. `obterProdutos()` junta essa lista aos anúncios locais. |
| `compartilhado/cartoes.js` | `mostrarProdutos()` copia o modelo de cartão do HTML, preenche os textos e a imagem e coloca o cartão na lista da página. |
| `compartilhado/comum.js` | Reúne formatação de preço, mensagens, validação dos campos e leitura da sessão. Também atualiza o nome no cabeçalho e permite sair. |
| `inicio/mekka.js` | Escolhe os oito primeiros equipamentos para exibir em destaque. A pesquisa da página inicial usa um formulário HTML. |
| `marketplace/market.js` | Lê os campos, usa `filter()` para selecionar equipamentos e `sort()` para ordená-los. Em seguida, chama `mostrarProdutos()`. |
| `produto/produto.js` | Lê o `id` da URL, procura o objeto com `find()` e preenche os detalhes. Também simula o contato. |
| `cadastro/cadastro.js` | Compara as senhas, valida o formulário e guarda apenas nome e e-mail fictícios na sessão. |
| `login/login.js` | Confere o e-mail demonstrativo e inicia uma sessão local, ou permite entrar como visitante. |
| `recuperar-senha/recuperar-senha.js` | Valida o e-mail e mostra uma mensagem de recuperação simulada. |
| `anunciar/anunciar.js` | Lê a imagem com `FileReader`, monta um objeto com os campos e salva a lista de anúncios no navegador. |
| `privacidade/privacidade.js` | Remove somente as chaves usadas por este projeto no armazenamento do navegador. |

Conceitos principais para estudar:

- `const` e `let`: guardam valores; `let` permite atribuir outro valor depois.
- Objetos: agrupam as informações de um equipamento.
- Arrays: guardam listas, como o catálogo de produtos.
- `if`: escolhe o que executar conforme uma condição.
- Funções: agrupam instruções para uma tarefa específica.
- `addEventListener`: executa uma função quando acontece um clique ou envio de formulário.
- `preventDefault`: impede o envio tradicional do formulário, permitindo tratar a ação na própria página.
- `forEach`: percorre uma lista; `map` cria uma lista de valores; `filter` seleciona itens; `find` encontra um item; `sort` ordena.
- `textContent`: insere o texto como texto, sem interpretar o que foi digitado como HTML.
- `URLSearchParams`: lê informações da URL, como `?id=cat-320`.
- `JSON.stringify` e `JSON.parse`: convertem os dados para texto e de volta, porque o armazenamento do navegador guarda texto.
- `try` e `catch`: permitem mostrar uma mensagem caso o navegador não consiga ler ou salvar os dados.

## Roteiro de apresentação

1. Abrir a página inicial e pesquisar por `usinagem`.
2. Limpar os filtros, combinar categoria e condição e ordenar por preço.
3. Abrir uma oferta e simular uma mensagem ao vendedor.
4. Mostrar que senhas diferentes impedem o cadastro; corrigir e entrar na demonstração.
5. Criar um anúncio, abrir seus detalhes e recarregar a página para mostrar a persistência local.
6. Encontrar o anúncio pelo filtro de marca e apagar os dados pela página de privacidade.
7. Diminuir a janela para mostrar a adaptação ao celular.

## Identidade visual e estrutura

O site mantém a identidade preta e dourada. O HTML utiliza elementos como `header`, `nav`, `main`, `section`, `article`, `figure`, `form` e `footer`, além de rótulos para os campos. Todas as páginas têm `lang="pt-BR"`, título, descrição e configuração de viewport.

Para a entrega do site, inclua o `index.html`, as pastas das telas, `compartilhado`, `logos`, `produtos` e este README.
