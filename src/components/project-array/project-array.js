import Project from "../project/Project.js"
import Todo from "../todo/Todo"


const projectArray = (() => {

    const projectList = [];
    const todosList = []
    
    
    function reCreateProjects(projectListData, todosListData){
        projectListData.forEach((projectdata, index) => {
            const project = new Project(projectdata.name, projectdata.color);
        
            
            if(todosListData[index]){

                const todos = todosListData[index].map(todoData => {
                    const {title, description, date, time, priority} = todoData;
                    const todo = new Todo(title, description, date, time, priority, project);
                    return todo;
                })
    
                project.todos = todos;
            }
            projectList.push(project);
            project.render();
           
        })
    }
    
    
    return {
        
       
        ///create a way to save when todos update.
        ///calling save doesn't split the todos, so it calls circular error

        

        save(){
            projectList.forEach((project, index)  => {
                const todos = project.todos
                todosList[index] = todos;
                project.todos = [];
            })
            localStorage.setItem("projectArrayData", (JSON.stringify(projectList)));
            localStorage.setItem("todosArrayData", (JSON.stringify(todosList)));

            todosList.forEach((todos, index) => {
                (projectList[index]).todos = todos
            })

        },
        
        remove(project){
            const index = projectList.indexOf(project);
            projectList.splice(index, 1);
            todosList.splice(index, 1);
            this.save();
        },
        
        push(project){
            const todos = project.todos;
            todosList.push(todos);
            project.todos = []
            projectList.push(project);
            this.save();
        },
        
        load(){
            if(localStorage.getItem("projectArrayData")){
               
                reCreateProjects(JSON.parse(localStorage.getItem("projectArrayData")), JSON.parse(localStorage.getItem("todosArrayData")));
            }
        },

    }
    

})();


export default projectArray