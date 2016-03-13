/**
 * 过滤器控件
 * 整理lampig 
 * 使用方法：
 * var fltr = f.fun("DevNo_filter", $, '../JS/owl/control/fieldfilter/filter.png', '130px', fun1);
 * 参数说明：
 * "DevNo_filter"：过滤器的唯一标示符号，为字符串， 用于区别于别的控件。
 * $： jquery构造函数
 * '../JS/owl/control/fieldfilter/filter.png'：过滤器的过滤按钮图片
 * '130px'：过滤值输入框的宽度
 * fun1:过滤时调用的函数，该函数接收{controlID: “sss”, valType:"AB", value: '123'}这样的一个对象，其中分别是过滤器的标识符，过滤类型，过滤值
 * 获取过滤器的标识符：fltr.controlID, 获取过滤器的过滤类型 fltr.valType, 获取过滤器的过滤值 fltr.value;
 * 
 */

define(function(require, exports, module){
	
	var func = function(controlID, $, imgbtnsrc, inputWidth, backfun){

		var div = $("<div></div>");
		var input = $('<input id="valInput" type="text" style="width: '+ inputWidth +';">');
		var imgcss = {
				'position':'relative',
				'z-index':'0',
				'display':'inline-block',
				'zoom':'1'
		};
		
		var img = $('<img  src="'+ imgbtnsrc + '"  id="imgbtn" />').css(imgcss);
		
		var box_css = {
			'display': 'none',
			'list-style': 'none',
			'margin': '0',
			'width': 'auto',
			'height': 'auto',
			'padding-top':'0',
			'padding-right':'0',
			'padding-bottom':'0',
			'padding-left':'15px',
			'font-size': '12px',
			'line-height': '24px',
			'position': 'absolute',
			'z-index': '5'	
		};

		var li_css_in_box = {
			'display': 'block',
			
			'border-top-width': '1px',
			'border-top-style': 'solid',
			'border-top-color': '#ccc',
			
			'border-left-width': '5px',
			'border-left-style': 'solid',
			'border-left-color': '#ccc',
			
			'border-right-width': '1px',
			'border-right-style': 'solid',
			'border-right-color': '#ccc',
			
			'background-color': '#ccc',
			
			'border-bottom': 'none',

			'padding-top':'0',
			'padding-right':'10px',
			'padding-bottom':'0',
			'padding-left':'15px',
			
			'text-align': 'left',
			'color': '#333',
			"background-color":"#e6e6e6",
			'cursor': 'pointer',
			'font-weight':'normal'
		};

		var li_last_child_css = {
			'border-bottom-width': '1px',
			'border-bottom-style': 'solid',
			'border-bottom-color': '#ccc',
		};
		
		var span_css = {
			'position': 'absolute',
			'display': 'none',
			'margin-left': '-10px'
		};

		
		var li_selected_css = {'background-color':'#f7f7f7','font-weight':'bold'};
		var span_selected_css = {'display': 'inline'};
		

		
		var box_str = 
		'<ul id="box">'
			+'<li><span>√</span>不过滤</li>'
			+'<li><span>√</span>等于</li>'
			+'<li><span>√</span>不等于</li>'
			+'<li><span>√</span>包含</li>'
			+'<li><span>√</span>不包含</li>'
			+'<li><span>√</span>开头是</li>'
			+'<li><span>√</span>开头不是</li>'
			+'<li><span>√</span>结尾是</li>'
			+'<li><span>√</span>结尾不是</li>'
		+'</ul>';
		
		var hidinput =  $('<input type="hidden" id="hiddenvalinput">');
		
		
		var box = $(box_str);
		
		box.css(box_css);
		$('li', box).css(li_css_in_box);
		$('span', box).css(span_css);
		
		$('li:first', box).css(li_selected_css);
		$('span:first', box).css(span_selected_css);
		$('li:first', box).attr("selected",true);
		
		var li_hover_css = {'background-color':'#ccc'};
		var li_out_css = {'background-color':'#e6e6e6'};
		
		$('li', box).hover(function(){
			
			//var b = $(this).attr("selected");
			
			if($(this).attr("selected")){
				
			}else{
				$(this).css(li_hover_css);
			}
		},
		function(){
			
			//var b = $(this).attr("selected");
			
			if($(this).attr("selected")){
				
			}else{
				$(this).css(li_out_css);
			}
			
		});
		
		div.append(input);
		//div.append(hidinput);
		div.append(img);
		div.append(box);
		div.val = {};
		
		//浮动菜单JS开始
		$.fn.myHoverTip = function(box) {
			//var box = $(box); // 要浮动在这个元素旁边的层
			box.css("position", "absolute");// 让这个层可以绝对定位
			var self = $(this); // 当前对象
			self.bind("click", function() {
				box.css("display", "block");
				var p = self.position(); // 获取这个元素的left和top
				var x = p.left + self.width() - 13;// 获取这个浮动层的left
				var docWidth = $(document).width();// 获取网页的宽
				if (x > docWidth - box.width() - 20) {
					x = p.left - box.width();
				}
				box.css("left", x);
				box.css("top", p.top);
				box.show();
			});
			return this;
		};
		
		img.myHoverTip(box);
		
		box.mouseleave(function() {
			$(this).hide();
		});
		
		
		$('li', box).click(function() {
			var ul = $(this).parent();
			

			$('li',box).css(li_css_in_box);
			$('li:last-child',box).css(li_last_child_css);
			$('span',box).css(span_css);
			
			$('li',box).attr("selected",false);
			
			
			$(this).css(li_selected_css);
			$('span',this).css(span_selected_css);
			$(this).attr("selected",true);
			
			var op = "NONE";
			var txt = $(this).text();
			if (txt == "√等于") {
				op = "EQ";
			} else if (txt == "√不等于") {
				op = "NEQ";
			} else if (txt == "√包含") {
				op = "IC";
			} else if (txt == "√不包含") {
				op = "NIC";
			} else if (txt == "√开头是") {
				op = "SW";
			} else if (txt == "√开头不是") {
				op = "NSW";
			} else if (txt == "√结尾是") {
				op = "EW";
			} else if (txt == "√结尾不是") {
				op = "NEW";
			} else if (txt == "√大于") {
				op = "GT";
			} else if (txt == "√大于或等于") {
				op = "GET";
			} else if (txt == "√小于") {
				op = "LT";
			} else if (txt == "√小于或等于") {
				op = "LET";
			} else if (txt == "√介于") {
				op = "BT";
			} else if (txt == "√不介于") {
				op = "NBT";
			} else if (txt == "√之后") {
				op = "GET";
			} else if (txt == "√之前") {
				op = "LET";
			}
			var name = ul.attr("id");
			$("input[name=" + name + "]").val(op);
			
			div.val = {controlID: controlID, valType:op, value: input.val()};
			
			ul.hide();
			////////////////////////////////////////////
			
			if(null!= backfun )
				backfun(div.val);
			
		});
		
		div.setInputValue = function(v){
			$(input).val();
		};
		div.initFilterType = function(){
			box.css(box_css);
			$('li', box).css(li_css_in_box);
			$('span', box).css(span_css);
			
			$('li:first', box).css(li_selected_css);
			$('span:first', box).css(span_selected_css);
		};
		
		return div;
	};
	
	
	
	return {
		fun:func
	};
});