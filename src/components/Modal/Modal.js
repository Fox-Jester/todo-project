import createProjectModal from "./elements/createProjectModal";
import createTodoModal from "./elements/createTodoModal";
import projectModalEvents from "./events/projectModalEvents";
import todoModalEvents from "./events/todoModalEvemts";
import "./modal.css"

const contentContainer = document.querySelector("#content-container")
export default class Modal {


    
    static projectModal(name, color, onEdit){
      
        const modal = createProjectModal(name, color);
        contentContainer.appendChild(modal);
        modal.showModal()
        projectModalEvents(modal, onEdit);
    }


    static todoModal(){

        const modal = createTodoModal();
        contentContainer.appendChild(modal);
        modal.showModal()
        todoModalEvents(modal);

        
    }

   
}