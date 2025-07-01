import constructElement from "../../constructElement";

export default function createProjectList(name, color, folder){

 

    const list = constructElement("div", "project-list");

    const listHeader = constructElement("div", "list-header", color);

  

    const addBtn = constructElement("button", "add-todo-btn");
    addBtn.textContent = "Add Task";
    
    const listHeading = document.createElement("h2");
    listHeading.textContent = name;

    const optionGroup = constructElement("div", "option-group");

    const editBtn = constructElement("button", "edit-btn");
    editBtn.textContent = "Edit";
    const deleteBtn = constructElement("button", "delete-btn");
    deleteBtn.textContent = "Delete";

   
    

    const listBody = constructElement("div", "list-body");

   
    optionGroup.append(editBtn, deleteBtn);

    listHeader.append(addBtn, listHeading, optionGroup);
    
    

    list.append(listHeader, listBody);
    


    return list;

}