import applyProjectEvents from "./components/Modal/applyProjectEvents";


export default function applyPageListeners(){

    const projectModal = document.querySelector("#project-modal")

    const controlPanel = document.querySelector("#control-panel");

    const createProjectBtn = document.querySelector("#create-project-btn");
    const controlPanelOpenBtn = document.querySelector("#control-panel-open-btn");
    const controlPanelCloseBtn = document.querySelector("#control-panel-close-btn");

    const upcomingTab = document.querySelector("#upcoming-tab");

    controlPanelCloseBtn.addEventListener("click", () => closeControlPanel());
    controlPanelOpenBtn.addEventListener("click", () => openControlPanel());

    createProjectBtn.addEventListener("click", () => showProjectModal())


    function closeControlPanel(){
        controlPanel.classList.add("hidden");
        controlPanelOpenBtn.classList.remove("hidden");
    }

    function openControlPanel(){
        controlPanel.classList.remove("hidden");
        controlPanelOpenBtn.classList.add("hidden");
    }

    function showProjectModal(){
        projectModal.showModal()
    }

    applyProjectEvents();


}
