

export default function addProjectListEvents(list, onDelete, onEdit){





    const deleteBtn = list.querySelector(".delete-btn");
    const editBtn = list.querySelector(".edit-btn");

    deleteBtn.addEventListener("click", () => {
        if(confirm("are you sure you want to delete this project?")){
              onDelete()
        }
      
    });

    editBtn.addEventListener("click", () => onEdit())

   
}