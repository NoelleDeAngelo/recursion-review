// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
// if string
// return '"' + obj + '"'
// if not array or objs
// return '' + obj
// if array
// iterate
// add brackets
//  if  i is obj recurse
// if obj

// for in loop
// define an array variable []
//

// smallest = prim
var stringifyJSON = function(obj) {
  var result = '';
  if ( typeof obj === 'string' ) {
    result += '"' + obj + '"';
  } else if ( typeof obj === 'null' || 'number' || 'boolean' ) {
    result += '' + obj;

  }
  return result;
};

