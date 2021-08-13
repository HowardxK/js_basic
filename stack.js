// stack 後進先出 Last In First Out

function Stack() {
  var items = [];
  this.push = function(element) {
   items.push(element);
  }
  this.pop = function() {
   return items.pop();
  }
  this.size = function() {
   return items.length;
  }
 }