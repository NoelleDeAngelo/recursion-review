// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
) {
  var result = [];
  node = node || document.body;
  var splitNames = node.className.split(' ');
  if (splitNames.indexOf(className) > -1) {
    result.push(node);
  }
  for (var i = 0; i < node.children.length; i++) {
    var nodeResults = getElementsByClassName(className, node.children[i]);
    result = result.concat(nodeResults);
  }
  return result;
};
