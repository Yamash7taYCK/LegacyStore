    const produtos = [
        {id: 1, nome: "Legacy Sport", preco: 199.99, img: "produto1.jpg"},
        {id: 2, nome: "Legacy Street", preco: 149.99, img: "produto2.jpg"},
        {id: 3, nome: "Legacy Runner", preco: 229.99, img: "produto3.jpg"}
    ]

    let carrinho = [];
    let contadorCarrinho = document.querySelector(".contador-carrinho");

        let listaProdutos = document.querySelector(".lista-produtos");
        produtos.forEach(produto => {

            let card = document.createElement("div");
            card.classList.add("produto");
            card.innerHTML = `
                <img src="${produto.img}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <p>R$ ${produto.preco.toFixed(2)}</p>
                <button class="btn-comprar" data-id="${produto.id}">Comprar</button>
            `;
            listaProdutos.appendChild(card);
        })

    let botoesComprar = document.querySelectorAll(".btn-comprar");

    botoesComprar.forEach(botao => {
        botao.addEventListener("click", () => {
            let idProduto = botao.dataset.id;
            let produtoSelecionado = produtos.find(produto => produto.id == idProduto);
            if (!produtoSelecionado) return;
            
                carrinho.push(produtoSelecionado);
                contadorCarrinho.textContent = carrinho.length;

            alert(`Você adicionou ${produtoSelecionado.nome} ao carrinho!`);

        });
    });