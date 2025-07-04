import createTodoElement from "./elements/createTodoElement";
import addTodoEvents from "./events/addTodoEvents";

import "./todo.css"



export default class Todo{

    constructor(title, description, date, time, priority){
        this.title = title,
        this.description = description,
        this.date = date,
        this.time = time
        this.priority = priority

        this.create = (deleteTodo, editTodo) => {
            
            const todoElement = createTodoElement(
                this.title,
                 this.description,
                 this.date,
                  this.time,
                   this.priority);
            addTodoEvents(todoElement, () => deleteTodo(this), () => editTodo(this));
            
            const listBody = document.querySelector(".project-list .list-body");
            listBody.appendChild(todoElement);
            
        
        }
    }

    
}
