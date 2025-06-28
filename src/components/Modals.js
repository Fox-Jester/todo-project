
import constructElement from "./constructElement.js";
import "../css/modal.css"



export const Modal = ((type) => {

    
    const contentContainer = document.querySelector("#content-container");
    const modal = constructElement("dialog", `modal`, "red");
    
    const mainInput = document.createElement("input");
    mainInput.type = "text";
    mainInput.id = "main-input"
    mainInput.placeholder = `${type.charAt(0).toUpperCase() + type.slice(1)} name`;

    const subInput = document.createElement("input");
    subInput.type = "text";
    subInput.id = "sub-input"
    subInput.placeholder = "Description";

    const modalFooter = constructElement("div", "modal-footer");
    
    const colorGroup = constructElement("div", "color-group");
    
    const p = constructElement("p");

    const colorContainer = constructElement("div", "color-container");
    
    const chevron = constructElement("i", "fa-solid", "fa-chevron-right", "chevron")
   

    const btnGroup = constructElement("div", "btn-group");
    
    const cancelBtn = constructElement("button", "cancel-btn");
    cancelBtn.textContent = "Cancel";

    const createBtn = constructElement("button", "create-btn");
    createBtn.textContent = `Create ${type}`


    
    
    if(type === "project"){
        p.textContent = "Color"

        const colorGrid = constructElement("div", "color-grid")
        
        const colorArray = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];

        colorArray.forEach(color => {
            const colorSquare = constructElement("div", "color-square", color)
            
            colorGrid.appendChild(colorSquare);

        });


        colorGroup.appendChild(p);
        colorGroup.appendChild(chevron);
        
        colorContainer.appendChild(colorGroup);
        colorContainer.appendChild(colorGrid);
       
        btnGroup.appendChild(cancelBtn);
        btnGroup.appendChild(createBtn);
    
        modalFooter.appendChild(colorContainer);
        modalFooter.appendChild(btnGroup);
    
        modal.appendChild(mainInput);
        modal.appendChild(modalFooter);
    
        contentContainer.appendChild(modal);

        modal.showModal()



    }

        
})
