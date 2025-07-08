import constructElement from "../../helper-functions/constructElement";



export default function renderListHeader(name, project){

 

   
    
    const listHeader = document.querySelector("#list-header");

    listHeader.innerHTML = ""
    if(listHeader.classList){
        listHeader.classList.remove(listHeader.classList[0]);
    }

    if(project){
        listHeader.classList.add(project.color);
    }
    else{
        listHeader.classList.add("grey");
    }
    

    
    const addBtn = constructElement("button", "add-todo-btn");
    addBtn.textContent = "Add Task";
   
  
    const listName = document.createElement("h2");
    listName.textContent = name;
    

    const optionGroup = constructElement("div", "option-group");

    const editBtn = constructElement("button", "edit-btn");
    editBtn.textContent = "Edit";
    const deleteBtn = constructElement("button", "delete-btn");
    deleteBtn.textContent = "Delete";

   
    

   
    optionGroup.append(editBtn, deleteBtn);

    if(project){
        listHeader.append(addBtn, listName, optionGroup);
    }
    else{
        listHeader.appendChild(listName);
    }
    
    

    
    




}