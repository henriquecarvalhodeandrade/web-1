document.addEventListener('DOMContentLoaded', () => {
    // Referências aos elementos do DOM
    const titleInput = document.getElementById('event-title');
    const datetimeInput = document.getElementById('event-datetime');
    const locationInput = document.getElementById('event-location');
    const addEventBtn = document.getElementById('add-event-btn');
    const eventList = document.getElementById('event-list');

    // Funções de ordem superior para gerenciar o localStorage
    const loadEvents = () => JSON.parse(localStorage.getItem('events')) || [];
    const saveEvents = (events) => localStorage.setItem('events', JSON.stringify(events));

    let events = loadEvents();

    // Função auxiliar para formatar a data e hora
    const formatDateTime = (isoString) => {
        if (!isoString) return 'Data não definida';
        const date = new Date(isoString);
        return date.toLocaleString('pt-BR', {
            dateStyle: 'short',
            timeStyle: 'short'
        });
    };

    // Função de ordem superior para criar o elemento de evento na lista
    const createEventElement = (event) => {
        const li = document.createElement('li');
        li.className = 'event-item';
        li.dataset.id = event.id;

        li.innerHTML = `
            <div class="event-details">
                <span class="event-title">${event.title}</span>
                <span class="event-info">🗓️ ${formatDateTime(event.dateTime)}</span>
                <span class="event-info">📍 ${event.location}</span>
            </div>
            <div class="actions">
                <button class="edit-btn">Editar</button>
                <button class="delete-btn">Excluir</button>
            </div>
        `;
        return li;
    };

    // Função para renderizar os eventos
    const renderEvents = () => {
        eventList.innerHTML = '';
        events
            .sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime)) // Ordena por data
            .map(createEventElement)
            .forEach(element => eventList.appendChild(element));
    };

    const saveAndRender = () => {
        saveEvents(events);
        renderEvents();
    };

    // Adiciona um novo evento
    addEventBtn.addEventListener('click', () => {
        const title = titleInput.value.trim();
        const dateTime = datetimeInput.value;
        const location = locationInput.value.trim();

        if (title && dateTime && location) {
            const newEvent = {
                id: Date.now(),
                title,
                dateTime,
                location
            };
            events.push(newEvent);
            saveAndRender();
            titleInput.value = '';
            datetimeInput.value = '';
            locationInput.value = '';
            titleInput.focus();
        } else {
            alert('Por favor, preencha todos os campos do evento.');
        }
    });

    // Ações de editar e excluir
    const editAction = (eventId, eventItem) => {
        const event = events.find(e => e.id === eventId);
        const detailsDiv = eventItem.querySelector('.event-details');

        detailsDiv.innerHTML = `
            <input type="text" class="edit-title" value="${event.title}">
            <input type="datetime-local" class="edit-datetime" value="${event.dateTime}">
            <input type="text" class="edit-location" value="${event.location}">
        `;

        const actionButton = eventItem.querySelector('.edit-btn');
        actionButton.textContent = 'Salvar';
        actionButton.style.backgroundColor = '#28a745';

        actionButton.onclick = () => {
            const newTitle = detailsDiv.querySelector('.edit-title').value.trim();
            const newDateTime = detailsDiv.querySelector('.edit-datetime').value;
            const newLocation = detailsDiv.querySelector('.edit-location').value.trim();

            if (newTitle && newDateTime && newLocation) {
                events = events.map(e =>
                    e.id === eventId ? { ...e, title: newTitle, dateTime: newDateTime, location: newLocation } : e
                );
                saveAndRender();
            }
        };
    };

    const deleteAction = (eventId) => {
        if (confirm('Tem certeza de que deseja excluir este evento?')) {
            events = events.filter(event => event.id !== eventId);
            saveAndRender();
        }
    };

    // Função de ordem superior que delega a ação correta (editar ou excluir)
    const handleAction = (actionSelector, actionFn) => (event) => {
        if (event.target.matches(actionSelector)) {
            const eventItem = event.target.closest('.event-item');
            const eventId = parseInt(eventItem.dataset.id, 10);
            actionFn(eventId, eventItem);
        }
    };

    // Adiciona os listeners usando a função de ordem superior
    eventList.addEventListener('click', handleAction('.edit-btn', editAction));
    eventList.addEventListener('click', handleAction('.delete-btn', deleteAction));
    
    // Renderização inicial
    renderEvents();
});