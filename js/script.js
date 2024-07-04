const botao = document.querySelector(".add")
const input = document.querySelector(".input")
const tarefas = document.querySelector(".lista-tarefas")

let listaDeItens = []

function adicionarTarefa() {
    listaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    novasTarefas()
}

function novasTarefas() {
    let novaTarefa = ''


    listaDeItens.forEach((tarefa, index) => {
        novaTarefa = novaTarefa + `
        <li class="${tarefa.concluida && "feito"}">
            <div class="tarefa">
                <p>${tarefa.tarefa}</p>
            </div>
            <div class="itens  ${tarefa.concluida && "feito"}">
                <button onclick="tarefaConcluida(${index})">feita</button>
                <button  onclick="removerTarefa(${index})">remover</button">
            </div>
         </li>
        
        `
    })

    tarefas.innerHTML = novaTarefa

    localStorage.setItem('lista', JSON.stringify(listaDeItens))
}

function removerTarefa(index) {

    listaDeItens.splice(index, 1)

    novasTarefas()
}

function tarefaConcluida(index) {

    listaDeItens[index].concluida = !listaDeItens[index].concluida

    novasTarefas()
}

function recarregarLista() {
    const localStorageTarefas = localStorage.getItem('lista')


    if (localStorageTarefas) {
        listaDeItens = JSON.parse(localStorageTarefas)
    }

    novasTarefas()
}


recarregarLista()
botao.addEventListener('click', adicionarTarefa)