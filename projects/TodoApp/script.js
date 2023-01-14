let inputBox = document.querySelector('.input-container input');
let addBtn = document.querySelector('.input-container button');
let todoList = document.querySelector('.todo-list-container');
let deleteAllBtn = document.querySelector('.footer button');
let darkBtn = document.querySelector('header .dark-btn');

showTask();

//darkTheme-->
darkBtn.onclick =() =>{
    document.body.classList.toggle('dark-theme');
    darkBtn.classList.toggle('on');

    if(localStorage.getItem("theme") == "dark"){
        localStorage.setItem("theme","light");
    }
    else{
        localStorage.setItem("theme","dark");
    }


}
if(localStorage.getItem("theme") == "dark"){
    document.body.classList.add('dark-theme');
    darkBtn.classList.add('on');
}
else{
    localStorage.setItem("theme","light");
}





function inputBoxfn() {
    let userData = inputBox.value;
    let localStorageData = localStorage.getItem("New Task");
    if (localStorageData == null) {
        listArr = [];
    }
    else {
        listArr = JSON.parse(localStorageData);
    }
    if (inputBox.value.trim() != 0) {
        listArr.push(userData);
        localStorage.setItem("New Task", JSON.stringify(listArr));
        inputBox.value = "";
        inputBox.classList.remove("focus");
        showTask();
    }
}

inputBox.addEventListener("keyup", (e) => { //adding input box value by "Entre" key
    if (e.key === "Enter") {
        inputBoxfn();
    }
});

addBtn.onclick = () => inputBoxfn(); //adding input box value by clicking plus icon





function showTask() {
    let localStorageData = localStorage.getItem("New Task");
    if (localStorageData == null) {
        listArr = [];
    }
    else {
        listArr = JSON.parse(localStorageData);
    }
    let pendingNumb = document.querySelector('.pending-task');
    pendingNumb.textContent = listArr.length == 0 ? "No" : listArr.length;

    let newLiTag = "";
    listArr.forEach((elment, index) => {
        newLiTag += `<li> <span> ${elment} </span>
        <div class ="edit" onclick = "editTask(${index})"><i class="fa fa-edit"></i></div> 
        <div class ="delete" onclick = "deleteTask(${index})"><i class="fa fa-trash"></i></div></li>`;
    });
    todoList.innerHTML = newLiTag;

}




function deleteTask(index) {
    let localStorageData = localStorage.getItem("New Task");
    listArr = JSON.parse(localStorageData);
    listArr.splice(index, 1);
    localStorage.setItem("New Task", JSON.stringify(listArr));
    showTask();
}



function editTask(index) {
    let localStorageData = localStorage.getItem("New Task");
    listArr = JSON.parse(localStorageData);

    inputBox.value += listArr[index];
    localStorage.setItem("New Task", JSON.stringify(listArr));
    deleteTask(index);
    showTask();
}





deleteAllBtn.onclick = () => {
    listArr = [];
    localStorage.setItem("New Task", JSON.stringify(listArr));
    showTask();
}