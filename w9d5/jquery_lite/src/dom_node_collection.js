class DOMNodeCollection{
    constructor(nodearr){
        this.nodeArr = nodearr;


    }

    html(param){
        if (param === undefined) {
            return this.nodeArr[0].innerHTML
        };

        this.nodeArr.forEach(node => {
            node.innerHTML = param
        });
    }
    
    empty() {
        this.nodeArr.forEach(node => {
            node.innerHTML = ''
        });
    };

    append(argh){
        if ( argh instanceof HTMLElement){
            this.nodeArr.forEach(node => {
                node.innerHTML += (argh.outerHTML);
            })
        } else if (argh instanceof DOMNodeCollection) {
            this.nodeArr.forEach(node => {
                argh.nodeArr.forEach(n => {
                    node.innerHTML += n.outerHTML;
                });
            });
        } else if (typeof(argh) === 'string') {
            this.nodeArr.forEach(node => {
                node.innerHTML += argh;
            })
        }
    };
    attr(attribute){
        return this.nodeArr[0].attributes[attribute].value;
    };
    
    addClass(value){
        this.nodeArr[0].classList.add(value);
    };
    removeClass(value) {
        this.nodeArr[0].classList.remove(value);
    };
    children() {
        let childnodes = [];
        this.nodeArr.forEach(node => {
            childnodes.push(node.childNodes);
        });
        return new DOMNodeCollection(childnodes);
    };

    parent() {
        let parentNodes = [];
        this.nodeArr.forEach(node => {  
            parentNodes.push(node.parentNode);
        });
        return new DOMNodeCollection(parentNodes);
    };


}
module.exports = DOMNodeCollection;

'<p>im a paragraph</p>'
'im a paragraph'