
var funct = require( 'funct' );
var expect = require( 'expect.js' );

describe( 'funct', function() {

  it( 'should return funct', function() {
    function foo( a, b, c ) {
      return ( a + b ) * c;
    }

    var fooFunct = funct( foo );
    expect( fooFunct ).to.be.a( 'function' );
    expect( fooFunct( 1 ) ).to.be.a( 'function' );
    expect( fooFunct( 1 )( 2 ) ).to.be.a( 'function' );
    expect( fooFunct( 1 )( 2 )( 3 ) ).to.be( 9 );
  } );

} );
