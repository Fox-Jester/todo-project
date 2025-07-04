
import createProjectList from "./elements/createProjectList.js";
import createProjectTab from "./elements/createProjectTab.js";
import addProjectListEvents from "./events/addProjectListEvents.js";
import clearContent from "../../clearContent.js";
import addProjectTabEvents from "./events/addProjectTabEvents.js";
import "./project.css"
import modal from "../modal/modal.js";

const projectDropdown = document.querySelector("#project-dropdown");
const contentContainer = document.querySelector("#content-container");

export default class Project{


    //Creates a list repersenting this project
    #createList(){
        const list = createProjectList(this.name, this.color, this.todos);
        contentContainer.appendChild(list);
        addProjectListEvents(list, () => this.#deleteProject(), () => this.#createEditModal(), () => this.#createTodoModal());

        this.todos.forEach(todo => todo.create(this.#deleteTodo.bind(this), this.#editTodoModal.bind(this))
    )
    };

    //Creates a modal to add a todo
    #createTodoModal(){
        modal.showTodoModal(this.#addToTodos.bind(this))
    };

    //Add's todo to this Project's todos
    #addToTodos(todo){
        this.todos.push(todo);
        
        todo.create(this.#deleteTodo.bind(this), this.#editTodoModal.bind(this));
        this.#refreshTaskCounter();
        
    };

    #editTodoModal(todo) {
    modal.showTodoModal((updatedTodo) => this.#updateTodo(todo, updatedTodo), todo);
}

    #updateTodo(oldTodo, newTodo){
         oldTodo.title = newTodo.title;
        oldTodo.description = newTodo.description;
        oldTodo.date = newTodo.date;
        oldTodo.time = newTodo.time;
        oldTodo.priority = newTodo.priority;

        this.#refreshTodos();
    }

    #deleteTodo(todo){
        setTimeout(() => {
            this.todos.splice(this.todos.indexOf(todo) ,1)
            this.#refreshTodos();
            this.#refreshTaskCounter();
            
        }, 500);

    }

    //Deletes this Project
    #deleteProject(){
        clearContent()
        this.tab.remove()
    };

    //Creates a modal to edit this Project
    #createEditModal(){
        modal.showProjectModal(this.name, this.color, this.#editProject.bind(this));
    }

    //Callback sent to a modal to edit this project
    #editProject(name, color){
        this.name = name;
        this.color = color;
        this.#refreshProject()
    }

    //refreashes this project when edited
    #refreshProject(){
        clearContent()
        this.tab.classList.replace(this.tab.classList[2], this.color);
        const tabName = this.tab.querySelector(".project-tab-name");
        tabName.textContent = this.name;
        
        this.#createList()
    }

    #refreshTodos(){
        clearContent();
        this.#createList()
    }

    #refreshTaskCounter(){
        const taskCounter = this.tab.querySelector(".task-counter");
        taskCounter.textContent = `${this.todos.length}`;
    };

  
   
    constructor(name, color){
        
        this.name = name;
        this.color = color;
        this.todos = [];
        this.tab = ""
        
        this.add = (TodoItem) => {
            this.todos.push(TodoItem);
        } ;
        
        this.remove = (TodoItem) => {
            if(TodoItem){
                this.todos.splice((this.todos.indexOf(TodoItem)), 1);
            }
        };
        
        this.create = () => {
            const tab = createProjectTab(this.name, this.color);
            projectDropdown.appendChild(tab);
            this.tab = tab;
            addProjectTabEvents(tab, () => this.#createList());
        };
    };
    
       static createProject(projectName, color){
        const newProject = new Project(projectName, color);
        newProject.create()
    }
    
}


