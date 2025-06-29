
import "./styles.css"
import Modal from "./components/Modal/Modal.js"
import Project from "./components/project/Project.js";



class TodoItem{

    constructor({title, description, dueDate, priority}){
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority
    }
}





function createProject({projectName, color}){
    const newProject = new Project(projectName, color);
    newProject.create()
}

Modal.create("project", createProject);
