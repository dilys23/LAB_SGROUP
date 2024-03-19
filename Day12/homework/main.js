
const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
const count = document.querySelector(".count-value");
let taskCount = 0;


const displayCount = (taskCount) =>
{
  count.innerText = taskCount;
}

// function createItem(item){
//   itemsArray.push(item);
//   localStorage.setItem('items', JSON.stringify(itemsArray));
//   displayItems(); // Cập nhật giao diện người dùng
//   taskCount++; // Tăng taskCount lên 1
//   displayCount(taskCount); // Hiển thị số lượng nhiệm vụ mới
// }

const taskCheck = document.querySelectorAll(".check-box");

function createItem(item){
  const newItem = { text: item, status: "undone" }; 
  itemsArray.push(newItem);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  displayItems(); 
  taskCount++; 
  displayCount(taskCount);
}

function markAsDone(i) {
  itemsArray[i].status = "done"; 
  localStorage.setItem('items', JSON.stringify(itemsArray));
  displayItems();
}

function markAsUndone(i) {
  itemsArray[i].status = "undone"; 
  localStorage.setItem('items', JSON.stringify(itemsArray)); 
  displayItems();
}

taskCheck.forEach((checkBox, i) => {
    checkBox.addEventListener('change', function() {
        const itemText = this.closest('.item').querySelector('textarea');
        if (this.checked) {
            itemText.style.textDecoration = "line-through";
            markAsDone(i); 
            console.log("done task nè heee");
        } else {
            itemText.style.textDecoration = "none";
            markAsUndone(i); // Đánh dấu task là "undone"
            console.log("undone task nè bà");
        }
    });
});


document.querySelector("#enter").addEventListener("click", () => {
  const item = document.querySelector("#item").value.trim()
  // createItem(item)
  const errors = document.querySelector("#error");
  errors.style.display = "none";
    if (!item) {
      setTimeout(() => {
        errors.style.display = "block";
      }, 200);
    } else {
      createItem(item);
    }
    e.preventDefault();

})

document.querySelector("#item").addEventListener("keypress", (e) => {
  const errors = document.querySelector("#error");
  errors.style.display = "none"; // Sử dụng `errors` thay vì `error`
  if (e.key === "Enter") {
    const item = document.querySelector("#item").value.trim();
    if (!item) {
      setTimeout(() => {
        errors.style.display = "block";
      }, 200);
    } else {
      createItem(item);
     
    }
    e.preventDefault();
  
  }
})



function displayItems(){
  let items = ""
  
  for(let i = 0; i < itemsArray.length; i++){
    const item = itemsArray[i];
    items += `<div class="item">
                <div class="input-controller">
                <input type="checkbox" class="check-box">
                  <textarea disabled>${item.text}</textarea>
                  <div class="edit-controller">
                    <i class=" fa-solid fa-trash deleteBtn"></i>
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



function deleteItem(i){
  itemsArray.splice(i,1)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  // location.reload()
  displayItems(); 
  taskCount--; 
  displayCount(taskCount); 
}

function updateItem(text, i){
  itemsArray[i] = text
  localStorage.setItem('items', JSON.stringify(itemsArray))
  displayItems(); 
}
const error = document.getElementById('error');

// taskCheck.forEach((checkBox) => {
//     checkBox.addEventListener('change', function() {
//         const itemText = this.closest('.item').querySelector('textarea');
//         if (this.checked) {
//             itemText.style.textDecoration = "line-through";
//             console.log("done task")
//         } else {
//             itemText.style.textDecoration = "none";
//             console.log("undone task")
//         }
//     });
// });

  //  taskCount += 1;
  //  displayCount(taskCount);
   
function doneItem(text, i)
{


}

window.onload = function() {
  // displayDate()
  displayItems()
};