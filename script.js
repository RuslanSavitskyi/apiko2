let list = [];

const addToList = () => {
  let newTask = document.getElementById('new__task');
  let todoList = document.getElementById('list');
  let item = document.createElement('li');
  
  
  // Add New Task To Item
  item.innerHTML = newTask.value;
  
  // Add Item To List
  todoList.appendChild(item);
  list.push(newTask.value);
  
  //
  newTask.value = '';
}

const moveFromList = () => {
   let todoList = document.getElementById('list');
  
  
   todoList.innerHTML = '';
}
