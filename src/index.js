
import applyPageEvents from "./applyPageEvents";
import projectArray from "./components/data-storage/data-storage.js";

import Project from "./components/project/Project.js";
import list from "./components/list/list.js"
import "./assets/styles.css";
import toggleContolPanel from "./helper-functions/toggleControlPanel.js";



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
            toggleContolPanel()
        }
    },



   
}

App.init()