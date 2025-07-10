import toggleContolPanel from "./toggleControlPanel"

const controlPanel = document.querySelector("#control-panel")

export default function mobileSwapToggle(){
        if(screen.width <= 500){
            if(!(controlPanel.classList.contains("hidden")))
            toggleContolPanel()
        }
    }