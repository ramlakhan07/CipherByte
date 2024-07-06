function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskBody = document.getElementById('taskBody');
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const timestamp = new Date().toLocaleString();

    const taskRow = document.createElement('tr');
    taskRow.innerHTML = `
        <td>${taskText}</td>
        <td>${timestamp}</td>
        <td><button class="complete-btn" onclick="completeTask(this)">Complete</button></td>
    `;
    taskBody.appendChild(taskRow);

    taskInput.value = "";
    document.getElementById('congratulationsMessage').style.display = 'none';
}

function completeTask(element) {
    const completedBody = document.getElementById('completedBody');
    const taskRow = element.parentNode.parentNode;
    
    const taskText = taskRow.children[0].textContent;
    const completionTimestamp = new Date().toLocaleString();

    const completedRow = document.createElement('tr');
    completedRow.innerHTML = `
        <td class="completed">${taskText}</td>
        <td>${completionTimestamp}</td>
    `;
    completedBody.appendChild(completedRow);

    taskRow.remove();
    
    checkAllTasksCompleted();
}

function checkAllTasksCompleted() {
    const taskBody = document.getElementById('taskBody');
    if (taskBody.children.length === 0) {
        document.getElementById('congratulationsMessage').style.display = 'block';
    }
}
