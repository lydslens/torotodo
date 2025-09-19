document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const addTodoBtn = document.getElementById('add-todo');
    const todoInput = document.getElementById('todo-input');
    const reminderInput = document.getElementById('reminder-input');
    const todoList = document.getElementById('todo-list');

    // Theme switcher
    themeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            // Switch to B&W mode
            document.body.classList.remove('dark-mode');
            document.body.classList.add('bw-mode');
            themeToggle.textContent = 'Toggle Light Mode';
        } else if (document.body.classList.contains('bw-mode')) {
            // Switch to Light mode
            document.body.classList.remove('bw-mode');
            themeToggle.textContent = 'Toggle Dark Mode';
        } else {
            // Switch to Dark mode
            document.body.classList.add('dark-mode');
            themeToggle.textContent = 'Toggle B&W Mode';
        }
    });

    // Add to-do
    addTodoBtn.addEventListener('click', () => {
        const todoText = todoInput.value.trim();
        const reminderValue = reminderInput.value;

        if (todoText !== '') {
            const li = document.createElement('li');

            let taskContent = `<span>${todoText}</span>`;
            if (reminderValue) {
                const reminderDate = new Date(reminderValue);
                taskContent += ` <span class="reminder-text">(Reminder: ${reminderDate.toLocaleString()})</span>`;
            }

            li.innerHTML = taskContent;
            todoList.appendChild(li);

            // Clear inputs
            todoInput.value = '';
            reminderInput.value = '';
        }
    });
});
