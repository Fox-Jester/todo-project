import createProjectTab from "./createProjectTab.js";
import applyProjectListeners from "./projectEvents.js";

export default class Project{

    #createList(){

    }

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
            createProjectTab(this.name, this.color, this.#createList);
        };
    };

    

}


