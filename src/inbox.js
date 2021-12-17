import { compareAsc, format } from 'date-fns'
import { endOfDay } from 'date-fns/esm';
import { createTask, addTaskToDefaults, startStorage, refreshTasks, renderTasks } from './functions.js'
const fns = require('date-fns')

const renderInbox = () => {
    const content = document.createElement('div');
    content.className = 'content';
    content.id = 'content';
    const add = document.createElement('button');
    add.className = 'button-add-task';
    add.id = 'button-add-task';
    add.textContent = "Add new task";
    add.addEventListener('click', () => {
        toggleTaskButtons(add, input, accept, cancel);
    })
    const input = document.createElement('input');
    input.className = 'input-task';
    input.id = 'input-task';
    const accept = document.createElement('button');
    accept.className = 'button-accept-task';
    accept.textContent = "Accept";
    accept.addEventListener('click', () => {
        toggleTaskButtons(add, input, accept, cancel);
        var task = createTask();
        addTaskToDefaults(task);
        refreshTasks();
    })
    const cancel = document.createElement('button');
    cancel.className = 'button-cancel-task';
    cancel.textContent = "Cancel";
    cancel.addEventListener('click', () => {
        toggleTaskButtons(add, input, accept, cancel);
    })
    renderTasks(content);
    content.appendChild(add);
    content.appendChild(input);
    content.appendChild(accept);
    content.appendChild(cancel);
    container.appendChild(content);
}

const toggleTaskButtons = (add, input, accept, cancel) => {
    add.classList.toggle('add-task-active');
    input.classList.toggle('input-active');
    accept.classList.toggle('accept-active');
    cancel.classList.toggle('cancel-active');
}



//--------------------------------------------------------------------------------------//

export {
    renderInbox,
};