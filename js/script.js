
    
    function adicionarAoCarrinho(produto) {
        var carrinhoAtual = localStorage.getItem('carrinho');
        if (!carrinhoAtual) {
            localStorage.setItem('carrinho', produto);
        } else {
            carrinhoAtual += ', ' + produto;
            localStorage.setItem('carrinho', carrinhoAtual);
        }
        alert('Produto adicionado ao carrinho!');
    }

    
    function exibirCarrinho() {
        var carrinhoItens = localStorage.getItem('carrinho');
        if (carrinhoItens) {
            document.getElementById('carrinho-itens').innerHTML = '<p>' + carrinhoItens + '</p>';
        }
    }

    
    function configurarPaginaCarrinho() {
        exibirCarrinho();
    }

    
    document.addEventListener('DOMContentLoaded', function () {
        if (window.location.pathname.includes('index.html')) {
            configurarPaginaInicial();
        } else if (window.location.pathname.includes('carrinho.html')) {
            configurarPaginaCarrinho();
        }
    });

  
    function concluirCompra() {
        alert('Compra concluída! Obrigado por comprar na Loja Fanfa.');
        localStorage.removeItem('carrinho');
        window.location.href = 'obrigado.html';
    }