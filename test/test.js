
var funct = require( 'funct' );
var expect = require( 'expect.js' );

describe( 'funct', function() {

  it( 'should return wrapped funct', function() {
    function foo( a, b, c, d ) {
      return ( a + b ) * ( c - d );
    }

    var _ = void 0;
    var fooFunct = funct( foo );
    expect( fooFunct ).to.be.a( 'function' );
    expect( fooFunct( 1 ) ).to.be.a( 'function' );
    expect( fooFunct( 1 )( 2 ) ).to.be.a( 'function' );
    expect( fooFunct( 1 )()( 2 ) ).to.be.a( 'function' );
    expect( fooFunct( 1, _, 2 )( 3 ) ).to.be.a( 'function' );
    expect( fooFunct( _, _, 2 )( 3 )( 1, 4 ) ).to.be( foo( 3, 1, 2, 4 ) );
    expect( fooFunct.apply( null, [  _, _, 2 ] )( 3 )( 1, 4 ) ).to.be( foo( 3, 1, 2, 4 ) );
    expect( fooFunct( 1 )( 2 )( 3 )( 4 ) ).to.be( foo( 1, 2, 3, 4 ) );
    expect( fooFunct( 1 )( 2 )()()( 3 )( 4 ) ).to.be( foo( 1, 2, 3, 4 ) );
    expect( fooFunct()()()( 1 )( 2 )( 3 )( 4 ) ).to.be( foo( 1, 2, 3, 4 ) );
  } );

} );
