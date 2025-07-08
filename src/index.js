
import applyPageEvents from "./applyPageEvents";
import projectArray from "./components/data-storage/data-storage.js";

import Project from "./components/project/Project.js";
import list from "./list/list.js";
import "./styles.css";



const App = {


    init(){
        applyPageEvents();
        projectArray.load()
        this.checkProjects()
        list.renderAll()

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