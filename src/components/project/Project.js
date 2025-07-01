import createProjectList from "./elements/createProjectList.js";
import createProjectTab from "./elements/createProjectTab.js";
import addProjectListEvents from "./events/addProjectListEvents.js";

import addProjectTabEvents from "./events/addProjectTabEvents.js";
import "./project.css"

const projectDropdown = document.querySelector("#project-dropdown");
const contentContainer = document.querySelector("#content-container");

export default class Project{


   
    #createList(){
        const list = createProjectList(this.name, this.color, this.folder);
        contentContainer.appendChild(list);
        addProjectListEvents(list);
    }

    #refreshTaskCounter(tab, counter){
        const taskCounter = tab.document.querySelector(".task-counter");
        taskCounter.textContent = `${this.folder.length}`;
    }

    #addTaskCounter(){}
   
    constructor(name, color){
        
        this.name = name;
        this.color = color;
        this.folder = [];
        
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
            addProjectTabEvents(tab, () => this.#createList());
        };
    };
    
       static createProject(projectName, color){
        const newProject = new Project(projectName, color);
        newProject.create()
    }
    
}


