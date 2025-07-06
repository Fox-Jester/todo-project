
import applyPageEvents from "./applyPageEvents";
import projectArray from "./components/project-array/project-array.js";

import Project from "./components/project/Project.js";
import "./styles.css";



const App = {


    init(){
        applyPageEvents();
        projectArray.load()
        this.checkProjects()

    },

    checkProjects(){
        const projectTabs = document.querySelectorAll(".project");
     
        if(projectTabs.length === 0){
            const project = new Project("Default", "blue");
            projectArray.push(project);
            project.render();
            
        }
    },

   
}

App.init()