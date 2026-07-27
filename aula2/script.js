var tarefas = [];

function adicionarTarefa() {

  const inputTarefa = document.getElementById("inputTarefa"); //busca imput tarefa
  var tarefa = inputTarefa.value.trim(); //pega o valor do input e remove espaços em branco no início e no final (trim - remove espaços em branco)
  const mensagem = document.getElementById("mensagem"); //busca a div de mensagem

  //se o valor do input for vazio então mostre uma mensagem de erro
  if (tarefa == "") {
    //mostre uma mensagem de erro
    var mensagemErro = "Digite uma tarefa!";
    mensagem.textContent = mensagemErro; //mostra a mensagem de erro
  } else {
    var mensagemSucesso = "Tarefa adicionada com sucesso!"; //mensagem de tarefa adicionada com sucesso!
    mensagem.textContent = mensagemSucesso; //mostra a mensagem de sucesso
    tarefas.push(tarefa); //adiciona a tarefa no array de tarefas
    renderizarTarefas(); //chama a função renderizarTarefas para atualizar a lista de tarefas
  }

  inputTarefa.value = ""; //limpa o input do usuário
}

function renderizarTarefas() {
  
  const listaTarefas = document.getElementById("listaTarefas"); //cria novo item (li) e insere na (lista ul)
  listaTarefas.innerHTML = ""; //limpa a lista de tarefas antes de renderizar novamente

  //for itens na lista de tarefas
  //1.item inicial (iterador)
  //2. item final (condição)
  //3. se vai de 1 em 1 elemento ou se pula, incremento (passo)

  //for (iterador, condição, incremento-frequência)
  
  var i = 0;
  for (i; i <tarefas.length; i++) {
    let novaTarefa = document.createElement("li"); //cria li dentro da variável
    novaTarefa.textContent = tarefas[i]; //adiciona o texto da tarefa dentro do li
    listaTarefas.appendChild(novaTarefa); //adciona elemento filho, que é o li

  
  }

}