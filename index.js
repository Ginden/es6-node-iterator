(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else {
        // Browser globals
        return root.NodeIteratorES6 = root.document.createNodeIteratorES6 = factory(root.document);
    }
}(this, function (defDocument) {
    defDocument = defDocument || (typeof document === 'undefined' ? null : document);
    console
    var iteratorSymbol = typeof Symbol === 'undefined' ? '@@iterator' : Symbol.iterator;
    var objToString = ({}).toString;
    function getNext(nodeIterator) {
        var curr = nodeIterator.nextNode();
        if (curr)
            return { value: curr, done: false }
        return { done: true };

    }
    return function NodeIteratorES6(root, whatToShow, filter) {
        var document = (this && this.createNodeIterator && this) || defDocument;
        var nodeIterator = document.createNodeIterator.apply(document, arguments);
        var ret = {};
        ret[iteratorSymbol] = function() {
            return {
                next: function() {
                    return getNext(nodeIterator);
                }
            }
        };
        return ret;
    }
}));