// Função para editar a tarefa
function editar(id, txt_tarefa) {
    /*alert('Estamos aqui!')*/

    // Criar um form de edição
    let form = document.createElement('form');
    form.action = '/tarefa_controller.php';
    console.log(form.action);
    form.method = 'post';
    form.className = 'row';

    // Criar um input para entrada do texto
    let inputTarefa = document.createElement('input');
    inputTarefa.type = 'text';
    inputTarefa.name = 'tarefa';
    inputTarefa.className = 'col-9 form-control';
    inputTarefa.value = txt_tarefa;

    // Criar um input hidden para guardar o id da tarefa
    let inputId = document.createElement('input');
    inputId.type = 'hidden';
    inputId.name = 'id';
    inputId.value = id;

    // Criar um button para envio do form
    let button = document.createElement('button');
    button.type = 'submit';
    button.className = 'col-3 btn btn-info';
    button.innerHTML = 'Atualizar';

    // Incluir inputTarefa no form
    form.appendChild(inputTarefa);

    // Incluir inputId no form
    form.appendChild(inputId);

    // Incluir button no form
    form.appendChild(button);

    // Seleciona a div tarefa
    let tarefa = document.getElementById('tarefa_' + id);

    // Limpar o texto da tarefa para inclusão do form
    tarefa.innerHTML = '';

    // Incluir form na página
    tarefa.appendChild(form);  // Usar appendChild em vez de insertBefore
}