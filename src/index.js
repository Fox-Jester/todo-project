
import applyPageEvents from "./applyPageEvents";
import projectArray from "./components/data-storage/data-storage.js";

import Project from "./components/project/Project.js";
import list from "./components/list/list.js"
import "./assets/styles.css";



const App = {

    //Initiates app
    init(){
        applyPageEvents();
        projectArray.load()
        list.renderAll()
        this.checkProjects()

    },

    //Checks for existing projects. if none, creates one
    checkProjects(){
        const projectTabs = document.querySelectorAll(".project");
     
        if(projectTabs.length === 0){
            const project = new Project("Default", "blue");
            projectArray.push(project);
            project.render();
            
        }
    },

    toggleContolPanel(){
        controlPanel.classList.toggle("hidden");

        contolPanelToggle.classList.contains("fa-arrow-right") ?
        contolPanelToggle.classList.replace("fa-arrow-right", "fa-arrow-left") :
        contolPanelToggle.classList.replace("fa-arrow-left", "fa-arrow-right");

        
    }

   
}

App.init()