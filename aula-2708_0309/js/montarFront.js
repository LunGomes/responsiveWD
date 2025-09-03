import { produtos } from "./objetos.js";

// Confirmando que o HTML foi carregado
document.addEventListener("DOMContentLoaded", () => {
  // Recuperando os elementos do HTML - passando para o JS
  const elMain = document.querySelector("#gridProdutos");
  const elSelectFiltro = document.querySelector("#filtroCategoria");
  const elBtnBuscar = document.querySelector("#btnBuscar");
  const elTextBuscar = document.querySelector("#txtBuscar");

  // Função para exibir o grid de produtos
  function exibirProdutos(listaProdutos) {
    // Apagando o elemento antes de fazer uma nova busca
    // Dessa forma ele não acumula resultados buscados anteriormente
    elMain.innerHTML = "";

    // Montando mensagem de erro caso não encontre um produto
    if (listaProdutos.length === 0) {
      elMain.innerHTML = `
                <div class="col-12 text-center my-5">
                    <div class="alert alert-warning">
                        <h3>Desculpe, nenhum produto encontrado</h3>
                    </div>                
                </div>
            `;
    } else {
      listaProdutos.forEach((produto) => {
        elMain.innerHTML += `            
        <div class="col-md-6 my-3">
            <div class="card mb-3 p-3">
                <div class="row d-flex align-items-center">
                    <div class="col-md-4 text-center">
                        <img src="${
                          produto.imagem
                        }" class="w-70 rounded-start" alt="${produto.nome}">
                    </div>
                    <div class="col-md-8 text-center text-md-start">
                        <h6>${produto.nome}</h6>
                        <h6>${produto.categoria}</h6>
                        <p>R$ ${produto.preco.toFixed(2)}</p>
                        <a href="" class="btn btn-primary">Comprar agora</a>
                    </div>
                </div>
            </div>
        </div>
            `;
      });
    }
  }

  // função para preencher o filtro de categoria
  function preencherCategorias() {
    const categorias = [...new Set(produtos.map((p) => p.categoria))];
    // console.log(categorias);

    // Colocando o array em ordem alfabética
    categorias.sort();

    // Criar os options e colocar no select
    categorias.forEach((cat) => {
      // criando o option do HTML
      const option = document.createElement("option");
      option.value = cat;
      option.textContent = cat;
      elSelectFiltro.appendChild(option);
    });
  }

  // função para buscar por nome
  function buscarProdutos() {
    const valorBusca = elTextBuscar.value.toLowerCase().trim();

    // Se campo estiver vazio - exibe mensagem e mostra todos os produtos
    if (valorBusca === "") {
      alert("Preencha o campo. Exibindo todos os produtos");
      exibirProdutos(produtos);
    }
    // caso tenha algo preenchido, iremos fazer a busca
    else {
      const encontrados = produtos.filter((p) =>
        p.nome.toLowerCase().includes(valorBusca)
      );
      exibirProdutos(encontrados);
    }
  }

  // Função para buscar por filtro
  elSelectFiltro.addEventListener('change', () => {
    // Pegando o valor que foi selecionado pelo usuário
    const valor = elSelectFiltro.value;
    
    // Fazer um if para ver qual o valor selecionado, só que já temos o TODOS, que retorna TODOS OS PRODUTOS
    // Ele será o meu if, meu else será as outras categorias
    // Para isso usaremos um filter()
    if (valor === 'todos') {
      exibirProdutos(produtos);
    } else {
      const filtrados = produtos.filter(p => p.categoria === valor);
      exibirProdutos(filtrados);
    }


  })

  // eventos

  // Fazer a busca quando clicar
  // Atribuindo um escutador de eventos para quando o click for disparado no botão
  elBtnBuscar.addEventListener("click", buscarProdutos);

  // Fazer a busca quando o enter for pressionado
  elTextBuscar.addEventListener("keypress", (e) => {
    // console.log(e.key);
    if (e.key === 'Enter') {
      buscarProdutos();
    }
  });

  //Chamando as funções
  preencherCategorias();
  exibirProdutos(produtos);
});
