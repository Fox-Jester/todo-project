
import constructElement from "../constructElement.js";
import "./modal.css"



export const createModal = (type) => {

    if (type !== "project" && type !== "todo") return;

    const contentContainer = document.querySelector("#content-container");

    const modal = constructElement("dialog", `modal`, "red");
    
    const mainInput = document.createElement("input");
    mainInput.type = "text";
    mainInput.id = "main-input"
    mainInput.autocomplete = "off"
    mainInput.placeholder = `${type.charAt(0).toUpperCase() + type.slice(1)} name`;

    const subInput = document.createElement("input");
    subInput.type = "text";
    subInput.id = "sub-input"
    subInput.autocomplete = "off"
    subInput.placeholder = "Description";

    const modalFooter = constructElement("div", "modal-footer");
    
    const optionContainer = constructElement("div", "option-container");
    
    const btnGroup = constructElement("div", "btn-group");
    
    const cancelBtn = constructElement("button", "cancel-btn");
    cancelBtn.textContent = "Cancel";
    
    const createBtn = constructElement("button", "create-btn");
    createBtn.textContent = `Create ${type}`
    
    function createColorGrid(){

        const colorArray = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
        const colorGrid = constructElement("div", "color-grid")
        colorArray.forEach(color => {
            const colorSquare = constructElement("div", color)
            colorSquare.setAttribute('data-color', color);
            colorGrid.appendChild(colorSquare);
            
        });

        return colorGrid;
    }
    
    function createColorContainer(){
        
        const colorContainer = constructElement("div", "color-container");
        
        if (type === "project"){

            const colorText = constructElement("p");
            colorText.textContent = "Color";

            const chevron = constructElement("i", "fa-solid", "fa-chevron-right", "chevron");
            
            const colorGroup = constructElement("div", "color-group");
             
            colorGroup.appendChild(colorText);
            colorGroup.appendChild(chevron);
            
            colorContainer.appendChild(colorGroup);
            colorContainer.appendChild(createColorGrid());
            
        }
        
        else if(type === "todo"){
            
        }
        return colorContainer;
    }
    
    function createDateContainer(){}
    
    
    function CreateBaseModal(){

        optionContainer.appendChild(createColorContainer())
        
        btnGroup.appendChild(cancelBtn);
        btnGroup.appendChild(createBtn);
        
        modalFooter.appendChild(optionContainer);
        modalFooter.appendChild(btnGroup);
        
        modal.appendChild(mainInput);
        modal.appendChild(modalFooter);

        return modal;
    }
    
    
    if(type === "project"){
        const projectModal = CreateBaseModal()
        contentContainer.appendChild(projectModal);
        projectModal.showModal();
    }

        

    

        
}
