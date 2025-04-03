let inputChanges = document.querySelector('input'); 
let addbtn = document.querySelector('.addbtn'); 
let list = document.querySelector('.list'); 
let error = document.querySelector('.error'); 




function inputChange(event){

   addTodo(inputChanges.value);

}

function addTodo(value){

    let html = '';

if(value){
    inputChanges.value = '';
    console.log(value);
    error.textContent = '';

    html += `<ul><li>${value}<span><button class = 'deltebtn' onclick = "deleteBtn(this)">Delete Btn</button></span></li></ul>`
}
else{
  error.textContent = 'Enter a todo list...';
}
list.innerHTML += html;


}

function deleteBtn(current){
    current.parentElement.remove();
}