import createTodoElement from "./elements/createTodoElement";
import createTodoModal from "./elements/createTodoModal.js"
import addTodoEvents from "./events/addTodoEvents";
import todoModalEvents from "./events/todoModalEvemts.js"

import "./todo.css"

const contentContainer = document.querySelector("#content-container");


export default class Todo{
    
    //Delete's this todo
    #deleteTodo(){
        
        setTimeout(() => {
        this.project.todos.splice(this.project.todos.indexOf(this) ,1)
        this.project.refreshTodos();
        
    }, 500);
    }
    
 
    //Callback sent to a modal to edit this todo
    #onTodoEdit(newTodo){
        Object.assign(this, newTodo); 
        this.project.refreshTodos();  
    }
   
    //Creates a modal to edit this todo
    #editTodoModal(){
        const modal = createTodoModal(this);
        contentContainer.appendChild(modal);
        modal.showModal()
        todoModalEvents(modal, this.project ,(newTodo) => this.#onTodoEdit(newTodo));
    };

    constructor(title, description, date, time, priority, project){
        this.title = title,
        this.description = description,
        this.date = date,
        this.time = time,
        this.priority = priority,
        this.project = project

        this.render = function(){
            const todoElement = createTodoElement(
                this.title,
                this.description,
                this.date,
                this.time,
                this.priority,      
            );
            addTodoEvents(todoElement, () => this.#deleteTodo(), () => this.#editTodoModal());
    
            const listBody = document.querySelector(".project-list .list-body");
            listBody.appendChild(todoElement);

        }

        this.init = function(){
            this.project.todos.push(this);
            this.project.refreshTodos();
        }
        
        
    }
    
    //Creates a modal to add a todo
    static showTodoModal(project){
        const modal = createTodoModal()
        contentContainer.appendChild(modal);
        modal.showModal()
        todoModalEvents(modal, project)
    };
}
