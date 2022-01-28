////////////////////
// SELECTORS
////////////////////

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
// const todoDelete = document.querySelector('.trash-btn');
const filterTodo = document.querySelector('.filter-todo');

/////////////////////
// EVENT LISTENERS
/////////////////////

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterTodo.addEventListener('click', filterOption);
/////////////////////
// FUNCTIONS
/////////////////////


function addTodo(event) {
  // prevent form from submitting
  event.preventDefault();
  // toddo div

  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  // create li

  const newTodo = document.createElement('li');
  newTodo.classList.add('todo-item');
  newTodo.innerText = todoInput.value;
  todoInput.value = "";                // empty input value
  todoDiv.appendChild(newTodo);

  // checkMark Button

  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class = "fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  
  todoDiv.appendChild(completedButton);

  // trash Button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  
  todoDiv.appendChild(trashButton);

  // append to the list

  todoList.appendChild(todoDiv);
}

function deleteCheck(event){
  
  const item = event.target;
  // delete todo
  if(item.classList[0] === 'trash-btn'){
    const todo = item.parentElement;
    // animation
    todo.classList.add('fall');
    // todo.remove();
    todo.addEventListener('transitionend', function() {
      todo.remove();
    });
  }
// completed
  if(item.classList[0] === 'complete-btn'){
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
  

}

function filterOption(e){
  const todos = todoList.childNodes;
  todos.forEach(function(todo){
    switch (e.target.value) {
      case "all":
        todo.style.display = 'flex';
        break;
      case "completed":
        if(todo.classList.contains('completed')){
          todo.style.display = 'flex';
        }
        else{
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if(todo.classList.contains('completed')){
          todo.style.display = 'none';
        }
        else{
          todo.style.display = 'flex';
        }
    }
  });
}


