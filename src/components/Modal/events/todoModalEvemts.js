


export default function todoModalEvents(modal){
    
    
    const modalForm = modal.querySelector(".modal-form");
    
    const modalInput = modal.querySelector(".todo-modal-input");

    const descriptionArea = modal.querySelector(".description-area");

    const dateInput = modal.querySelector("input[type='date']");

    const timeInput = modal.querySelector("input[type='time']")

    const prioritySelect = modal.querySelector("select");

    const cancelBtn = modal.querySelector(".cancel-btn");

    const createBtn = modal.querySelector("button[type='submit']");

    createBtn.addEventListener("click", (e) => {
        e.preventDefault();
        alert('Wah');
    })

    cancelBtn.addEventListener("click", (e) => cancelTask(e))

     function cancelTask(e){
        e.preventDefault()
        modalInput.value = "";
        modal.close();
        modal.remove();
        }
}