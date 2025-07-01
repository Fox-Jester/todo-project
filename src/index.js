
import applyPageEvents from "./applyPageEvents";
import projectModalInit from "./components/Modal/projectModalInit.js";
import Project from "./components/project/Project.js";
import "./styles.css";



const App = {


    init(){
        applyPageEvents();
        projectModalInit()
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