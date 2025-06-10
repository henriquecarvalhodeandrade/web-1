document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Função de ordem superior para carregar tarefas do JSON
    const loadTasks = () => JSON.parse(localStorage.getItem('tasks')) || [];

    // Função de ordem superior para salvar tarefas em JSON
    const saveTasks = (tasks) => localStorage.setItem('tasks', JSON.stringify(tasks));

    let tasks = loadTasks();

    // Função de ordem superior que retorna uma função para criar um elemento de tarefa
    const createTaskElement = (task) => {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.dataset.id = task.id;

        const span = document.createElement('span');
        span.textContent = task.text;

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'actions';

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Editar';
        editBtn.className = 'edit-btn';

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Excluir';
        deleteBtn.className = 'delete-btn';

        actionsDiv.append(editBtn, deleteBtn);
        li.append(span, actionsDiv);

        return li;
    };

    // Função de ordem superior para renderizar as tarefas na tela
    const renderTasks = () => {
        taskList.innerHTML = '';
        tasks.map(createTaskElement).forEach(element => taskList.appendChild(element));
    };

    // Função de ordem superior que retorna um manipulador de eventos
    const handleAction = (action) => (event) => {
        const target = event.target;
        const taskItem = target.closest('.task-item');
        if (!taskItem) return;

        const taskId = parseInt(taskItem.dataset.id, 10);
        action(taskId, taskItem);
    };

    // Ações específicas
    const editTaskAction = (taskId, taskItem) => {
        const taskText = taskItem.querySelector('span');
        const newText = prompt('Edite sua tarefa:', taskText.textContent);
        if (newText !== null && newText.trim() !== '') {
            tasks = tasks.map(task =>
                task.id === taskId ? { ...task, text: newText.trim() } : task
            );
            saveAndRender();
        }
    };

    const deleteTaskAction = (taskId) => {
        if (confirm('Tem certeza que deseja excluir esta tarefa?')) {
            tasks = tasks.filter(task => task.id !== taskId);
            saveAndRender();
        }
    };

    const saveAndRender = () => {
        saveTasks(tasks);
        renderTasks();
    };

    addTaskBtn.addEventListener('click', () => {
        const text = taskInput.value.trim();
        if (text !== '') {
            const newTask = {
                id: Date.now(),
                text: text,
            };
            tasks.push(newTask);
            saveAndRender();
            taskInput.value = '';
            taskInput.focus();
        }
    });

    taskList.addEventListener('click', handleAction((taskId, taskItem) => {
        if (event.target.classList.contains('edit-btn')) {
            editTaskAction(taskId, taskItem);
        }
        if (event.target.classList.contains('delete-btn')) {
            deleteTaskAction(taskId);
        }
    }));

    // Renderização inicial
    renderTasks();
});