
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
        const list = createProjectList(this.name, this.color, this.folder);
        contentContainer.appendChild(list);
        addProjectListEvents(list, () => this.#deleteProject(), () => this.#createEditModal(), () => this.#createTodoModal());

        this.folder.forEach(todo => todo.create())
    };

    //Creates a modal to add a todo
    #createTodoModal(){
        modal.showTodoModal(this.#addTodoToFolder.bind(this))
    };

    //Add's todo to this Project's folder
    #addTodoToFolder(todo){
        this.folder.push(todo);
        console.log(this.folder);
        todo.create();
    };

    //Deletes this Project
    #deleteProject(){
        clearContent()
        this.tab.remove()
    };

    //Creates a modal to edit this Project
    #createEditModal(){
        Modal.projectModal(this.name, this.color, this.#edit.bind(this));
    }

    //Callback sent to a modal to edit this project
    #edit(name, color){
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

    #refreshTaskCounter(tab, counter){
        const taskCounter = tab.document.querySelector(".task-counter");
        taskCounter.textContent = `${this.folder.length}`;
    };

    #addTaskCounter(){};
   
    constructor(name, color){
        
        this.name = name;
        this.color = color;
        this.folder = [];
        this.tab = ""
        
        this.add = (TodoItem) => {
            this.folder.push(TodoItem);
        } ;
        
        this.remove = (TodoItem) => {
            if(TodoItem){
                this.folder.splice((this.folder.indexOf(TodoItem)), 1);
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


