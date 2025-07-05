import clearContent from "../../../clearContent";




export default function addProjectTabEvents(tab, createList){
    
    tab.addEventListener("click", () => {

        clearContent();
        createList();
    });


   


}