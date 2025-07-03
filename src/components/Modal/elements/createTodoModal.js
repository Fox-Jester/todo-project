import constructElement from "../../constructElement";



export default function createTodoModal(name = "", discription, priority, date, time){



    const todoModal = constructElement("dialog", "modal");

    const modalForm = constructElement("form", "todo-form");
    const modalInput = constructElement('input', "todo-modal-input");
    modalInput.value = name
    modalInput.autocomplete = "off"
    modalInput.placeholder = "Task"
    modalInput.required = true;

    const descriptionArea = constructElement("textarea", "description-area");
    descriptionArea.autocomplete = "off"
    descriptionArea.placeholder = "Description"

    const optionalContainer = constructElement("div", "optional-container");

    const priorityGroup = constructElement("div", "optinal-group");
    priorityGroup.textContent = "Priority:";


    function createPrioritySelect(){
        const prioritySelect = document.createElement("select");

        const priorityArray = [ "none", "low", "med","high"];

        priorityArray.forEach(priority => {
            const option = document.createElement("option");
            option.textContent = priority;
            option.value = priority;
            prioritySelect.appendChild(option);
        });

        return prioritySelect;
    }


    const timeGroup = constructElement("div", "optinal-group");
    timeGroup.textContent = "Time:"

    const timeInput = document.createElement("input");
    timeInput.type = "time"


    const dateGroup = constructElement("div", "optinal-group");
    dateGroup.textContent ="Date:"

    const dateInput = document.createElement("input");
    dateInput.type = "date";


    const modalFooter = constructElement("div", "modal-footer");

    const btnGroup = constructElement("div", "btn-group");

    const cancelBtn = constructElement("button", "cancel-btn");
    cancelBtn.textContent = "Cancel"

    const createBtn = document.createElement("button");
    createBtn.type = "submit";
    createBtn.textContent = "Create"

    btnGroup.append(cancelBtn, createBtn);


    dateGroup.appendChild(dateInput);

    timeGroup.append(timeInput);
    priorityGroup.appendChild(createPrioritySelect());

    modalFooter.append(priorityGroup, btnGroup)

    optionalContainer.append( dateGroup, timeGroup);

    modalForm.append(modalInput, descriptionArea, optionalContainer, modalFooter );
    todoModal.appendChild(modalForm);

    return todoModal;

}   