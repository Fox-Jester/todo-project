import constructElement from "../../../helper-functions/constructElement";



export default function createProjectTab(name, color){


    const projectTab = constructElement("div", "project", "tab", color);

   const projectName = constructElement("p", "project-name");
   projectName.textContent = name


   const taskCounter = constructElement("p", "task-counter");
   

   
   

    taskCounter.textContent = ""

    

    

    projectTab.append(projectName, taskCounter );



    return projectTab;
    
}
