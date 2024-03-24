
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [];


function renderTarefas() {
    listElement.innerHTML = '';

    tarefas.map((todo)=>{
        let liElement = document.createElement("li");
        let tarefaText = document.createTextNode(todo);

        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");

        let linkText = document.createTextNode("Excluir");
        linkElement.appendChild(linkText);

        let posicao = tarefas.indexOf(todo);

        linkElement.setAttribute("onclick", `deletarTarefas(${posicao})`);

        liElement.appendChild(tarefaText);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);
    })
}

renderTarefas();

// Função de adicionar a lista de tarefas
function adicionarTarefas(){
    if(inputElement.value === ''){ // Se não digitou nada no input
        alert("Digite alguma tarefa");
        return false;
    }else{
        let novaTarefa = inputElement.value;

        tarefas.push(novaTarefa);
        inputElement.value = ''; 
        
        renderTarefas();
        salvarDados();
    }
}

buttonElement.onclick = adicionarTarefas;

function deletarTarefas(posicao){
    tarefas.splice(posicao, 1);
    renderTarefas();
    salvarDados();
}

function salvarDados() {
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas))

}