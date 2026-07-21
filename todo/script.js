// Task Manager Application
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const totalTasksSpan = document.getElementById('totalTasks');
const completedTasksSpan = document.getElementById('completedTasks');
const pendingTasksSpan = document.getElementById('pendingTasks');
const currentDateElement = document.getElementById('currentDate');

// Initialize: Load tasks from localStorage and display current date
document.addEventListener('DOMContentLoaded', () => {
    displayCurrentDate();
    loadTasks();
    updateStats();
});

// Display current date
function displayCurrentDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date().toLocaleDateString('en-US', options);
    currentDateElement.textContent = today;
}

// Add task on button click or Enter key
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    const task = {
        id: Date.now(),
        text: taskText,
        completed: false,
        isNew: true
    };
    
    // Get existing tasks
    let tasks = getTasks();
    tasks.push(task);
    
    // Save to localStorage
    saveTasks(tasks);
    
    // Clear input
    taskInput.value = '';
    taskInput.focus();
    
    // Reload display
    loadTasks();
    updateStats();
}

// Load tasks from localStorage and display them
function loadTasks() {
    const tasks = getTasks();
    taskList.innerHTML = '';
    
    if (tasks.length === 0) {
        taskList.innerHTML = '<div class="empty-state">No tasks yet. Add one to get started! 🚀</div>';
        return;
    }
    
    tasks.forEach(task => {
        const taskElement = createTaskElement(task);
        taskList.appendChild(taskElement);
    });
}

// Create a task element
function createTaskElement(task) {
    const div = document.createElement('div');
    div.className = 'task-item';
    
    // Set color based on status
    if (task.completed) {
        div.classList.add('completed');
    } else if (task.isNew) {
        div.classList.add('new');
    } else {
        div.classList.add('pending');
    }
    
    // Create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleTask(task.id));
    
    // Create task text
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = task.text;
    
    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-delete';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteTask(task.id));
    
    // Append all elements
    div.appendChild(checkbox);
    div.appendChild(span);
    div.appendChild(deleteBtn);
    
    return div;
}

// Toggle task completion status
function toggleTask(id) {
    let tasks = getTasks();
    tasks = tasks.map(task => {
        if (task.id === id) {
            task.completed = !task.completed;
            task.isNew = false; // Mark as not new when toggled
        }
        return task;
    });
    saveTasks(tasks);
    loadTasks();
    updateStats();
}

// Delete a task
function deleteTask(id) {
    if (confirm('Are you sure you want to delete this task?')) {
        let tasks = getTasks();
        tasks = tasks.filter(task => task.id !== id);
        saveTasks(tasks);
        loadTasks();
        updateStats();
    }
}

// Get tasks from localStorage
function getTasks() {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

// Save tasks to localStorage
function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Update statistics
function updateStats() {
    const tasks = getTasks();
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;
    
    totalTasksSpan.textContent = total;
    completedTasksSpan.textContent = completed;
    pendingTasksSpan.textContent = pending;
}
