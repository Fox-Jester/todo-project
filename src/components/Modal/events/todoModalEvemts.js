import Todo from "../../todo/Todo";



export default function todoModalEvents(modal, onEdit){
    
    
    const modalForm = modal.querySelector(".todo-form");
    
    const modalInput = modal.querySelector(".todo-modal-input");

    const descriptionArea = modal.querySelector(".description-area");

    const dateInput = modal.querySelector("input[type='date']");

    const timeInput = modal.querySelector("input[type='time']")

    const prioritySelect = modal.querySelector("select");

    const cancelBtn = modal.querySelector(".cancel-btn");


    function cancelTask(e){
   
        modal.close();
        modalInput.value = "";
        modal.remove();
   }

   function submitTodoForm(e){
        e.preventDefault();
        if(onEdit){

        }
        else{
            Todo.createTodo(
                modalInput.value,
                 descriptionArea.value,
                  dateInput.value,
                   timeInput.value,
                    prioritySelect.value);
        }

        modal.close();
        modalInput.value = "";
        modal.remove()
   }

    modalForm.addEventListener("submit", (e) => submitTodoForm(e))

    cancelBtn.addEventListener("click", () => cancelTask())

}