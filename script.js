const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')



function newTodo() {
  // alert('New TODO button clicked!')

  // Input to do list //
  var TODO_TEXT = window. prompt("Enter your todo: ");


   // append the todo to the todo list //
  const entry = document.createElement('li');
  entry.appendChild(document.createTextNode(TODO_TEXT));
  list.appendChild(entry)

  // append the checkbox to the todo list /
  var TODO_CHECKBOX = document.createElement("INPUT");
  TODO_CHECKBOX.setAttribute("type", "checkbox");
  TODO_CHECKBOX.setAttribute('id','check')
  entry.appendChild(TODO_CHECKBOX);

  // update item count //
  listItems = list.getElementsByTagName('li');
  itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) +1 ; 
  console.log(typeof itemCountSpan.innerHTML)

  // update unchecked count 
  uncheckedCountSpan.innerHTML = listItems.length ;

}


function Delete() {
  // delete checkbox items //

  li = list.children;

  // console.log(list)
  for (let i =0; i<li.length; i++){

    // console.log("first child", li[i].firstChild)
    // console.log("last child", li[i].lastChild)

    if (li[i].lastChild.checked){

        list.removeChild(li[i])
    
    }

  }


  // update unchecked count 
  listItems = list.getElementsByTagName('li');
  uncheckedCountSpan.innerHTML = listItems.length ;
 
 }