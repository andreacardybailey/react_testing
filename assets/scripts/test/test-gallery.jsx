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
            'url': 'https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg?itok=FSzwbBoi',
            'description': 'This is a dog.'
          }
        ];
        var renderer = TestUtils.createRenderer();
        renderer.render(<Gallery images={testImages} />);
        var result = renderer.getRenderOutput();
        result.props.className.should.equal('gallery');
        result.props.children.length.should.equal(2);

        Object.keys(result.props.children).map(function(id, index) {
            var galleryImage = result.props.children[index];
            galleryImage.props.url.should.equal(testImages[index].url);
            galleryImage.props.description.should.equal(testImages[index].description);
        });
    });
});