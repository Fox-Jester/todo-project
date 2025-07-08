import constructElement from "../../../constructElement";



export default function createTodoElement(title, description, date, time, priority){



    const todo = constructElement("div", "todo");

    //CheckToggle

    const checkToggle = constructElement("i", "fa-circle", "fa-regular", "check-toggle");

    //TodoContent 
    const todoContent = constructElement("div", "todo-content");

    const todoTitle = constructElement("p", "todo-title");
    todoTitle.textContent = title

    const todoDescription = constructElement("p", "todo-description");
    todoDescription.textContent = description;

    const timeGroup = constructElement("div", "time-group");

    const dateTag = document.createElement("p");
    dateTag.textContent = getDate()

    const timeTag = document.createElement("p");
    timeTag.textContent = getTime();

    const timeIcon = constructElement("i", "fa-clock", "fa-regular")



    //Priority Tag

    const priorityTag = constructElement("div", "priority-tag", getPriorityColor(priority));


    function getDate(){
    if (!date) return "";
    const [month, day, year] = date.split("-").map(Number);
    const inputDate = new Date(year, month - 1, day);

    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

  
    const isSameDay = (date1, date2) =>
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate();

    if (isSameDay(inputDate, today)) {
        return "today";
    }
    if (isSameDay(inputDate, tomorrow)) {
        return "tomorrow";
    }
    return date;
    }

    function getTime(){
        if (time) {
            const hour = parseInt(time.substring(0, 2), 10);
            
            if (hour === 0) {
                return `12${time.substring(2)} am`;
            }
            if (hour < 12) {
                return `${hour}${time.substring(2)} am`;
            }
            if (hour === 12) {
                return `12${time.substring(2)} pm`;
            }
            return `${hour - 12}${time.substring(2)} pm`;
        }
        return "";
    }

    function getPriorityColor(priority){
        return (priority === "none" ? "" : `priority-${priority}`)
    }
   
    if (time || date) {
        timeGroup.appendChild(timeIcon);
    }

    if (date) {
        timeGroup.appendChild(dateTag);
    }

    if (time) {
        timeGroup.appendChild(timeTag);
    }


    todoContent.append(todoTitle, todoDescription, timeGroup);

    todo.append(checkToggle, todoContent, priorityTag);

    return todo

}