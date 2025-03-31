let displayz = document.querySelector('input');

function cleardisplay(){
    displayz.value = '';
}

function display(value){
    displayz.value += value;
}

function displaytotal(){
    try{
     displayz.value = eval(displayz.value);
    }
    catch{
       displayz.value = 'Enter correct value';
    }

}