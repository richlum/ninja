
window.onload=function() {
		var assert = getAssert();
		var base = document.getElementById("basic");
		var li = document.createElement("li");
		li.className = "hello world";
		li.appendChild(document.createTextNode(li.className));
		base.appendChild(li);
		color = "green";
		var myFunc = outer("arg1");
		myFunc();
		testNinja();
		
};

var outer = function (anarg) {
	var color = "purple " + anarg;
	return function makefunc(name) {
		 name = "Mozilla";
		function displayName() {
			//var color = "yellow ";
			console.log(name+color);
			alert(name + color);
		}
		return displayName;
	}();
};

var results;
var getAssert = function() {
	return function makeassert(){
		function myassert (value, descr) {
			var li = document.createElement("li");
			li.className = value ? "pass" : "fail";
			li.appendChild(document.createTextNode(desc));
			console.log("results = " + results);
			results.appendChild(li);
		}
		return myassert;
	}();
};

function testNinja(){
	var ninja = {
			chirp : function(n) {
				return n > 1 ? ninja.chirp(n-1) + "-chirp" : "chirp";
			}
	};
	console.log(ninja.chirp(4));
	showtype(this,'object');  // 'function' 'object' 'undefined' 'string' 'number' 'null' 
	assert(ninja.chirp(2),"chirp-chirp");
	var samarai = { chirp: ninja.chirp };

	//ninja = {};

	try {
		assert(samarai.chirps(4) = "chirp-chirp-chirp-chirp",
			"Does this work?");
	}
	catch(e) {
			//assert(false,
			//	"This doesnt work");
	}
};

function showtype(that, what) {
	var cnt = 0;
	for (it in that){
		//if  ((typeof that[it]) === what )  {
		console.log( cnt++ + " " + 
						it + ":" + 
						typeof that + ";" + 
						typeof that[it] + " : " + 
						that[it]);
		//}
	}
};

function assert (value, descr) {
	var li = document.createElement("li");
	li.className = value ? "pass" : "fail";
	li.appendChild(document.createTextNode(descr));
	console.log("results = " + results);
	results.appendChild(li);
}




