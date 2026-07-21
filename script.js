const addBtn = document.querySelector("#btn");
const input = document.querySelector("#taskInput");
const tasksBody = document.querySelector("#tasksBody");




let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

function renderTasks() {
    tasksBody.innerHTML = '';
    tasks.forEach((task, index) => {
        const tr = document.createElement('tr');
        const tdIndex = document.createElement('td');
        tdIndex.textContent = index + 1;

        const tdTask = document.createElement('td');
        tdTask.textContent = task;

        const tdAction = document.createElement('td');
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.className = 'delete-btn';
        delBtn.dataset.index = index;
        tdAction.appendChild(delBtn);

        tr.appendChild(tdIndex);
        tr.appendChild(tdTask);
        tr.appendChild(tdAction);
        tasksBody.appendChild(tr);
    });
}


tasksBody.addEventListener('click', (e) => {
    const btn = e.target;
    if (!btn.classList.contains('delete-btn')) return;
    const idx = parseInt(btn.dataset.index, 10);
    if (Number.isNaN(idx)) return;
    tasks.splice(idx, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
});

addBtn.addEventListener('click', () => {
    const value = input.value.trim();
    if (!value) return;
    tasks.push(value);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
    input.value = '';
    input.focus();
});

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addBtn.click();
});

renderTasks();





