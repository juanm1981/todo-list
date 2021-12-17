import { startStorage, emptyDefaults } from "./functions";
import { renderInbox, } from "./inbox";

const renderUi = () => {
    const container = document.querySelector('#container');
    renderFooter();
    renderHeader();
    renderSidebar();
    renderInbox();
}
//--------------------------------------------------------------------------//
const renderFooter = () => {
    const footer = document.createElement('div');
    footer.className = 'footer';
    container.appendChild(footer);
}
//--------------------------------------------------------------------------//
const renderHeader = () => {
    const header = document.createElement('div');
    header.className = 'header';
    container.appendChild(header);
}
//--------------------------------------------------------------------------//
const renderSidebar = () => {
    const sidebar = document.createElement('div');
    sidebar.className = 'sidebar';
    defaultProjects(sidebar);
    const h1projects = document.createElement('h1');
    h1projects.textContent = "Projects";
    sidebar.appendChild(h1projects);
    userProjects(sidebar);
    cleanStorage(sidebar);
    container.appendChild(sidebar);
}
const defaultProjects = (sidebar) => {
    const dp = document.createElement('div');
    dp.className = 'default-projects-list';
    const inbox = document.createElement('button');
    inbox.className = 'button-sidebar';
    inbox.textContent = "Inbox";
    const today = document.createElement('button');
    today.className = 'button-sidebar';
    today.textContent = "Today";
    const thisweek = document.createElement('button');
    thisweek.className = 'button-sidebar';
    thisweek.textContent = "This Week";
    dp.appendChild(inbox);
    dp.appendChild(today);
    dp.appendChild(thisweek);
    sidebar.appendChild(dp);
}
const userProjects = (sidebar) => {
    const up = document.createElement('div');
    up.className = 'user-projects-list';
    sidebar.appendChild(up);
    const addProject = document.createElement('button');
    addProject.className = 'button-sidebar';
    addProject.textContent = "New Project";
    sidebar.appendChild(addProject);
}
const cleanStorage = (sidebar) => {
    const btn = document.createElement('button');
    btn.className = 'button-sidebar';
    btn.textContent = "Clean storage";
    btn.addEventListener('click', () => {
        emptyDefaults();
    })
    sidebar.appendChild(btn);
}
//--------------------------------------------------------------------------//



//--------------------------------------------------------------------------//
export {
    renderUi,
};