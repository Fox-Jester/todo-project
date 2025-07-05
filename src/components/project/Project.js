
import createProjectList from "./elements/createProjectList.js";
import createProjectTab from "./elements/createProjectTab.js";
import addProjectListEvents from "./events/addProjectListEvents.js";
import clearContent from "../../clearContent.js";
import addProjectTabEvents from "./events/addProjectTabEvents.js";
import "./project.css"

import createProjectModal from "./elements/createProjectModal.js";
import projectModalEvents from "./events/projectModalEvents.js";


const projectDropdown = document.querySelector("#project-dropdown");
const contentContainer = document.querySelector("#content-container");

export default class Project{


    
    
    //Deletes this Project
    #deleteProject(){
        clearContent()
        this.tab.remove()
    };
    
    
    
    //Refreshes taskcounter when a todo is added or deleted
    #refreshTaskCounter(){
        const taskCounter = this.tab.querySelector(".task-counter");
        taskCounter.textContent = `${this.todos.length}`;
    };
    //Visually refreshes the project when a todo is added or removed.
    refreshTodos(){
        clearContent();
        this.#createList();
        this.#refreshTaskCounter();
    }
    
    
    //Creates a modal to edit this project
    #editProjectModal(){
        const modal = createProjectModal(this.name, this.color);
        contentContainer.appendChild(modal);
        modal.showModal()
        projectModalEvents(modal, (name, color) => this.#onProjectEdit(name, color));
    };
    
    //Callback sent to a modal to edit this project
    #onProjectEdit(name, color){
        this.name = name;
        this.color = color;
        this.#refreshProject()
    }
    //Refreashes this project when edited
    #refreshProject(){
        clearContent()
        this.tab.classList.replace(this.tab.classList[2], this.color);
        const tabName = this.tab.querySelector(".project-tab-name");
        tabName.textContent = this.name;
        this.#createList()
    }
    

    //Creates a list repersenting this project
    #createList(){
        const list = createProjectList(this.name, this.color, this.todos);
        contentContainer.appendChild(list);
        addProjectListEvents(list, () => this.#deleteProject(), () => this.#editProjectModal());

        this.todos.forEach(todo => todo.create())
    };
    
    
    constructor(name, color){
        
        this.name = name;
        this.color = color;
        this.todos = [];
        this.tab = ""
        
        
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
    
    static showProjectModal(){
        const modal = createProjectModal();
        contentContainer.appendChild(modal);
        modal.showModal()
        projectModalEvents(modal);
    };
}


