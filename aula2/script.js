function adicionarTarefa() {
        let mensagem = "Tarefa adicionada com sucesso!";
        
        let inputTarefa = document.getElementById("inputTarefa"); //busca imput tarefa
        let tarefa = inputTarefa.value; //pega o que é escrito na caixa.
        document.getElementById("mensagem").textContent = mensagem; //

        let listaTarefas = document.getElementById("listaTarefas"); //pega o elemento ul
        let novaTarefa = document.createElement("li"); //cria li dentro da variável

        novaTarefa.textContent = tarefa; //conteúdo de texto da tarefa

        listaTarefas.appendChild(novaTarefa); //adciona elemento filho, que é o li
        
        inputTarefa.value = ""; //limpa campo
    }