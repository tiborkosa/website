console.log('hi');

var b = document.getElementsByClassName('buttons');
//b[0].p = 'alma';
/*var bbb;
if(b[0].parentNode.hasAttribute("id")){
    bbb=b[0].parentNode.getAttribute('id');
};*/
//console.log(b[0].p);


var t0 = performance.now();
//var butt = document.getElementById('button-wrapper');
document.getElementById('button-wrapper').children[0].pizza = 'peperoni';
console.log(document.getElementById('button-wrapper').children[0].pizza);
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")