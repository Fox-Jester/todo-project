import Project from "../project/Project.js"
import Todo from "../todo/Todo.js"


const dataStorage = (() => {

    const projectArray = [];
    const todosArray = []
    
    
    function reCreateProjects(projectArrayData, todosArrayData){
        projectArrayData.forEach((projectdata, index) => {
            const project = new Project(projectdata.name, projectdata.color);
        
            
            if(todosArrayData[index]){

                const todos = todosArrayData[index].map(todoData => {
                    const {title, description, date, time, priority} = todoData;
                    const todo = new Todo(title, description, date, time, priority, project);
                    return todo;
                })
    
                project.todos = todos;
            }
            projectArray.push(project);
            project.render();
           
        });
        
    }
    
    
    return {
               
        getTodoList(){
            return todosArray
        },

        save(){
          
            projectArray.forEach((project, index)  => {
                const todos = project.todos
                todosArray[index] = todos;
                project.todos = [];
            })
            localStorage.setItem("projectArrayData", (JSON.stringify(projectArray)));
            localStorage.setItem("todosArrayData", (JSON.stringify(todosArray)));

            todosArray.forEach((todos, index) => {
                (projectArray[index]).todos = todos
            })

        },
        
        remove(project){
            const index = projectArray.indexOf(project);
            projectArray.splice(index, 1);
            todosArray.splice(index, 1);
            this.save();
        },
        
        push(project){
            const todos = project.todos;
            todosArray.push(todos);
            project.todos = []
            projectArray.push(project);
            this.save();
        },
        
        load(){
            if(localStorage.getItem("projectArrayData")){
                reCreateProjects(JSON.parse(localStorage.getItem("projectArrayData")), JSON.parse(localStorage.getItem("todosArrayData")));
                this.save()
            }
        },

    }
    

})();


export default dataStorage