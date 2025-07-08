import Todo from "../../components/todo/Todo";




export default function listHeaderEvents(project){


    const listHeader = document.querySelector("#list-header");

    const createBtn = listHeader.querySelector(".add-todo-btn")
    const deleteBtn = listHeader.querySelector(".delete-btn");
    const editBtn = listHeader.querySelector(".edit-btn");

    function onAddTask(){
        Todo.showTodoModal(project);
    }

    deleteBtn.addEventListener("click", () => {
        if(confirm("are you sure you want to delete this project?")){
            project.deleteProject();
        }
      
    });

    editBtn.addEventListener("click", () => project.editProjectModal())

    createBtn.addEventListener("click", () => onAddTask());
}