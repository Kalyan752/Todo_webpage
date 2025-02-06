let todoList=JSON.parse(localStorage.getItem("storedData")) || [];
displayItems();
function addTodo() {
      let inputElement=document.querySelector('#input-bar');
      let dateElement=document.querySelector('#input-date');
      let todoItem=inputElement.value; 
      let todoDate=dateElement.value;
      todoList.push({item:todoItem,date:todoDate});
      inputElement.value='';
      dateElement.value='';
      localStorage.setItem("storedData",JSON.stringify(todoList))
      displayItems(); 
};


function displayItems(){
    let displayElement=document.querySelector('.items-container');
    let newHtml='';
    for (let i=0;i<todoList.length;i++)
    {   let item=todoList[i].item;
        let date=todoList[i].date;
        newHtml+=`
                <span>${item}</span>
                <span>${date}</span>
                <button class="btns" id="deletebtn" onclick="todoList.splice(${i},1);displayItems();"><b>Delete</b></button>
                `;
        
    }
    displayElement.innerHTML=newHtml;

};
