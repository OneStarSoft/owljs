/**
 * 依赖于
 * lv1/jquery/jquery-1.10.2.js , 
 * lv1/json2.js
 */

owl.ajax  = {
		/**
		 * 使用方法：
		 * 定义返回数据的处理方法：
		 * function fun(data){
		 * 		var d = data;
		 * 		d为返回的数据。
		 * };
		 * owl.ajax.post({id:123, name:'toby'}, "http://1921.68.1.201:8080/coalSales/logs",fun);
		 * 
		 * 服务器 返回的数据格式应为 '[ok]{details:[],a:"",b:""}'（字符串）
		 * 
		 * @param postData 发往服务器端的数据
		 * @param urlStr 请求的url 
		 * @param backFun 请求成功后的数据处理函数 
		 */
		post:function(postData, urlStr, backFun){
			var this_ = this;
			var returnData = {};
			$.ajax({
				type : "post",
				url : urlStr,
				data : postData,
				error : function(XMLHttpRequest, textStatus, errorThrown) {
					alert('访问服务器失败，请重试!');
				},
				success : function(data) {
					backFun(returnData);
				}
			});	
		}
};