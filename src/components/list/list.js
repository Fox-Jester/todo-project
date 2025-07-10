import mobileSwapToggle from "../../helper-functions/mobileSwapToggle";
import projectArray from "../../components/data-storage/data-storage";
import isPastDue from "../../helper-functions/isPastDue";
import isToday from "../../helper-functions/isToday"
import renderListHeader from "./elements/renderListHeader"
import listHeaderEvents from "./events/listHeaderEvents";

import "./list.css"

const list = {


    //Renders a list with all the tasks
    renderAll(){
        this.renderHeader("All");

        const todosArray = projectArray.getTodoList();
     
        const allTodos = todosArray.flat();
        this.renderBody(allTodos, "all");
    },

    //Renders a list with tasks that are dated for today
    renderToday(){
        this.renderHeader("Today");

        const todosArray = projectArray.getTodoList();
     
        const allTodos = todosArray.flat();
        const todayTodos = allTodos.filter(todo => isToday(todo.date));
     
        this.renderBody(todayTodos, "today");

    },

    //Renders a list with tasks that are past due
    renderOverdue(){
        this.renderHeader("Overdue");

        const todosArray = projectArray.getTodoList();
     
        const allTodos = todosArray.flat();
        const todayTodos = allTodos.filter(todo => isPastDue(todo.date, todo.time));
     
        this.renderBody(todayTodos, "overdue");
    },

  
    //Renders a list with tasks under a project
    projectRender(project){
        this.renderHeader(project.name, project);
        this.renderBody(project.todos, "project");
    },

    //Renders the list-header for a tab
    renderHeader(name, project){
        renderListHeader(name, project);
        if(project){
            listHeaderEvents(project);
        }
    },

    //Renders the task in the list-body
    renderBody(todos, type){
        const listBody = document.querySelector("#list-body");
        listBody.innerHTML = ""
        todos.forEach(todo => todo.render(type));
        mobileSwapToggle();
    
    },



    
}

export default list