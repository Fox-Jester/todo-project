import createProjectModal from "./elements/createProjectModal";
import createTodoModal from "./elements/createTodoModal";
import projectModalEvents from "./events/projectModalEvents";
import todoModalEvents from "./events/todoModalEvemts";
import "./modal.css"

const contentContainer = document.querySelector("#content-container")
const modal = {


    
    showProjectModal: (name, color, onProjectEdit) => {
        const modal = createProjectModal(name, color);
        contentContainer.appendChild(modal);
        modal.showModal()
        projectModalEvents(modal, onProjectEdit);
    },

  


    showTodoModal: (onSubmit) =>{

        const modal = createTodoModal();
        contentContainer.appendChild(modal);
        modal.showModal()
        todoModalEvents(modal, onSubmit);

        
    }

   
}
export default modal