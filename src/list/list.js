import projectArray from "../components/project-array/project-array";
import isToday from "../isToday";
import renderListHeader from "./elements/renderListHeader"
import listHeaderEvents from "./events/listHeaderEvents";

import "./list.css"

const list = {


    
    renderAll(){
        this.renderHeader("All");

        const todosArray = projectArray.getTodoList()
     
        const allTodos = todosArray.flat()
     
        this.renderBody(allTodos, "all")
    },

    renderToday(){
         this.renderHeader("Today");

        const todosArray = projectArray.getTodoList()
     
        const allTodos = todosArray.flat();
        const todayTodos = allTodos.filter(todo => isToday(todo.date))
     
        this.renderBody(todayTodos, "today")

    },

    renderOverdue(){

    },

    rendereOverdue(){},

    projectRender(project){
        this.renderHeader(project.name, project);
        this.renderBody(project.todos, "project");
    },

    renderHeader(name, project){
        renderListHeader(name, project);
        if(project){
            listHeaderEvents(project);
        }
    },

    renderBody(todos, type){
        const listBody = document.querySelector("#list-body");
        listBody.innerHTML = ""
        todos.forEach(todo => todo.render(type))
    },



    
}

export default list