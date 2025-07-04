import Modal from "./components/Modal/Modal";



export default function applyPageListeners(){

   

  

    const createProjectBtn = document.querySelector("#create-project-btn");
    

    const upcomingTab = document.querySelector("#upcoming-tab");



    createProjectBtn.addEventListener("click", () => Modal.showProjectModal())








}
