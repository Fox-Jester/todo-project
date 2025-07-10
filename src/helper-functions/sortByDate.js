import parseDateTime from "./parseDateTime";



export default function sortTodos(todoArray){
    return todoArray.sort((a, b) => {
        const dateA = parseDateTime(a);
        const dateB = parseDateTime(b);
        
        if(!a.date) return 1
        if(!b.date) return -1

         return dateA - dateB; 
    })
}

