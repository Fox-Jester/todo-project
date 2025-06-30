import constructElement from "../constructElement.js";

export default function createProjectList(name, color, onTodoAdd, folder){

    const contentContainer = document.querySelector("#content-container");

    const list = constructElement("div", "project-list");

    const listHeader = constructElement("div", "list-header", color);

    const addGroup = constructElement("div", "add-group");

    const addBtn = constructElement("i", "fa-solid", "fa-circle-plus", "icon", "add-todo-btn");
    

    const text = document.createElement("p");
    text.textContent = "Add Task";

    const listHeading = document.createElement("h2");
    listHeading.textContent = name;

    const editGroup = constructElement("div", "edit-group");
    const editBtn = constructElement("i", "fa-solid", "fa-pen-to-square", "icon", "edit-btn")
    const deleteBtn = constructElement("i", "fa-solid", "fa-x", "icon", "delete-project-btn");
    

    const listBody = constructElement("div", "list-body");

    addGroup.appendChild(addBtn);
    addGroup.appendChild(text);

    editGroup.appendChild(editBtn);
    editGroup.appendChild(deleteBtn);

    listHeader.appendChild(addGroup);
    listHeader.appendChild(listHeading);
    listHeader.appendChild(editGroup);

    list.appendChild(listHeader);
    list.appendChild(listBody);


    contentContainer.appendChild(list);

}