const DOMNodeCollection = require('./dom_node_collection.js')



$l = function(argument) {


    if (typeof argument === 'string') {
        let nodes = document.querySelectorAll(argument);
        let nodeArray = Array.from(nodes);
        return new DOMNodeCollection(nodeArray);
    } else if ( argument instanceof HTMLElement){
        return new DOMNodeCollection([argument]);
    }
}

window.$l = $l;

// $(sadfa) === $l(adsfas)