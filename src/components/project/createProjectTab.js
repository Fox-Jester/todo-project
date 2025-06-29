import constructElement from "../constructElement.js";
import clearContent from "../../clearContent";

export default function createProjectTab(name, color, createList){

    const projectDropdown = document.querySelector("#project-dropdown");

    const projectTab = constructElement("div", "project-tab", "tab", color);

    projectTab.textContent = name;


    projectDropdown.appendChild(projectTab);
    
    projectTab.addEventListener("click", () => {
        clearContent();
        createList();
        
    });
}
