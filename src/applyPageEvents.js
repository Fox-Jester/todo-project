
import Project from "./components/project/project";




export default function applyPageListeners(){

   

    const projectTab = document.querySelector("#project-tab");
    const projectChevron = projectTab.querySelector(".chevron")
    const projectDropdown = document.querySelector("#project-dropdown");


    const createProjectBtn = document.querySelector("#create-project-btn");
    

    const upcomingTab = document.querySelector("#upcoming-tab");


    function projectDropdownToggle(){
        projectDropdown.classList.toggle("active");
        projectChevron.classList.toggle("rotate")

    }

    projectTab.addEventListener("click", () => projectDropdownToggle())

    createProjectBtn.addEventListener("click", () => Project.showProjectModal())








}
