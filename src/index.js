
import applyPageEvents from "./applyPageEvents";

import Project from "./components/project/project.js";
import "./styles.css";



const App = {


    init(){
        applyPageEvents();
        
        this.checkProjects()

    },

    checkProjects(){
        const projectTabs = document.querySelectorAll(".project-tab");
     
        if(projectTabs.length === 0){
            Project.createProject("Default", "blue")
        }
    },

   
}

App.init()