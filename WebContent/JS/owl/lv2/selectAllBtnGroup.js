/**
 * 依赖于jquery
 * lampig2016-1-19
 */

var selectAllBtnGroup ={
		getInstance:function(selectAllBtnClick, inverseSelectBtnClick, noSelectAllBtnClick){
			var div = $("<div></div>");
			div.css("width","199px");
			div.show = function(){
				$(this).show();
			}
			div.hide = function(){
				$(this).hide();
			}
			
			var css = {
					width:"60px",
					float:"left",
					'margin-left':"5px",
					cursor:"pointer"
			};
			
			
			var selectAllBtn = $('<input type="button" value="全选"/>');
			selectAllBtn.css(css);
			$(selectAllBtn).click(function(){
				selectAllBtnClick();
			});
			
			var inverseSelectBtn = $('<input type="button" value="反选"/>');
			inverseSelectBtn.css(css);
			$(inverseSelectBtn).click(function(){
				inverseSelectBtnClick();
			});
			
			var noSelectAllBtn = $('<input type="button" value="全不选"/>');
			noSelectAllBtn.css(css);
			$(noSelectAllBtn).click(function(){
				noSelectAllBtnClick();
			});
			
			
			div.append(selectAllBtn);
			div.append(inverseSelectBtn);
			div.append(noSelectAllBtn);
			
			return div;
		}
};




