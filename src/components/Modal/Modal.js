import createProjectModal from "./elements/createProjectModal";
import projectModalEvents from "./events/projectModalEvents";

const contentContainer = document.querySelector("#content-container")
export default class Modal {


    
    static projectModal(name, color, onEdit){
      
        const modal = createProjectModal(name, color)
        console.log(modal)
        contentContainer.appendChild(modal);
        modal.showModal()
        projectModalEvents(modal, onEdit);
    }

   
}