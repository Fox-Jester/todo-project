

const controlPanel = document.querySelector("#control-panel")
const contolPanelToggle = document.querySelector("#control-panel-toggle")

export default function toggleContolPanel(){
    controlPanel.classList.toggle("hidden");

    contolPanelToggle.classList.contains("fa-arrow-right") ?
    contolPanelToggle.classList.replace("fa-arrow-right", "fa-arrow-left") :
    contolPanelToggle.classList.replace("fa-arrow-left", "fa-arrow-right");

        
    }