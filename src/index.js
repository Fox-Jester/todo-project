
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
            const project = new Project("Default", "blue")
            project.render()
        }
    },

   
}

App.init()