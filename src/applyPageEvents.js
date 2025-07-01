


export default function applyPageListeners(){

    const projectModal = document.querySelector("#project-modal")

    const controlPanel = document.querySelector("#control-panel");

    const createProjectBtn = document.querySelector("#create-project-btn");
    

    const upcomingTab = document.querySelector("#upcoming-tab");



    createProjectBtn.addEventListener("click", () => showProjectModal())




    function showProjectModal(){
        projectModal.showModal()
    }




}
