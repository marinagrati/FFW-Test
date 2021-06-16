let parseUrl = function (href) {
  let obj = document.createElement("a");
  obj.href = href;
  return obj;
};
let obj = parseUrl("http://ffwagency.com/do/any.php?a=1#foo");

console.log(obj.hash);
console.log(obj.hostname);
console.log(obj.pathname);
