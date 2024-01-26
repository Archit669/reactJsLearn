class ReactDOM{
    
    static createRoot(root){
        this.root = root;
        return this;
    }

    static Render(reactElement){
        const element = document.createElement(reactElement.tag);
        element.innerHTML = reactElement.children;
    
        for (let prop in reactElement.props){
            element.setAttribute(prop, reactElement.props[prop]);
        }
    
        root.appendChild(element);
    }
}

export default ReactDOM;