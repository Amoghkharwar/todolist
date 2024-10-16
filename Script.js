// Array to store the list of tasks
let tasks = [];
// Function to add a task to the tasks array and return a new array
const addTask = (tasks, task) => [...tasks, task]; // Spread operator to return a new array with the new task added



// Function to display tasks in the UI

const viewTasks = () => {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = ''; // Clear the list before re-rendering
  // Loop through each task and create HTML elements to display them
  tasks.forEach(task => {
    const li = document.createElement('li');
    // Use template literals to generate task HTML with "Toggle" and "Remove" buttons

    li.innerHTML = `
      <span class="${task.completed ? 'completed' : ''}">${task.title}</span>
      <div>
        <button class="toggle-btn">Toggle</button>
        <button class="remove-btn">Remove</button>
      </div>
    `;

    // Toggle completion status when the "Toggle" button is clicked
    li.querySelector('.toggle-btn').onclick = () => {
      // Use the map function to return a new array with the task's completion status toggled
      tasks = tasks.map(t => t.id === task.id ? { ...t, completed: !t.completed } : t);
      viewTasks(); // Re-render the updated tasks
    };

    // Remove the task when the "Remove" button is clicked
    li.querySelector('.remove-btn').onclick = () => {
      // Use filter to remove the task with the matching ID
      tasks = tasks.filter(t => t.id !== task.id);
      viewTasks(); // Re-render the updated tasks
    };
    // Append the new task to the task list in the DOM
    taskList.appendChild(li);
  });
};

// Add a new task when the "Add Task" button is clicked
document.getElementById('addTaskBtn').onclick = () => {
  const taskTitle = document.getElementById('taskInput').value.trim(); // Get the input value and remove extra spaces
  // Do nothing if the input is empty
  if (!taskTitle) return;
  // Create a new task object with an auto-incremented id and completed set to false
  const newTask = { id: tasks.length + 1, title: taskTitle, completed: false };

  // Update the tasks array with the new task
  tasks = addTask(tasks, newTask);
   
  // Re-render the updated task list
  viewTasks();
  // Clear the input field after the task is added
  document.getElementById('taskInput').value = '';

};


