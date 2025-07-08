import isToday from "./isToday";



export default function isPastDue(dateString, time){


    const [month, day, year] = dateString.split("-").map(Number);

    const inputDate = new Date(year, month - 1, day);
    const today = new Date();

    function checkTime(){
      
        const newTimeString = time.replace("pm", "");
        const splitTime = newTimeString.split(":");
        let hour
        const min = parseInt(splitTime[1]);

       

        if(time.slice(-2) === "pm"){

            if(splitTime[0] !== "12"){
                hour = (parseInt(splitTime[0]) + 12);

            }
            else{ hour = 12}
        }
        else {
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