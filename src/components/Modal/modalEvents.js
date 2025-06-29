
function applyModalListeners(type, onCreate){
    const modal = document.querySelector(".modal");
    
    const closeBtn = document.querySelector(".cancel-btn");
    const createBtn = document.querySelector(".create-btn");
    
    const mainInput = document.querySelector("#main-input");
    
    const colorGroup = document.querySelector(".color-group");
    const chevron = colorGroup.querySelector(".chevron")
    const colorGrid = document.querySelector(".color-grid");
    
    const colorSquares = colorGrid.querySelectorAll("div");
    
    const colorClasses = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
    let color = modal.classList[1]

    function hideCurrentSquare(){
        colorSquares.forEach(square => {
            if(square.classList.contains("hidden")){
                square.classList.remove("hidden")
            }
        })

        colorSquares.forEach(square => {
            if(square.dataset.color === modal.classList[1]){
                square.classList.add("hidden");
            }
        })
    }

    function rotateChevron(){
        if(colorGrid.classList.contains("active")){
            chevron.classList.add("rotate");
        }
        else{
            chevron.classList.remove("rotate");
        }
    }


    if(colorGroup){
        colorGroup.addEventListener("click", () => {
            colorGrid.classList.contains("active") ?
            colorGrid.classList.remove("active") :
            colorGrid.classList.add("active");

            rotateChevron();
        })
    }

    if (colorGrid) {
        colorSquares.forEach(square => square.addEventListener("click", () => {
            color = square.dataset.color
            
            modal.classList.remove(...colorClasses);
            modal.classList.add(color);
            hideCurrentSquare();
            colorGrid.classList.remove("active");
            rotateChevron();
        }))
    }


    closeBtn.addEventListener("click", () => modal.remove())
    

    
    createBtn.addEventListener("click", () => {
        if(type === "project"){
            onCreate({ projectName: mainInput.value, color });
        }
            modal.remove()
    })
    

    hideCurrentSquare()
}

export default applyModalListeners;