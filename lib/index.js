
/**
 * Return a wrapped function with partial appliction ability.
 * Call the new function with equal or more number of arguments
 * it expects returns the evaled result
 * Otherwise returns partially applied function
 * @param {Function} fn
 * @param {Number} optional, numOfArgs
 * @return {Function}
 */

function funct( fn, numOfArgs ) {
  if ( typeof numOfArgs !== 'number' ) {
    numOfArgs = fn.length;
  }

  if ( numOfArgs === 0 ) {
    return fn;
  }

  return function( x ) {
    var args = Array.prototype.slice.call( arguments );
    return f( args, new Array( numOfArgs ) );
  }

  function f( args, _sofar, prev ) {
    // merge args to _sofar
    var i, j, len = args.length;
    // console.log( 'nothing changes, quick return' );
    if ( len === 0 && prev ) {
      return prev;
    }

    for ( i = 0, j = 0; i < len; ++i ) {
      // find the location to assign
      while( typeof _sofar[ j ] !== 'undefined' ){
        j++;
      }
      if ( typeof args[ i ] !== 'undefined' ) {
        _sofar[ j ] = args[ i ];
      } else {
        // skip
        j++
      }
    }

    var numOfArgsSoFar = _sofar
      .filter( function( x ) {
        return typeof x !== 'undefined';
      } ).length;

    if ( numOfArgsSoFar === numOfArgs ) {
      return fn.apply( null, _sofar );
    } else {
      return function prev() {
        var args =  Array.prototype.slice.call( arguments );
        return f( args, _sofar, prev );
      }
    }
  }
}

module.exports = exports = funct;
