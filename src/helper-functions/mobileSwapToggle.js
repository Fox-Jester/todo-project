import toggleContolPanel from "./toggleControlPanel"



export default function mobileSwapToggle(){
        if(screen.width <= 500){
            console.log("wah")
            toggleContolPanel()
        }
    }