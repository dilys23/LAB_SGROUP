

const itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
const count = document.querySelector(".count-value");
let taskCount = 0;
let isEditing = false;

const displayCount = (taskCount) => {
  count.innerText = taskCount;
};

// function createItem(item){
//   itemsArray.push(item);
//   localStorage.setItem('items', JSON.stringify(itemsArray));
//   displayItems(); // Cập nhật giao diện người dùng
//   taskCount++; // Tăng taskCount lên 1
//   displayCount(taskCount); // Hiển thị số lượng nhiệm vụ mới
// }

function createItem(item) {
  const newItem = { text: item, status: "undone" };
  itemsArray.push(newItem);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  displayItems();
  taskCount++;
  displayCount(taskCount);
}

function markAsDone(i) {
  itemsArray[i].status = "done";
  localStorage.setItem("items", JSON.stringify(itemsArray));
  displayItems();
}

function markAsUndone(i) {
  itemsArray[i].status = "undone";
  localStorage.setItem("items", JSON.stringify(itemsArray));
  displayItems();
}
document.querySelector("#enter").addEventListener("click", (e) => {
  const itemInput = document.querySelector("#item");
  const item = itemInput.value.trim();
  const errors = document.querySelector("#error");
  errors.style.display = "none";
  if (!item || isEditing) {
    // setTimeout(() => {
    //   errors.style.display = "block";
    // }, 200);
  } else {
    createItem(item);
    // Xóa nội dung của input sau khi tạo task thành công
    itemInput.value = "";
  }
  e.preventDefault();
});

// Xử lý sự kiện click cho nút "Edit Task"

document.querySelector("#item").addEventListener("keypress", (e) => {
  // e.preventDefault();

  const errors = document.querySelector("#error");
  errors.style.display = "none"; // Sử dụng `errors` thay vì `error`
  if (e.key === "Enter" && !isEditing) {
    // const item = document.querySelector("#item").value.trim();
    const itemInput = document.querySelector("#item");
    const item = itemInput.value.trim();
    if (!item) {
      setTimeout(() => {
        errors.style.display = "block";
      }, 200);
    } else {
      createItem(item);
      itemInput.value = "";
    }
  }
});

function displayItems() {
  let items = "";

  for (let i = 0; i < itemsArray.length; i++) {
    const item = itemsArray[i];
    const checkedAttribute = item.status === "done" ? "checked" : "";
    const textDecoration = item.status === "done" ? "line-through" : "none";

    items += `<div class="item">
                <div class="input-controller">
                <input type="checkbox" class="check-box" ${checkedAttribute}>
                  <textarea disabled style="text-decoration: ${textDecoration};">${item.text}</textarea>
                  <div class="edit-controller">
                    <i class=" fa-solid fa-trash deleteBtn"></i>
                    <i class="fa-solid fa-pen-to-square editBtn"></i>
                  </div>
                </div>
                <div class="update-controller">
                  <button class="saveBtn">Save</button>
                  <button class="cancelBtn">Cancel</button>
                </div>
              </div>`;
  }
  document.querySelector(".to-do-list").innerHTML = items;
  activateDeleteListeners();
  activateEditListeners();
  activateSaveListeners();
  activateCancelListeners();
  addCheckboxListeners();
}

function displayItemDone() {
  let items = "";

  for (let i = 0; i < itemsArray.length; i++) {
    const item = itemsArray[i];
    const checkedAttribute = item.status === "done" ? "checked" : "";
    const textDecoration = item.status === "done" ? "line-through" : "none";

    if (item.status === "done") {
      // Kiểm tra xem task có status là "done" hay không
      items += `<div class="item">
                  <div class="input-controller">
                  <input type="checkbox" class="check-box" ${checkedAttribute}>
                    <textarea disabled style="text-decoration: ${textDecoration};">${item.text}</textarea>
                    <div class="edit-controller">
                      <i class="fa-solid fa-trash deleteBtn"></i>
                      <i class="fa-solid fa-pen-to-square editBtn"></i>
                    </div>
                  </div>
                  <div class="update-controller">
                    <button class="saveBtn">Save</button>
                    <button class="cancelBtn">Cancel</button>
                  </div>
                </div>`;
    }
  }

  document.querySelector(".to-do-list").innerHTML = items;
  activateDeleteListeners();
  activateEditListeners();
  activateSaveListeners();
  activateCancelListeners();
  addCheckboxListeners();
}

document.querySelector(".done").addEventListener("click", () => {
  displayItemDone();
});

