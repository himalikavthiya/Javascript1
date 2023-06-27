let task_btn = document.getElementById("add_item");

//storege data in array format
let task_array = [];
task_btn.addEventListener("click", adddata);

function adddata() {
  let task_Input = document.getElementById("task_Input");

  // set input validation 
  if (task_Input.value !== '') {
    //storege value object 
    let data = {
      id: Math.floor(Math.random() * 1000),
      task: task_Input.value
    }
    task_array.push(data);
    localStorage.setItem("to_do_list", JSON.stringify(task_array));
    viewdata();
    task_Input.value = "";
  } else {
    //error msg show
    document.getElementById("error").innerHTML = "please enter your task*";
  }
}


function viewdata() {

  let getData = JSON.parse(localStorage.getItem("to_do_list"));

  //set display data in table
  let data_tbl = "";
  getData.map((val) => {
    data_tbl += `<tr>
                        <td class="my-5"><span class="px-3">${val.task}</span></td>
                        <td><button class="btn del" onclick="deletetask(${val.id})">
                        <i class="fa-solid fa-trash-can text-danger"></i></button>
                        <button class="btn undo"><i class="fa fa-undo"></i></button>
                        </td>
              </tr>`

  })
  document.getElementById("record").innerHTML = data_tbl;
}
// debugger;
function deletetask(id) {
  let getData = JSON.parse(localStorage.getItem("to_do_list"));
  let del_index = getData.findIndex((val) => val.id === id);

  
  let del_btns = document.querySelectorAll(".btn.del")[del_index];
  let undo_btns = document.querySelectorAll(".undo")[del_index];

  del_btns.style.display = "none";
  undo_btns.style.display = "block";

//settime in display undo button
  let stop = setTimeout(() => {
    getData = getData.filter((val) => val.id !== id);
    localStorage.setItem("to_do_list", JSON.stringify(getData));
    viewdata();
  }, 3000);


// click to undo button and display delete button
  undo_btns.addEventListener("click", function () {
    clearTimeout(stop);

    del_btns.style.display = "inline-block";
    undo_btns.style.display = "none";
  })
}
































// var taskList = document.getElementById("taskList");
// var addTaskButton = document.getElementById("addTaskButton");
// var undoButton = document.getElementById("undoButton");

// var deletedTask;

// function addTask() {
//   var taskInput = document.getElementById("taskInput");
//   var taskText = taskInput.value.trim();

//   if (taskText !== "") {
//     var listItem = document.createElement("li");
//     listItem.className = "task-item";

//     var taskItemText = document.createElement("span");
//     taskItemText.className = "task-item-text";
//     taskItemText.textContent = taskText;

//     var deleteButton = document.createElement("span");
//     deleteButton.className = "delete-button";
//     deleteButton.textContent = "X";

//     deleteButton.addEventListener("click", function () {
//       deletedTask = listItem;
//       listItem.style.display = "none";
//       undoMessage.style.display = "block";
//     });

//     listItem.appendChild(taskItemText);
//     listItem.appendChild(deleteButton);
//     taskList.appendChild(listItem);

//     taskInput.value = "";
//   }
// }

// addTaskButton.addEventListener("click", addTask);

// var taskInput = document.getElementById("taskInput");
// taskInput.addEventListener("keyup", function (event) {
//   if (event.key === "Enter") {
//     addTask();
//   }
// });

// undoButton.addEventListener("click", function () {
//   deletedTask.style.display = "flex";
//   undoMessage.style.display = "none";
// });