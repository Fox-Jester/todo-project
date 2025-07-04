import createTodoElement from "./elements/createTodoElement";

import "./todo.css"



export default class Todo{

    constructor(title, description, date, time, priority){
        this.title = title,
        this.description = description,
        this.date = date,
        this.time = time
        this.priority = priority

        this.create = () => {
            console.log("wawa")

            const todoElement = createTodoElement(
                this.title,
                 this.description,
                 this.date,
                  this.time,
                   this.priority);
            
            const listBody = document.querySelector(".project-list .list-body");
            listBody.appendChild(todoElement);
            
            // addTodoEvents(todoElement);
            
            // return todoElement;
        }
    }

    
}
