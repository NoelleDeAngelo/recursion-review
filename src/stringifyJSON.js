// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

var stringifyJSON = function(obj) {
  var result = '';
  if ( typeof obj === 'string' ) {
    return '"' + obj + '"';
  } else if (obj === null || typeof obj === 'number' || typeof obj === 'boolean' ) {
    return '' + obj;
  } else if (Array.isArray(obj)) {
    var arr = [];
    for (var i = 0; i < obj.length; i++) {
      if (i === obj.length - 1) {
        result += stringifyJSON(obj[i]);
      } else {
        result += stringifyJSON(obj[i]) + ',';
      }
    }
    result = '[' + result + ']';
  } else {
    result = [];
    for (key in obj) {
      if (obj[key] === undefined) {
        return '{}';
      }
      var stringedKeys = stringifyJSON(key);
      var stringedObjs = stringifyJSON(obj[key]);
      result.push(stringedKeys + ':' + stringedObjs);
    }

    return '{' + result.join(',') + '}';
  }
  return result;
};

