import Project from "../../project/Project";




export default function projectModalEvents(modal, onEdit){

    

       
    
        const modalForm = modal.querySelector(".project-modal-form");
        
        const cancelBtn = modal.querySelector(".cancel-btn");
    
        const modalInput = modal.querySelector(".project-modal-input");
    
        const colorToggle = modal.querySelector(".color-group");
        const chevron = colorToggle.querySelector(".chevron");
    
        const colorGrid = modal.querySelector(".color-grid");
        const squares = colorGrid.querySelectorAll("div");
    
        let color = modal.classList[1];

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
            modalInput.value = "";
            modal.close();
            modal.remove()
        }
    
        function submitProjectForm(e){
            e.preventDefault();
            if(onEdit){
                onEdit(modalInput.value, color)
            }
            else{
                Project.createProject(modalInput.value, color);
            }
            modalInput.value = "";
            modal.close();
            modal.remove()
        }
    
        
    
        colorToggle.addEventListener("click", () => colorGridToggle());
        
        squares.forEach(square => {
            if(square.classList[0] === color){
                square.classList.add("hidden")
            }
        
            square.addEventListener("click", () => {
                color = square.classList[0];
                modal.classList.replace(modal.classList[1], color);
                hideSquareCopy()
            
        })});
    
       
    
    
        cancelBtn.addEventListener("click", () => cancelProject())
    
        modalForm.addEventListener("submit", (e) => submitProjectForm(e))
    
    
    
    }
