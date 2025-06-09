function adicionarTarefa() {
                
        let inputTarefa = document.getElementById("inputTarefa"); //busca imput tarefa
        let tarefa = inputTarefa.value; //pega o que é escrito na caixa.
        

        let listaTarefas = document.getElementById("listaTarefas"); //cria novo item (li) e insere na (lista ul)
        let novaTarefa = document.createElement("li"); //cria li dentro da variável
        novaTarefa.textContent = tarefa; //conteúdo de texto da tarefa
        listaTarefas.appendChild(novaTarefa); //adciona elemento filho, que é o li
        
        let mensagemSucesso = "Tarefa adicionada com sucesso!";//mensagem de tarefa adicionada com sucesso!
        document.getElementById("mensagem").textContent = mensagemSucesso; //
        
        inputTarefa.value = ""; //limpa o input do usuário

        //se o valor do input for vazio então mostre uma mensagem de erro
        if (tarefa == "") {
            //mostre uma mensagem de erro
            let mensagemErro = "Digite uma tarefa!";
            document.getElementById("mensagem").textContent = mensagemErro;
        }
    }