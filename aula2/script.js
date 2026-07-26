function adicionarTarefa() {

  const inputTarefa = document.getElementById("inputTarefa"); //busca imput tarefa
  const tarefa = inputTarefa.value.trim(); //pega o valor do input e remove espaços em branco no início e no final (trim - remove espaços em branco)
  const mensagem = document.getElementById("mensagem"); //busca a div de mensagem

  //se o valor do input for vazio então mostre uma mensagem de erro
  if (tarefa == "") {
    //mostre uma mensagem de erro
    const mensagemErro = "Digite uma tarefa!";
    mensagem.textContent = mensagemErro; //mostra a mensagem de erro
  } else {
    const mensagemSucesso = "Tarefa adicionada com sucesso!"; //mensagem de tarefa adicionada com sucesso!
    mensagem.textContent = mensagemSucesso; //mostra a mensagem de sucesso

    const listaTarefas = document.getElementById("listaTarefas"); //cria novo item (li) e insere na (lista ul)
    const novaTarefa = document.createElement("li"); //cria li dentro da variável
    novaTarefa.textContent = tarefa; //conteúdo de texto da tarefa
    listaTarefas.appendChild(novaTarefa); //adciona elemento filho, que é o li
  }

  inputTarefa.value = ""; //limpa o input do usuário
}