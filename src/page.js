
const Page = (() => {

    const controlPanel = (() => {
        const createProjectBtn = document.querySelector("#create-project-btn");

        function createProjectForm(){
            if(!(document.querySelector(".project-form"))){

                const projectForm = document.createElement("div");
                projectForm.classList.add("project-form");

                const input = document.createElement("input");
                input.type = "text";
                input.placeholder = "Project name";

                const projectFormFooter = document.createElement("div");
                projectFormFooter.classList.add("project-form-footer");

                const colorGroup = document.createElement("div");
                colorGroup.classList.add("color-group");

                const p = document.createElement("p");

                const colorContainer = document.createElement("div");
                

            }
        }
        return{}
    })

    

    
})

export default Page