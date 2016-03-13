/**
 * 简单的可编辑的列表
 * lampig2015-6-24
 */
define(function(require, exports, module){
	var $ = require("part/component/jquery/1.4.4/jquery.js");
	/**
	 * 传入的参数格式
	 */
	var params = {
			columns:[
			        {field:"", title:"", inputType:""},
			        {field:"", title:"", inputType:""}
			        ],
			data:[
			        {id:"", name:"", content:""},
			        {id:"", name:"", content:""},
			        {id:"", name:"", content:""},
			        {id:"", name:"", content:""},
			        {id:"", name:"", content:""}
			     ],
			fun:{
				add:function(){},
				edit:function(){},
				del:function(){},
				permission:function(){}	
			},
			/** 控件样式： */
			controlStyle:{
				TableStyle:{
					
				},
				TRStyle:{
					height:"24px"
				},
				headTRStyle:{
					background_color:"#fff",
					height:"",
					font_size:"14px",
					TDStyle:{
						
					}
				},
				dataTRStyle:{
					
				}
				
				
			}
	};
	
	/**
	 * 设置控件的样式：
	 */
	function setStyle(){
		
		
		
	};
	
	function fun(params){
		var table = $("<table></table>");
		
		/**  加表格头部：begin */
		var head_tr = $("<tr></tr>");
		var tdCount_ = params.columns.length;
		for(var x = 0; x < tdCount_; x++){
			var td = $("<td align='center'>"+params.columns[x].title+"</td>");
			head_tr.append(td);
		}
		var td_head_last = $("<td align='center' style='width:100px;'>操作</td>");
		head_tr.append(td_head_last);
		table.append(head_tr);
		/**  end */
		//-----------------------------------------------------------
		/**  加数据行： */
		var dataCount = params.data.length;
		for(var i = 0; i < dataCount; i++){
			var tr = $("<tr></tr>");
			var tdCount = params.columns.length;
			for(var j = 0; j < tdCount; j++){
				var td = $("<td></td>");
				var input = $("<input readonly='readonly' name='"+params.columns[j].field+"'  type='"+params.columns[j].inputType+"'/>");
				$(td).append(input);
				input.val(params.data[i][params.columns[j].field]);
				tr.append(td);
			}
			/** 最后一列，操作列： */
			var edit_a = $("<a href='#'>修改</a>");
			var delete_a = $("<a href='#'>删除</a>");
			var permission_a = $("<a href='#'>权限</a>");
			/** */
			$(edit_a).click(function(){
				var thisTR = $(this).parent().parent();
				if($(this).text() == "修改"){
					$(this).text("保存")
					$("input[name!='id']", thisTR).removeAttr("readonly");
				}else if($(this).text() == "保存"){
					var data = {};
					$('input', thisTR).each(function(i){
						data[this.name] = $(this).val();
					});
					/** 保存修改调用的方法：  */
					var back = params.fun.edit(data);
					if(back == false){
						$(this).text("修改");
						$("input[name!='id']", thisTR).attr("readonly", "readonly");
					}
				}
				
			});
			$(delete_a).click(function(){
				var thisTR = $(this).parent().parent();
				var data = {};
				$('input', thisTR).each(function(i){
					data[this.name] = $(this).val();
				});
				params.fun.del(data);
			});
			$(permission_a).click(function(){
				var thisTR = $(this).parent().parent();
				var data = {};
				$('input', thisTR).each(function(i){
					data[this.name] = $(this).val();
				});
				params.fun.permission(data);
			});
			var td_last = $("<td></td>");
			td_last.append(edit_a);
			td_last.append("&nbsp;");
			td_last.append(delete_a);
			td_last.append("&nbsp;");
			td_last.append(permission_a);
			
			tr.append(td_last);
			table.append(tr);
		}
		/** 最后一行，添加数据的行： */
		var tr_last = $("<tr></tr>");
		var tdCount_last = params.columns.length;
		for(var j = 0; j < tdCount_last; j++){
			var td = $("<td></td>");
			var input = $("<input  name='"+params.columns[j].field+"'  type='"+params.columns[j].inputType+"'/>");
			$(td).append(input);
			tr_last.append(td);
		}
		var lastTr_lastTD = $("<td></td>");
		tr_last.append(lastTr_lastTD);
		var add_a = $("<a href='#'>保存</a>");
		lastTr_lastTD.append(add_a);
		$(add_a).click(function(){
			var thisTR = $(this).parent().parent();
			var data = {};
			$('input', thisTR).each(function(i){
				data[this.name] = $(this).val();
			});
			params.fun.add(data);
		});
		table.append(tr_last);
		return table;
	}
	return {
		create:fun
	};
	
});