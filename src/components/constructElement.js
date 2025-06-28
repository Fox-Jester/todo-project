

export default function constructElement(elementType, ...className){
    const element = document.createElement(elementType);
    className.forEach(className => element.classList.add(className));

    return element;
}