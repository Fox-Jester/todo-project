import modal from "./components/modal/modal";




export default function applyPageListeners(){

   

  

    const createProjectBtn = document.querySelector("#create-project-btn");
    

    const upcomingTab = document.querySelector("#upcoming-tab");



    createProjectBtn.addEventListener("click", () => modal.showProjectModal())








}
