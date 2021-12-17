import { compareAsc, format } from 'date-fns'
const fns = require('date-fns')

//constructor de tareas.
function Task() {
    this.value = document.getElementById('input-task').value,
        this.date = fns.format(fns.endOfDay(new Date()), 'yyyy-MM-dd');
}
function createTask() {
    return new Task();
}
//agrego una task al storage de defaults.
function addTaskToDefaults(task) {
    let arr = JSON.parse(localStorage.getItem("default-tasks"));
    arr.push(task);
    localStorage.setItem("default-tasks", JSON.stringify(arr));
    console.log(localStorage);
}
//rendereo la lista de tasks.
function renderTasks(...args) {
    if (args.length < 1) {
        const content = document.querySelector(".content");
        const list = document.createElement('div');
        list.className = 'default-tasks'
        let arr = JSON.parse(localStorage.getItem("default-tasks"));
        fillList(arr, list);
        content.prepend(list);
    }
    if (args.length > 0) {
        const list = document.createElement('div');
        list.className = 'default-tasks'
        let arr = JSON.parse(localStorage.getItem("default-tasks"));
        fillList(arr, list);
        args[0].appendChild(list);
    }
}

//lleno la lista a renderear dado el array del storage y la lista targetada por parametros.
function fillList(arr, list) {
    let idx = 0;
    arr.forEach(e => {
        let task = document.createElement('button');
        let date = document.createElement('button');
        task.addEventListener('click', () => {
            deleteTask(task);
            refreshTasks();
        })
        date.addEventListener('click', () => {
            deleteTask(task);
            refreshTasks();
        })
        task.className = 'button-task';
        date.className = 'button-date';
        task.textContent = (e.value);
        date.textContent = (e.date);
        task.id = "dtask" + idx.toString();
        date.id = "dtask" + idx.toString();
        list.appendChild(task);
        list.appendChild(date);
        idx++;
    });
}

//Cuando se deleteo/agrego algo de Storage, llamo esto para actualizar la lista renderada.
function refreshTasks() {
    let list = document.querySelector(".default-tasks");
    if (list != null) {
        const e = document.querySelector(".default-tasks")
        e.parentElement.removeChild(e);
        renderTasks();
    }
}
//borro la task clickeada y actualizo el contenido del storage.
function deleteTask(task) {
    let arr = JSON.parse(localStorage.getItem("default-tasks"));
    arr.forEach(e => {
        if (e.value === task.textContent) {
            arr.splice(arr.indexOf(e), 1);
        }
    })
    localStorage.setItem("default-tasks", JSON.stringify(arr));
}

//inicializo el storage con los arrays correspondientes al inicio del programa.
function startStorage() {
    if (localStorage.getItem("default-tasks") === null) {
        let arr1 = [];
        localStorage.setItem("default-tasks", JSON.stringify(arr1));
    }
    if (localStorage.getItem("custom-tasks") === null) {
        let arr2 = [];
        localStorage.setItem("custom-tasks", JSON.stringify(arr2));
    }
}

//clean up del storage para testing.
function emptyDefaults() {
    let arr = [];
    localStorage.setItem("default-tasks", JSON.stringify(arr))
    console.log(localStorage);
}




export {
    createTask,
    addTaskToDefaults,
    startStorage,
    emptyDefaults,
    renderTasks,
    refreshTasks,
}