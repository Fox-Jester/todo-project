import Todo from "../../components/todo/Todo";




export default function listHeaderEvents(project){


    const listOptionContainer = document.querySelector("#list-option-container");

    const createBtn = listOptionContainer.querySelector(".add-todo-btn");

    const deleteBtn = listOptionContainer.querySelector(".delete-btn");

    const editBtn = listOptionContainer.querySelector(".edit-btn");


    function handleDelete(){
        if(confirm("are you sure you want to delete this project?")){
            project.deleteProject();
        }

    }

    deleteBtn.addEventListener("click",  handleDelete);

    editBtn.addEventListener("click", () => project.editProjectModal())

    createBtn.addEventListener("click", () => Todo.showTodoModal(project));
}