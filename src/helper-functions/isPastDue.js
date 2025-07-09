import isToday from "./isToday";



export default function isPastDue(dateString, time){

    if(!((dateString) && (time))){
        return false
    }

    if(!(dateString)){
        return checkTime()
    }

    const [month, day, year] = dateString.split("-").map(Number);

    const inputDate = new Date(year, month - 1, day);
    const today = new Date();

    function checkTime(){
      
        let hour
        let min 
        
        function splitString(timeString){
            
            return (timeString.split(":"));
        }
        
        
        
        if(time.slice(-2) === "pm"){
            const trimmed = time.replace("pm", "");
            const splitTime = splitString(trimmed);
            min = parseInt(splitTime[1]);

            if(splitTime[0] !== "12"){
                hour = (parseInt(splitTime[0]) + 12);

            }
            else{ hour = 12}
        }
        else {
            const trimmed = time.replace("am", "");
            const splitTime = splitString(trimmed);
            min = parseInt(splitTime[1]);
            if(splitTime[0] === "12"){
                hour = 0
            }
            else{ hour = parseInt(splitTime[0])}
        }

        const totalMins = ((hour * 60) + min);

        return (totalMins < (((today.getHours()) * 60) + (today.getMinutes())))

        
    }

    if(isToday(dateString)){
        return checkTime()
    }
    else{
        return ((inputDate <= today))
    }

}