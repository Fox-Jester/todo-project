import clearContent from "../../../clearContent";



export default function addProjectTabEvents(tab, createList){
    
    tab.addEventListener("click", () => {

        clearContent();
        createList();
    });


   
    const tabMenuGroup = tab.querySelector(".tab-menu-group");
    const dropdown = tabMenuGroup.querySelector(".project-tab-dropdown");

    tabMenuGroup.addEventListener("click", () => {
        dropdown.classList.remove("hidden");
    })

}