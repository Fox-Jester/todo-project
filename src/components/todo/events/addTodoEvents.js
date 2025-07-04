

export default function addTodoEvents(todo, onComplete, onEdit){

    const checkToggle = todo.querySelector(".check-toggle");

    function onCheck(){
        checkToggle.classList.replace("fa-regular", "fa-solid");
        onComplete(todo);
    }

    
    todo.addEventListener("click", (e) => {
        if(e.target !== checkToggle){
            onEdit()
        }
    })
    
    checkToggle.addEventListener("click", () => onCheck());
}