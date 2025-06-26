

class TodoItem{

    constructor({title, description, dueDate, priority}){
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority
    }
}


class Project{

    constructor(){
        this.folder = []
        this.add = (TodoItem) => {
            this.folder.push(TodoItem);
        } 
        this.remove = (TodoItem) => {
            if(TodoItem){
                this.folder.splice((this.folder.indexOf(TodoItem)), 1);
            }
        }
    }
}