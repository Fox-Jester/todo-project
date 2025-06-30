import createProjectTab from "../project/createProjectTab";

export default function applyProjectEvents(){
    const projectModal = document.querySelector("#project-modal");

    const projectCreateBtn =document.querySelector("#project-create-btn");
    const projectCancelBtn =document.querySelector("#project-cancel-btn");

    const projectModalInput = document.querySelector("#project-modal-input");

    const colorToggle = document.querySelector(".color-group");
    const chevron = colorToggle.querySelector(".chevron");

    const colorGrid = document.querySelector(".color-grid");
    const squares = colorGrid.querySelectorAll("div");

    let color = projectModal.classList[1]
    function hideSquareCopy(){
        squares.forEach(square => {
            square.classList.remove("hidden");
            if(square.classList[0] === color){
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
    
    function colorGridToggle(){
        colorGrid.classList.contains("active") ?
        colorGrid.classList.remove("active") :
        colorGrid.classList.add("active");
        
        rotateChevron()
    }
    
    function cancelProject(){
        projectModalInput.value = ""
        projectModal.close()
    }

    

    colorToggle.addEventListener("click", () => colorGridToggle());
    
    squares.forEach(square => {
        if(square.classList[0] === color){
            square.classList.add("hidden")
        }
    
        square.addEventListener("click", () => {
            projectModal.classList.remove(projectModal.classList[1]);
            color = square.classList[0]
            projectModal.classList.add(color);
            hideSquareCopy()
        
    })});

   

    projectCancelBtn.addEventListener("click", () => cancelProject())

    projectCreateBtn.addEventListener("click", () => {
        createProjectTab(projectModalInput.value, color);
        projectModalInput.value = "";
        projectModal.close();
    })


}