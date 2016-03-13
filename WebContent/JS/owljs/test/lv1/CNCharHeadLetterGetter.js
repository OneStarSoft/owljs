

/*<script type="text/javascript" src="JS/owljs/lv1/clone.js"></script>
<script type="text/javascript" src="JS/owljs/test/lv1/clone.js"></script>*/


function test1(){
	var str = "输入一个汉字字符串";

	var result = owl.CNCharHeadLetterGetter.get(str);

	console.log("assert: "+str+"-->"+result);
}
test1();
