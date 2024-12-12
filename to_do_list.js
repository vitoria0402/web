// Função para adicionar uma tarefa com prioridade
function adicionarTarefa() {
    const campoTarefa = document.getElementById("idAtv"); // Campo de entrada da tarefa
    const textoTarefa = campoTarefa.value.trim();
    const campoPrioridade = document.getElementById("prioridadeSelect"); // Campo de seleção de prioridade
    const valorPrioridade = campoPrioridade.value; // Valor selecionado no dropdown

    if (textoTarefa === "") {
        alert("Por favor, digite uma tarefa.");
        return;
    }

    const listaTarefas = document.getElementById("taskList");

    // Cria um item de lista para a nova tarefa
    const li = document.createElement("li");
    li.textContent = `${textoTarefa} - Prioridade: ${valorPrioridade}`;
    li.classList.add(`prioridade-${valorPrioridade.toLowerCase()}`); // Classe para estilizar pela prioridade

    // Adiciona um botão para marcar como concluída
    const botaoConcluir = document.createElement("button");
    botaoConcluir.textContent = "Concluir";
    botaoConcluir.onclick = () => li.classList.toggle("concluida");
    li.appendChild(botaoConcluir);

    // Adiciona um botão para remover a tarefa
    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.onclick = () => {
        adicionarAoHistorico(textoTarefa); // Adiciona a tarefa ao histórico
        listaTarefas.removeChild(li);
    };
    li.appendChild(botaoRemover);

    // Adiciona o item à lista de tarefas
    listaTarefas.appendChild(li);

    // Limpa o campo de entrada
    campoTarefa.value = "";
}

// Função para adicionar a tarefa removida ao bloco de histórico
function adicionarAoHistorico(tarefa) {
    const listaRemovidas = document.getElementById("removedTasksList");

    // Cria um novo item na lista de histórico
    const li = document.createElement("li");
    li.textContent = tarefa;
    listaRemovidas.appendChild(li);
}

// Adiciona o evento ao botão "Adicionar"
document.getElementById("addTaskButton").addEventListener("click", adicionarTarefa);

