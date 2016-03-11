/**
 * 依赖于jquery , json2.js
 */
var ajaxDataGetter = {
		/**
		 * 使用方法：
		 * 定义返回数据的处理方法：
		 * function fun(data){
		 * 		var d = data;
		 * 		d为返回的数据。
		 * };
		 * ajaxDataGetter.postGet({id:123, name:'toby'}, "http://1921.68.1.201:8080/coalSales/logs",fun);
		 * 
		 * 服务器 返回的数据格式应为 '[ok]{details:[],a:"",b:""}'（字符串）
		 * 
		 * @param postData 发往服务器端的数据
		 * @param urlStr 请求的url 
		 * @param backFun 请求成功后的数据处理函数 
		 */
		postGet:function(postData, urlStr, backFun){
			var this_ = this;
			var returnData = {};
			$.ajax({
				type : "post",
				url : contextPath + urlStr,
				data : postData,
				error : function(XMLHttpRequest, textStatus, errorThrown) {
					alert('访问服务器失败，请重试!');
				},
				success : function(data) {
					
					//invoke 本项目中 返回数据的处理 方法:
					returnData = this_.coalSales_dataHandler(data);
					
					backFun(returnData);
				}
			});	
		},
		//本项目中 返回数据的处理 方法
		coalSales_dataHandler:function(data){
			var result = [];
			if (data.StartWith("[ok]")) {
				var d = data.substr(4);
				var obj;
				if(d == ""){
					result = "";
				}else{
					obj = JSON.parse(data.substr(4));
					result = obj.details;
				}
			}
			else {
				if (data.length > 4) {
					alert(data.substr(4));
				}
				else {
					alert("服务器出错，请重试");
				}
			}
			
			return result;
		}
		
		
};