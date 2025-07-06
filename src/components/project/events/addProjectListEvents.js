import Todo from "../../todo/Todo";



export default function addProjectListEvents(list, onDelete, onEdit, project){




    const createBtn = list.querySelector(".add-todo-btn")
    const deleteBtn = list.querySelector(".delete-btn");
    const editBtn = list.querySelector(".edit-btn");

    function onAddTask(){
        Todo.showTodoModal(project);
    }

    deleteBtn.addEventListener("click", () => {
        if(confirm("are you sure you want to delete this project?")){
              onDelete()
        }
      
    });

    editBtn.addEventListener("click", () => onEdit())

    createBtn.addEventListener("click", () => onAddTask());
}