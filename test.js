
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
		showtype(this);
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
	//showtype(this,'string');  //  'function' 'object' 'undefined' 'string' 'number' 'null'  undefined===all
	assert(ninja.chirp(2),"chirp-chirp");
	var samarai = { chirp: ninja.chirp };

	//this will steal ninja.chirp from samarai
	//ninja = {};

	try {
		assert(samarai.chirp(4) == "chirp-chirp-chirp-chirp",
			"This Does  work!!!");
	}
	catch(e) {
			console.log(e);
			assert(false,
				"This doesnt work");
	}
};

function showtype(that, what) {
	var cnt = 0;
	for (it in that){
		if ( (what == undefined) || ((typeof that[it]) === what ) )  {
		console.log( cnt++ + " " + 
						it + ":" + 
						typeof that + ";" + 
						typeof that[it] + " : " + 
						that[it]);
		}
	}
};

function assert (value, descr) {
	var li = document.createElement("li");
	var results = document.getElementById("basic");
	li.className = value ? "pass" : "fail";
	li.appendChild(document.createTextNode(descr));
	console.log("results = " + results);
	results.appendChild(li);
}




