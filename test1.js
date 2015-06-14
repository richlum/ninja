window.onload = function() {
  var base = document.getElementById("basic");
  var li = document.createElement("li");
  li.className = "hello world";
  li.appendChild(document.createTextNode(li.className));
  base.appendChild(li);
  color = "green";
  var myFunc = outer().makefunc("arg1");
  myFunc();
};

var outer = function() {
  var color = "purple ";
  return function makefunc(name) {
    // name = "Mozilla";
    function displayName() {
      //var color = "yellow ";
      alert(name + color);
    }
    return displayName;
  };
};
