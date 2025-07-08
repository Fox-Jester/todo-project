
import createProject from "./elements/createProject.js";


import "./project.css"

import createProjectModal from "./elements/createProjectModal.js";
import projectModalEvents from "./events/projectModalEvents.js";
import projectArray from "../project-array/project-array.js";

import list from "../../list/list.js";

const projectDropdown = document.querySelector("#project-dropdown");
const contentContainer = document.querySelector("#content-container");

export default class Project{


    
    
    //Deletes this Project
    deleteProject(){
        list.renderAll()
        this.tab.remove()
        projectArray.remove(this);
    };
    
    
    
    //Refreshes taskcounter when a todo is added or deleted
    #refreshTaskCounter(){
        const taskCounter = this.tab.querySelector(".task-counter");
        const content = (this.todos.length > 0 ? this.todos.length: "")
        taskCounter.textContent = `${content}`;
    };
    //Refreshes the project when a todo is added or removed.
    refreshTodos(){
        console.log("check 1", this.todos)
        this.#refreshTaskCounter();
        projectArray.save()
        
    }
    
    
    //Creates a modal to edit this project
    editProjectModal(){
        const modal = createProjectModal(this.name, this.color);
        contentContainer.appendChild(modal);
        modal.showModal()
        projectModalEvents(modal, (name, color) => this.#projectEdit(name, color));
    };
    
    //Callback sent to a modal to edit this project
    #projectEdit(name, color){
        this.name = name;
        this.color = color;
        this.#onEdit()
    }

    //Refreashes this project when edited
    #onEdit(){
        this.tab.classList.replace(this.tab.classList[2], this.color);
        const tabName = this.tab.querySelector(".project-name");
        tabName.textContent = this.name;
        list.projectRender(this);
        projectArray.save();
    }
    

    
    
    constructor(name, color){
        
        this.name = name;
        this.color = color;
        this.todos = [];
        this.tab = ""
        
        
        this.render = () => {
            const tab = createProject(this.name, this.color);
            projectDropdown.appendChild(tab);
            this.tab = tab;
            this.tab.addEventListener("click", () => list.projectRender(this));
            list.projectRender(this);
            this.#refreshTaskCounter()
        };
    };
    
    static showProjectModal(){
        const modal = createProjectModal();
        contentContainer.appendChild(modal);
        modal.showModal()
        projectModalEvents(modal);
    };
}


