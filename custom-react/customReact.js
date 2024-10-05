
function customRender(reactElement, container)
{
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for(let i in reactElement.props)
    {
        domElement.setAttribute(i, reactElement.props[i]);
    }
    container.appendChild(domElement);
}

const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click me to visit google"
};

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);