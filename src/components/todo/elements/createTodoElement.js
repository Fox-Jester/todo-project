import constructElement from "../../constructElement";



export default function createTodoElement(title, description, date, time, priority){



    const todo = constructElement("div", "todo");

    //CheckToggle

    const checkToggle = constructElement("i", "fa-circle", "checkToggle");

    //TodoContent 
    const todoContent = constructElement("div", "todo-content");

    const todoTitle = constructElement("p", "todo-title");
    todoTitle.textContent = title

    const todoDescription = constructElement("p", "todo-description");
    todoDescription.textContent = description;

    const timeGroup = constructElement("div", "time-group");

    const timeTag = document.createElement("p");
    timeTag.textContent = time;




    //Priority Tag

    const priorityTag = constructElement("div", "priority-tag", getPriorityColor(priority));


    function getDateTag(){
        const dateTag = document.createElement("p");
        dateTag.textContent = date
        return dateTag;
    }

    function getPriorityColor(priority){
        return (priority === "none" ? "" : `priority-${priority}`)
    }


    timeGroup.append(getDateTag(), timeTag);


    todoContent.append(title, description, timeGroup);

    todo.append(checkToggle, todoContent, priorityTag);

    return todo

}