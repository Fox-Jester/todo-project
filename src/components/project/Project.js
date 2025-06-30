import createProjectList from "./createProjectList.js";
import createProjectTab from "./createProjectTab.js";
import projectEvents from "./projectEvents.js";
import "./project.css"
import Modal from "../Modal/Modal.js";


export default class Project{

    #createList(){
        createProjectList(this.name, this.color, this.folder);
        projectEvents(this.#onTodoAdd, this.#onProjectDelete);
    }

    async #onTodoAdd() {
    alert("wow");
    const coolstuff = await Modal.create("todo");
    console.log(coolstuff);
}

    #onProjectDelete(){}

  
    
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
            createProjectTab(this.name, this.color, () => this.#createList());
        };
    };
    
       static createProject({projectName, color}){
        const newProject = new Project(projectName, color);
        newProject.create()
    }
    
}


