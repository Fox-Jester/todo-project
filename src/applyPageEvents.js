
import Project from "./components/project/project";




export default function applyPageListeners(){

   

  

    const createProjectBtn = document.querySelector("#create-project-btn");
    

    const upcomingTab = document.querySelector("#upcoming-tab");



    createProjectBtn.addEventListener("click", () => Project.showProjectModal())








}
