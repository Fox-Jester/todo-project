import Todo from "../../todo/Todo";



export default function todoModalEvents(modal, project, editTodo){
    
    
    const modalForm = modal.querySelector(".todo-form");
    
    const modalInput = modal.querySelector(".todo-modal-input");

    const descriptionArea = modal.querySelector(".description-area");

    const dateInput = modal.querySelector("input[type='date']");

    const timeInput = modal.querySelector("input[type='time']")

    const prioritySelect = modal.querySelector("select");

    const cancelBtn = modal.querySelector(".cancel-btn");

   
    function getDate(){
        const input = dateInput.value
        if(input){
            const split = input.split("-");
            const year = split.splice(0, 1);
                split.push(year);
            const date = split.join("-");

            return date

        }
    }

    function cancelTask(){
   
        modal.close();
        modalInput.value = "";
        modal.remove();
   }

   function submitTodoForm(e){
        e.preventDefault();
       
    const newTodo = new Todo(
        modalInput.value,
        descriptionArea.value,
        getDate(),
        timeInput.value,
        prioritySelect.value,
        project
    );

    if(editTodo){
        editTodo(newTodo);
    }
    else{
        newTodo.init()
    }
    
    modal.close();
    modalInput.value = "";
    modal.remove()
   }

    modalForm.addEventListener("submit", (e) => submitTodoForm(e))

    cancelBtn.addEventListener("click", () => cancelTask())

}