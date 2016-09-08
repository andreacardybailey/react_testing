var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Gallery = require('../gallery');

describe('Gallery component', function() {
    it('Renders the gallery',  function() {
        var testImages = [
          {
            'url': 'http://www.bharatint.com/img/categories/our-cat-shop-image.png',
            'description': 'This is a cat.'
          },
          {
            'url': 'http://www.bharatint.com/img/categories/our-cat-shop-image.png',
            'description': 'This is another cat.'
          }
        ];
        var renderer = TestUtils.createRenderer();
        renderer.render(<Gallery images={testImages} />);
        var result = renderer.getRenderOutput();
        result.props.className.should.equal('gallery');
        result.props.children.length.should.equal(2);

        var galleryImage1 = result.props.children[0];
        var galleryImage2 = result.props.children[1];
    
        galleryImage1.props.url.should.equal(testImages[0].url);
        galleryImage1.props.description.should.equal(testImages[0].description);
        galleryImage2.props.url.should.equal(testImages[1].url);
        galleryImage2.props.description.should.equal(testImages[1].description);
    });
});