// //local storage key
// const STORAGE_KEY = "tasks-storage-key";

// // variables object
// const el = {
//   form: document.querySelector(".form"),
//   input: document.querySelector(".user-input"),
//   list: document.querySelector(".list"),
//   date: document.querySelector(".date"),
//   time: document.querySelector(".time"),
// };

// //Create ID

// const createId = () =>
//   `${Math.floor(Math.random() * 10000)}${new Date().getTime()}`;

// //variable of empty array that gets new task
// let taskList = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]");

// function makeNewTask() {
//   const data = {
//     id: createId(),
//     taskNew: el.input.value,
//     taskDate: el.date.value,
//     taskTime: el.time.value,
//   };

//   return data;
// }

// //function that creates new tasks with date and time
// function display() {
//   const tasks = document.createElement("div");

//   data = makeNewTask();

//   let newtask = tasks.innerHTML = `
//          <div class="task-content">
//           <div class="task" data-id="${data.id}">
//           <div class="new-task-created">${data.taskNew}</div>
//           <label class="due-date">${data.taskDate}</label>
//           <label class="due-time">${data.taskTime}</label>
//       </div>
  
//       <div class="action-buttons">
//           <button onclick="editItem(event)" class="edit" data-id="${data.id}">Edit</button>
//           <button onclick="deleteItem(event)" class="delete" data-id="${data.id}">Delete</button>
//           <button onclick="completeItem(event)" class="complete" data-id="${data.id}">Complete</button>
//       </div>
//   </div>`;

//   taskList.push(data);
//   console.log(taskList);
//   el.list.appendChild(tasks);
//   storeList();
// }

// //event listner that listens for add button.
// function addTask() {
//   display();
  
// }

// //function that stores task list.
// function storeList() {
//   window.localStorage.setItem(STORAGE_KEY, JSON.stringify(taskList));
// }

// //function that removes task from array with delete button.

// function deleteItem() {
//   let removeitem = document.querySelector(".task-content");
//   removeitem.parentNode.removeChild(removeitem);
//   window.localStorage.removeItem(STORAGE_KEY);
// }

// //function that removes stored task when deleted.

// //function that that edits tasks with date and time.
// function editItem() {}

// //function that that completes task.
// function completeItem(event) {
//   const element = event.target.closest(".task-content");
//   console.log(element);
//   let taskItem = element.querySelector(".new-task-created");
//   let dateItem = element.querySelector(".due-date");
//   let timeItem = element.querySelector(".due-time");
//   // style..
//   taskItem.style.textDecoration = "line-through";
//   dateItem.style.textDecoration = "line-through";
//   timeItem.style.textDecoration = "line-through";
// }
const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

document.querySelector("#enter").addEventListener("click", () => {
  const item = document.querySelector("#item")
  createItem(item)
})

document.querySelector("#item").addEventListener("keypress", (e) => {
  if(e.key === "Enter"){
    const item = document.querySelector("#item")
    createItem(item)
  }
})

function displayDate(){
  let date = new Date()
  date = date.toString().split(" ")
  date = date[1] + " " + date[2] + " " + date[3] 
  // document.querySelector("#date").innerHTML = date 
}

function displayItems(){
  let items = ""
  for(let i = 0; i < itemsArray.length; i++){
    items += `<div class="item">
                <div class="input-controller">
                  <textarea disabled>${itemsArray[i]}</textarea>
                  <div class="edit-controller">
                    <i class="fa-solid fa-check deleteBtn"></i>
                    <i class="fa-solid fa-pen-to-square editBtn"></i>
                  </div>
                </div>
                <div class="update-controller">
                  <button class="saveBtn">Save</button>
                  <button class="cancelBtn">Cancel</button>
                </div>
              </div>`
  }
  document.querySelector(".to-do-list").innerHTML = items
  activateDeleteListeners()
  activateEditListeners()
  activateSaveListeners()
  activateCancelListeners()
}

function activateDeleteListeners(){
  let deleteBtn = document.querySelectorAll(".deleteBtn")
  deleteBtn.forEach((dB, i) => {
    dB.addEventListener("click", () => { deleteItem(i) })
  })
}

function activateEditListeners(){
  const editBtn = document.querySelectorAll(".editBtn")
  const updateController = document.querySelectorAll(".update-controller")
  const inputs = document.querySelectorAll(".input-controller textarea")
  editBtn.forEach((eB, i) => {
    eB.addEventListener("click", () => { 
      updateController[i].style.display = "block"
      inputs[i].disabled = false })
  })
}

function activateSaveListeners(){
  const saveBtn = document.querySelectorAll(".saveBtn")
  const inputs = document.querySelectorAll(".input-controller textarea")
  saveBtn.forEach((sB, i) => {
    sB.addEventListener("click", () => {
      updateItem(inputs[i].value, i)
    })
  })
}

function activateCancelListeners(){
  const cancelBtn = document.querySelectorAll(".cancelBtn")
  const updateController = document.querySelectorAll(".update-controller")
  const inputs = document.querySelectorAll(".input-controller textarea")
  cancelBtn.forEach((cB, i) => {
    cB.addEventListener("click", () => {
      updateController[i].style.display = "none"
      inputs[i].disabled = true
      inputs[i].style.border = "none"
    })
  })
}

function createItem(item){
  itemsArray.push(item.value)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  location.reload()
}

function deleteItem(i){
  itemsArray.splice(i,1)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  location.reload()
}

function updateItem(text, i){
  itemsArray[i] = text
  localStorage.setItem('items', JSON.stringify(itemsArray))
  location.reload()
}

window.onload = function() {
  displayDate()
  displayItems()
};