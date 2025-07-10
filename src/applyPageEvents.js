

import Project from "./components/project/Project";
import toggleContolPanel from "./helper-functions/toggleControlPanel";
import list from "./components/list/list"




export default function applyPageListeners(){


    const contolPanelToggle = document.querySelector("#control-panel-toggle")

    const projectTab = document.querySelector("#project-tab");
    const projectChevron = projectTab.querySelector(".chevron")
    const projectDropdown = document.querySelector("#project-dropdown");

    const createProjectBtn = document.querySelector("#create-project-btn");
    

    const allTab = document.querySelector("#all-tab");
    const todayTab = document.querySelector("#today-tab");
    const overdueTab = document.querySelector("#overdue-tab");


    function projectDropdownToggle(){
        projectDropdown.classList.toggle("active");
        projectChevron.classList.toggle("rotate");

    }

   

    contolPanelToggle.addEventListener("click", toggleContolPanel)

    allTab.addEventListener("click", () => list.renderAll());
    todayTab.addEventListener("click", () => list.renderToday());
    overdueTab.addEventListener("click", () => list.renderOverdue());

    projectTab.addEventListener("click", () => projectDropdownToggle());

    createProjectBtn.addEventListener("click", () => Project.showProjectModal());

}
