
//Checks if the date is today
export default function isToday(dateString){
    if(!(dateString)){
        return false
    }
    
    const [month, day, year] = dateString.split("-").map(Number);

    const inputDate = new Date(year, month - 1, day);
    const today = new Date();

    return (
        inputDate.getFullYear() === today.getFullYear() &&
        inputDate.getMonth() === today.getMonth() &&
        inputDate.getDate() === today.getDate()
    );
}