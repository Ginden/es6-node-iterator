# es6-node-iterator
Makes NodeIterator compatible with ES6 iterator protocol.
## Install

`npm install es6-node-iterator`

## Usage

* `document.createNodeIteratorES6(root, whatToShow, filter)`
* `NodeIteratorES6(root, whatToShow, filter)`
* `NodeIteratorES6.call(iframeDocument, root, whatToShow, filter)`

It can be used as AMD module.

## What is NodeIterator actually?
It's almost useless DOM API (but it can be used to retrieve Text, CData and Comments nodes).

[You can read more on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document.createNodeIterator).
