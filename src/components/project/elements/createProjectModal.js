import constructElement from "../../../helper-functions/constructElement"


export default function createProjectModal(projectName = "", color = "red"){


    const projectModal = constructElement("dialog", "modal", color);
    
    const modalForm = constructElement("form", "project-form");

    
    const projectModalInput = constructElement("input", "project-modal-input");
    projectModalInput.type= "text";
    projectModalInput.value = projectName;
    projectModalInput.placeholder = "Project name"
    projectModalInput.autocomplete = "off";
    projectModalInput.required = true;

    const modalFooter = constructElement("div", "modal-footer");
    const colorContainer = constructElement("div", "color-container");

    const colorGroup = constructElement("div", "color-group");

    const colorTag = document.createElement("p");
    colorTag.textContent = "Color";

    const chevron = constructElement("i", "fa-solid", "fa-chevron-right", "chevron")
          
    
    
    function createColorGrid(){
        const colorGrid = constructElement("div", "color-grid");
        const colorArray = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
        
        colorArray.forEach(color => {
            const square = constructElement("div", color);
            colorGrid.appendChild(square);
        })
        
        return colorGrid;
    }
    
    
    const btnGroup = constructElement("div", "btn-group");
    
    const cancelBtn = constructElement("button", "cancel-btn");
    cancelBtn.textContent = "Cancel"
    const createBtn = document.createElement("button");
    createBtn.type = "submit";
    createBtn.textContent = "Create"



    
    
    colorGroup.append(colorTag, chevron);
    colorContainer.append(colorGroup, createColorGrid());
    btnGroup.append(cancelBtn, createBtn);

    modalFooter.append(colorContainer, btnGroup);

    modalForm.append(projectModalInput, modalFooter);
    projectModal.appendChild(modalForm);

    return projectModal;
}