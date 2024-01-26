class React{

    static createElement(tag, props, children){
        return {
            tag : tag,
            props : props,
            children : children
        }
    }

}

export default React;