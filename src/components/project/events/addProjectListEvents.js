
export default function addProjectListEvents(){

    const addGroup = document.querySelector(".add-group");

    const addTodoBtn =  document.querySelector(".add-todo-btn");

    const deleteProjectBtn = document.querySelector(".delete-project-btn");


    addTodoBtn.addEventListener("click", () => onTodoAdd())
}