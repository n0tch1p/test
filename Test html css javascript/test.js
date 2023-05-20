const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function Addtask(){
    if(inputBox.value === ''){
        alert("This can't be empty, please write something below");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value= "";



}

listContainer.addEventListener("click", function(tick){
    if (tick.target.tagName === "LI"){
        tick.target.classList.toggle("checked");

    }
    else if(tick.target.tagName == "SPAN"){
        tick.target.parentElement.remove();
    }
}, false);


