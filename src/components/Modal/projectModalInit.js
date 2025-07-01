import Project from "../project/Project";

export default function projectModalInit(){
    const projectModal = document.querySelector("#project-modal");

    const projectModalForm = document.querySelector("#project-modal-form");
    
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
        colorGrid.classList.toggle("active");
        rotateChevron();
    }
    
    function cancelProject(){
        projectModalInput.value = "";
        projectModal.close();
    }

    function submitProjectForm(e){
        e.preventDefault();
        Project.createProject(projectModalInput.value, color);
        projectModalInput.value = "";
        projectModal.close();
    }

    

    colorToggle.addEventListener("click", () => colorGridToggle());
    
    squares.forEach(square => {
        if(square.classList[0] === color){
            square.classList.add("hidden")
        }
    
        square.addEventListener("click", () => {
            color = square.classList[0];
            projectModal.classList.replace(projectModal.classList[1], color);
            hideSquareCopy()
        
    })});

   


    projectCancelBtn.addEventListener("click", () => cancelProject())

    projectModalForm.addEventListener("submit", (e) => submitProjectForm(e))



}