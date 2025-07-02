
import applyPageEvents from "./applyPageEvents";

import Project from "./components/project/Project.js";
import "./styles.css";



const App = {


    init(){
        applyPageEvents();
        
        this.checkProjects()

    },

    checkProjects(){
        const projectTabs = document.querySelectorAll(".project-tab");
        console.log(projectTabs);
        if(projectTabs.length === 0){
            Project.createProject("Default", "blue")
        }
    },

   
}

App.init()