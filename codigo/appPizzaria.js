document.addEventListener("DOMContentLoaded", function() {

    function montarPizza() {
        let preco = 0;
        let tamanhoTxt = "Não selecionado.";
        let bordaTxt = "Não selecionado.";
        let saborTxt = "";
        let extraTxt = "Nenhum ingrediente extra selecionado.";
        let extraTxt1 = "";
        let extraTxt2 = "";
        let extraTxt3 = "";
        let extraTxt4 = "";
        let opcaoTxt = "Nenhum ingrediente opicional selecionado.";
        let opcaoTxt1 = "";
        let opcaoTxt2 = "";
        let opcaoTxt3 = "";

       
        
        let saborSelecionado = document.querySelector('input[name="sabor"]:checked');
        let sabor = saborSelecionado ? saborSelecionado.value : '';

        let tamanhoSelecionado = document.querySelector('input[name="tamanho"]:checked');
        let tamanho = tamanhoSelecionado ? tamanhoSelecionado.value : 'padrao';
        if (tamanhoSelecionado) {
            if (tamanhoSelecionado.value === "brotinho") {
                tamanhoTxt = "Brotinho";
            } else if (tamanhoSelecionado.value === "padrao") {
                tamanhoTxt = "Padrão";
            } else if (tamanhoSelecionado.value === "grande") {
                tamanhoTxt = "Grande";
            }
        } else {
            tamanhoTxt = "Padrão";
            tamanho = 'padrao';
        } 
    
        
        if (sabor === 'marguerita') {
            if (tamanho === 'brotinho') {
                preco = 18.75
            } else if (tamanho === 'padrao') {
                preco = 25.00;  
            } else if (tamanho === 'grande') {
                preco = 31.25;
            }
        } else if (sabor === 'calabresa') {
            if (tamanho === 'brotinho') {
                preco = 21.00;
            } else if (tamanho === 'padrao') {
                preco = 28.00;
            } else if (tamanho === 'grande') {
                preco = 35.00;
            }
        }  else if (sabor === 'frangoComCatupiry') {
            if (tamanho === 'brotinho') {
                preco = 22.50;
            } else if (tamanho === 'padrao') {
                preco = 30.00;
            } else if (tamanho === 'grande') {
                preco = 37.50;
            }
        } else if (sabor === 'mussarela') {
            if (tamanho === 'brotinho') {
                preco = 26.25;
            } else if (tamanho === 'padrao') {
                preco = 35.00;
            } else if (tamanho === 'grande') {
                preco = 43.75;
            }
        }   
        
    
        let bordaSelecionada = document.querySelector('input[name="borda"]:checked');
        if (bordaSelecionada) {
            if (bordaSelecionada.value === "semBorda") {
                bordaTxt = "Pizza sem borda";
            }  else if (bordaSelecionada.value === "tradicional") {
                bordaTxt = "Borda tradicional";
            } else if (bordaSelecionada.value === "cheddar") {
                preco += 2;
                bordaTxt = "Recheada com cheddar";
            } else if (bordaSelecionada.value === "catupiry") {
                preco += 3;
                bordaTxt = "Recheada com catupiry";
            }
        } else {
            bordaTxt = "Borda tradicional";
        }
    
        let saborSelecionadoDescricao = document.querySelector('input[name="sabor"]:checked');
        if (saborSelecionadoDescricao && saborSelecionadoDescricao.nextElementSibling) {
            saborTxt = saborSelecionado.nextElementSibling.innerText;
        } else {
            saborTxt = "Nenhum sabor selecionado";
        }
    
        let ingredientesExtras = document.querySelectorAll('input[name="ingredienteX"]:checked');
        ingredientesExtras.forEach(function(ingrediente) {
            if (ingrediente.value === "azeitonaPreta") {
                preco += 3;
                extraTxt1 = '-- Azeitona preta<br>';
                extraTxt = '';
            } else if (ingrediente.value === "queijoExtra") {
                preco += 3;
                extraTxt2 = '-- Queijo extra<br>';
                extraTxt = '';
            } else if (ingrediente.value === "molhoExtra") {
                preco += 5;
                extraTxt3 = '-- Molho extra<br>';
                extraTxt = '';
            } else if (ingrediente.value === "bacon") {
                preco += 4;
                extraTxt4 = '-- Bacon<br>';
                extraTxt = '';
            }
        });
    
        let ingredientesOpicionais = document.querySelectorAll('input[name="ingredienteOp"]:checked');
        ingredientesOpicionais.forEach(function(ingrediente) {
            if (ingrediente.value === "azeitona") {
                opcaoTxt1 = '-- Com azeitona<br>';
                opcaoTxt = '';
            } else if (ingrediente.value === "cebola") {
                opcaoTxt2 = '-- Com cebola<br>';
                opcaoTxt = '';
            } else if (ingrediente.value === "oregano") {
                opcaoTxt3 = '-- Com oregano<br>';
                opcaoTxt = '';
            }
        });

        sessionStorage.setItem('preco', preco.toFixed(2));
        sessionStorage.setItem('tamanhoTxt', tamanhoTxt);
        sessionStorage.setItem('bordaTxt', bordaTxt);
        sessionStorage.setItem('saborTxt', saborTxt);
        sessionStorage.setItem('extras', extraTxt + extraTxt1 + extraTxt2 + extraTxt3 + extraTxt4);
        sessionStorage.setItem('opcionais', opcaoTxt + opcaoTxt1 + opcaoTxt2 + opcaoTxt3);
    
    
        window.location.href = 'http://localhost:4500/pedido';
        
    }

    const button = document.querySelector("#button");
    button.addEventListener('click', montarPizza);

});