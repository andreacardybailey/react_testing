var React = require("react");
var ReactDOM = require("react-dom");

var Gallery = require('./gallery');

var IMAGES= [
  {
    'url': 'http://www.bharatint.com/img/categories/our-cat-shop-image.png',
    'description': 'This is a cat.'
  },
  {
    'url': 'http://www.bharatint.com/img/categories/our-cat-shop-image.png',
    'description': 'This is another cat.'
  }
];


var ShowGallery = function(props) {
  return(
    <Gallery images={IMAGES} />
  );
}

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<ShowGallery />, document.getElementById("app"));
});