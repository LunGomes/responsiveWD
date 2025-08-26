import { produtos } from "./objetos.js";

// Confirmando que o HTML foi carregado
document.addEventListener('DOMContentLoaded', () => {

    // Recuperando os elementos do HTML - passando para o JS
    const elMain = document.querySelector('#gridProdutos');
    const elSelectFiltro = document.querySelector('#filtroCategoria');
    const elBtnBuscar = document.querySelector('#btnBuscar');
    const elTextBuscar = document.querySelector('#txtBuscar');

    // Função para exibir o grid de produtos 
    function exibirProdutos(produtos) {
        produtos.forEach(produto => {
            elMain.innerHTML += `          
            <div class="col-md-6 my-3">
                <div class="card mb-3 p-3">
                    <div class="row d-flez align-items-center">
                        <div class="col-md-4 text-center">
                            <img src="${produto.imagem}" class="w-70 rounded-start" alt="${produto.nome}">
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
    };

    // Função para preencher o filtro de categoria
    function preencherCategoria() {
        const categorias = [...new Set(produtos.map(p => p.categoria))];
        console.log(categorias);
        
        // Colocando o arrya em ordem alfábetica
        categorias.sort();

        // Criar as options e colocar no select 
        categorias.forEach(cat => {
            // Criando o option do HTML
            const option = document.createElement('option');
            option.value = cat;
            option.textContent = cat;
            elSelectFiltro.appendChild(option);
        })

    };

    // Chamando as funções 
    preencherCategoria();
    exibirProdutos(produtos);
});