function displayItemUnDone() {
  let items = "";

  for (let i = 0; i < itemsArray.length; i++) {
    const item = itemsArray[i];
    const checkedAttribute = item.status === "done" ? "checked" : "";
    const textDecoration = item.status === "done" ? "line-through" : "none";

    if (item.status === "undone") {
      // Kiểm tra xem task có status là "done" hay không
      items += `<div class="item">
                  <div class="input-controller">
                  <input type="checkbox" class="check-box" ${checkedAttribute}>
                    <textarea disabled style="text-decoration: ${textDecoration};">${item.text}</textarea>
                    <div class="edit-controller">
                      <i class="fa-solid fa-trash deleteBtn"></i>
                      <i class="fa-solid fa-pen-to-square editBtn"></i>
                    </div>
                  </div>
                  <div class="update-controller">
                    <button class="saveBtn">Save</button>
                    <button class="cancelBtn">Cancel</button>
                  </div>
                </div>`;
    }
  }

  document.querySelector(".to-do-list").innerHTML = items;
  activateDeleteListeners();
  activateEditListeners();
  activateSaveListeners();
  activateCancelListeners();
  addCheckboxListeners();
}

document.querySelector(".undone").addEventListener("click", () => {
  displayItemUnDone();
});

document.querySelector(".all").addEventListener("click", () => {
  displayItems();
});

function addCheckboxListeners() {
  const taskCheck = document.querySelectorAll(".check-box");
  taskCheck.forEach((checkBox, i) => {
    checkBox.addEventListener("change", function () {
      const itemText = this.closest(".item").querySelector("textarea");
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
}

function activateDeleteListeners() {
  let deleteBtn = document.querySelectorAll(".deleteBtn");
  deleteBtn.forEach((dB, i) => {
    dB.addEventListener("click", () => {
      deleteItem(i);
    });
  });
}
function activateEditListeners() {
  const editBtns = document.querySelectorAll(".editBtn");

  editBtns.forEach((editBtn, i) => {
    editBtn.addEventListener("click", () => {
      // Lấy nội dung của task tương ứng
      const taskText = itemsArray[i].text;

      // Hiển thị nội dung của task lên input tương ứng
      const itemInput = document.querySelector("#item");
      itemInput.value = taskText;

      // Thay đổi nút "Enter" thành nút "Edit Task"
      const enterBtn = document.querySelector("#enter");
      enterBtn.textContent = "Edit Task";
      enterBtn.id = "edit-task";

      const item = itemInput.value.trim();
      isEditing = true;
      const editTaskHandler = function () {
        const errors = document.querySelector("#error");
        errors.style.display = "none";
        if (!item) {
          setTimeout(() => {
            errors.style.display = "block";
          }, 200);
        } else {
          updateItem(itemInput.value, i);
          itemInput.value = "";
          enterBtn.textContent = "Enter";
          enterBtn.id = "enter";
          isEditing = false;
          enterBtn.removeEventListener("click", editTaskHandler);
        }
      };

      enterBtn.addEventListener("click", editTaskHandler);
    });
  });
}

function activateSaveListeners() {
  const saveBtn = document.querySelectorAll(".saveBtn");
  const inputs = document.querySelectorAll(".input-controller textarea");
  saveBtn.forEach((sB, i) => {
    sB.addEventListener("click", () => {
      updateItem(inputs[i].value, i);
    });
  });
}

function activateCancelListeners() {
  const cancelBtn = document.querySelectorAll(".cancelBtn");
  const updateController = document.querySelectorAll(".update-controller");
  const inputs = document.querySelectorAll(".input-controller textarea");
  cancelBtn.forEach((cB, i) => {
    cB.addEventListener("click", () => {
      updateController[i].style.display = "none";
      inputs[i].disabled = true;
      inputs[i].style.border = "none";
    });
  });
}

function deleteItem(i) {
  itemsArray.splice(i, 1);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  // location.reload()
  displayItems();
  taskCount--;
  displayCount(taskCount);
}

function updateItem(text, i) {
  console.log("text: " + text);
  itemsArray[i].text = text;
  console.log("i" + i);
  console.log(itemsArray);
  console.log("itemsArray[i].text: " + itemsArray[i].text + " " + i);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  displayItems();

  const enterBtn = document.querySelector("#edit-task");
  if (enterBtn) {
    enterBtn.textContent = "Enter";
    enterBtn.id = "enter";
  }
}

const error = document.getElementById("error");

// document.querySelector("#edit-task").addEventListener("click", () => {
//   const itemInput = document.querySelector("#item");
//   const item = itemInput.value.trim();
//   const errors = document.querySelector("#error");
//   errors.style.display = "none";
//   if (!item) {
//     setTimeout(() => {
//       errors.style.display = "block";
//     }, 200);
//   } else {
//     // Lấy vị trí của item trong itemsArray
//     const index = itemsArray.findIndex((i) => i.text === item);
//     console.log("---->" + index);
//     if (index !== -1) {
//       updateItem(item, index);
//       // Xóa nội dung của input sau khi chỉnh sửa task thành công
//       itemInput.value = "";
//     } else {
//       console.error("Item not found in itemsArray");
//     }
//   }
// });

window.onload = function () {
  // displayDate()
  displayItems();
};
