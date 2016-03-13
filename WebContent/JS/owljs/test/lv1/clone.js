

/*<script type="text/javascript" src="JS/owljs/lv1/clone.js"></script>
<script type="text/javascript" src="JS/owljs/test/lv1/clone.js"></script>*/

var obj1 = {
		a:1,
		b:{
			c:{},
			d:"22"
		},
		c:"sfas"
		
};


var obj1Clone = owl.clone.clone(obj1);

console.log("assert : obj1===obj1Clone is "+(obj1 === obj1Clone));
console.log("assert : obj1==obj1Clone is "+(obj1 == obj1Clone));
