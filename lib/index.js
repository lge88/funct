
function funct( fn, numOfArgs ) {
  if ( typeof numOfArgs !== 'number' ) {
    numOfArgs = fn.length;
  }

  return function( x ) {
    return f( x, [] );
  }

  function f( x, args ) {
    var _args = args.concat( x );
    if ( _args.length === numOfArgs ) {
      return fn.apply( null, _args );
    } else {
      return function( x ) {
        return f( x, _args );
      }
    }
  }
}

module.exports = exports = funct;
