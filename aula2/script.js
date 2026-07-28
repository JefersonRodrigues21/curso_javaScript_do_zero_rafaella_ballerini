let tarefas = [];

function adicionarTarefa() {

  const inputTarefa = document.getElementById("inputTarefa"); //busca imput tarefa
  let tarefa = inputTarefa.value.trim(); //pega o valor do input e remove espaços em branco no início e no final (trim - remove espaços em branco)
  const mensagem = document.getElementById("mensagem"); //busca a div de mensagem

  //se o valor do input for vazio então mostre uma mensagem de erro
  if (tarefa == "") {
    //mostre uma mensagem de erro
    let mensagemErro = "Digite uma tarefa!";
    mensagem.textContent = mensagemErro; //mostra a mensagem de erro
  } else {
    let mensagemSucesso = "Tarefa adicionada com sucesso!"; //mensagem de tarefa adicionada com sucesso!
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
  
  for (let i = 0; i <tarefas.length; i++) {
    let novaTarefa = document.createElement("li"); //cria li dentro da variável
    novaTarefa.textContent = tarefas[i]; //adiciona o texto da tarefa dentro do li

    let botaoRemover = document.createElement('button'); //cria botão de remover
    botaoRemover.className = "remover"; //adiciona classe ao botão de remover
    botaoRemover.textContent = "Remover"; //adiciona texto ao botão de remover
    botaoRemover.onclick = () => removerTarefa(i); //adiciona evento de click ao botão de remover/ "=>" para chamar a função removerTarefa

    let botaoEditar = document.createElement('button'); //cria botão de editar
    botaoEditar.className = 'editar'; //adiciona classe ao botão de editar
    botaoEditar.textContent = 'Editar'; //adiciona texto ao botão de editar
    botaoEditar.onclick = () => editarTarefa(i); //adiciona evento de click ao botão de editar

    novaTarefa.appendChild(botaoRemover); //adiciona o botão de remover dentro do li
    novaTarefa.appendChild(botaoEditar); //adiciona o botão de editar dentro do li
    listaTarefas.appendChild(novaTarefa); //adciona elemento filho, que é o li
  }
}

function removerTarefa(i) {
  tarefas.splice(i, 1); //remove a tarefa do array de tarefas
  renderizarTarefas(); //chama a função renderizarTarefas para atualizar a lista de tarefas
}

function editarTarefa(i) {
  let tarefaEditada = prompt('Edite a tarefa:');
  if (tarefaEditada.trim() !== "") {
    tarefas[i] = tarefaEditada
    renderizarTarefas(); //chama a função renderizarTarefas para atualizar a lista de tarefas
  }
}

function limparLista() {
  tarefas.length = 0; //limpa a lista de tarefas
  renderizarTarefas(); //chama a função renderizarTarefas para atualizar a lista de tarefas
  const mensagem = document.getElementById("mensagem"); //busca a div de mensagem
  mensagem.textContent = "Lista de tarefas limpa com Sucesso!"; //mostra a mensagem de sucesso
}