import createTodoElement from "./elements/createTodoElement";
import addTodoEvents from "./events/addTodoEvents";

import "./todo.css"



export default class Todo{
    
    //Delete's this todo
    #deleteTodo(){
        
        setTimeout(() => {
        this.project.todos.splice(this.project.todos.indexOf(this) ,1)
        this.project.refreshTodos();
        
    }, 500);
    }
    
    #editTodo(){
    }
    #updateTodo(oldTodo, newTodo){
        oldTodo.title = newTodo.title;
        oldTodo.description = newTodo.description;
        oldTodo.date = newTodo.date;
        oldTodo.time = newTodo.time;
        oldTodo.priority = newTodo.priority;
        
        this.refreshTodos();
        
    }

        //Add's todo to this Project's todos
    #addToTodos(todo){
        this.todos.push(todo);
        
        todo.create(this.#deleteTodo.bind(this), this.#editTodoModal.bind(this));
        this.project.refreshTaskCounter();
        
    };

    
    #editTodoModal(todo) {
        modal.showTodoModal((updatedTodo) => this.#updateTodo(todo, updatedTodo), todo);
    }
    
    
    constructor(title, description, date, time, priority, project){
        this.title = title,
        this.description = description,
        this.date = date,
        this.time = time,
        this.priority = priority,
        this.project = project
        
        this.render = () => {
            
            const todoElement = createTodoElement(
                this.title,
                this.description,
                this.date,
                this.time,
                this.priority,      
            );
            addTodoEvents(todoElement, () => deleteTodo(this), () => editTodo(this));
            
            const listBody = document.querySelector(".project-list .list-body");
            listBody.appendChild(todoElement);
            
            
        }
    }
    
    //Creates a modal to add a todo
    static showTodoModal(){
        const modal = createTodoModal()
    };
}
