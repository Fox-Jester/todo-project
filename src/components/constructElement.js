

export default function constructElement(elementType, ...className){
    const element = document.createElement(elementType);
    className.forEach(className => {
        className === "" ? null : element.classList.add(className);
    });

    return element;
}