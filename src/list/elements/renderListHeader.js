import constructElement from "../../helper-functions/constructElement";



export default function renderListHeader(name, project){


    
    const listHeader = document.querySelector("#list-header");
    const listOptionContainer = document.querySelector("#list-option-container");

    listHeader.innerHTML = ""
    listOptionContainer.innerHTML = ""

    if(listHeader.classList){
        listHeader.classList.remove(listHeader.classList[0]);
    }

    if(project){
        listHeader.classList.add(project.color);
    }
    else{
        listHeader.classList.add("grey");
        
    }
    
    
    const listName = document.createElement("h2");
    listName.textContent = name;
    
    
    const addBtn = constructElement("button", "add-todo-btn");
    addBtn.textContent = "Add Task";

    const editBtn = constructElement("button", "edit-btn");
    editBtn.textContent = "Edit";

    const deleteBtn = constructElement("button", "delete-btn");
    deleteBtn.textContent = "Delete";

    

    if(project){
        listHeader.appendChild(listName);

        listOptionContainer.append(addBtn, editBtn, deleteBtn);
    }
    else{
        listHeader.appendChild(listName);
    }
    
    
}