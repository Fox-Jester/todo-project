import constructElement from "../../constructElement";



export default function createProjectTab(name, color){


    const projectTab = constructElement("div", "project-tab", "tab", color);

   const projectName = constructElement("p", "project-tab-name");
   projectName.textContent = name


   const taskCounter = constructElement("p", "task-counter");
   

   
   

    taskCounter.textContent = ""

    

    

    projectTab.append(projectName, taskCounter );



    return projectTab;
    
}
