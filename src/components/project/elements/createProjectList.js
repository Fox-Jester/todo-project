import constructElement from "../../constructElement";

export default function createProjectList(name, color, folder){

 

    const list = constructElement("div", "project-list");

    const listHeader = constructElement("div", "list-header", color);

  

    const addBtn = constructElement("button", "add-todo-btn");
    addBtn.textContent = "Add Task"
    

    const text = document.createElement("p");
    text.textContent = "Add Task";

    const listHeading = document.createElement("h2");
    listHeading.textContent = name;

   
    

    const listBody = constructElement("div", "list-body");

   


    listHeader.appendChild(listHeading);
    listHeader.appendChild(addBtn);
    

    list.appendChild(listHeader);
    list.appendChild(listBody);


    return list;

}