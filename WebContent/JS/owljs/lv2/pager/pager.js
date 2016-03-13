//分页控件修改成功！！！lampig2015-9-18

/**
 * 页面分页控件
 * 使用方法：
 * var p = pager.fun($, data, requestData);
 * $:jquery对象，data : 数据，其格式应为：
 * data = {
 * 	condition:{
 * 		//条件
 * 	},
 * 	pager:{
 * 		currentPage：1,
 * 		pageSize：10,
 * 		totalRowCount：34
 * 	},
 * 	data:[数据]
 * };
 * 
 * aClickFunc：分页控件 受点击时，执行的方法，会给该方法传去参数2：data,其中 pager 有变化
 * 在该方法中写请求后台数据的代码
 * 
 * 
 * 
 */


define(function(require, exports, module){
	var func = function($, data, aClickFunc){
		
		var PAGES_ON_PAGE = 5;//控件上显示几个页码
		var currentPage;//当前页码
		var pageSize;//页大小
		var totalRowCount;//总数据条数
		
		
		var divpage = $("<div></div>");
		
		//创建分页页面控件的基本参数：
		currentPage = data.condition.pager.currentPage;//当前页码
		pageSize = data.condition.pager.pageSize;//页大小
		totalRowCount = data.condition.pager.totalRowCount;//总数据条数
		
		var pages = Math.ceil( totalRowCount / pageSize );//总页数
		
		var to = 0, from = 0, pageFrom = 0, pageTo = 0;
		
		var previousMore = false;//前面是否还有页
		var nextMore = false;//后面是否还有页
		
		
		if (totalRowCount == 0) {
			currentPage = 0;
			to = 0;
			from = 0;
			pageFrom = 0;
			pageTo = 0;
			previousMore = false;
			nextMore = false;
		} else {
			var offset = (currentPage - 1) * pageSize;
			from = offset + 1;
			to = Math.min(offset + pageSize, totalRowCount);
			// 设置页面可以向前后扩展的页面数，默认为5
			var temp = Math.floor((currentPage - 1) / PAGES_ON_PAGE);//分页控件修改成功！！！lampig2015-9-18
			pageFrom = temp * PAGES_ON_PAGE+ 1;
			pageTo = temp * PAGES_ON_PAGE+ PAGES_ON_PAGE;
			// 向前后翻页
			if (pageTo > pages)
				pageTo = pages;
			if (pageTo < pages) {
				nextMore = true;
			}
			if (pageFrom > 1) {
				previousMore = true;
			}
		}
		
		var indexs = "";
		for (var j = pageFrom; j <= pageTo; j++) {
			if (j == currentPage) {
				indexs += '<span>' + j + '</span>';
			} else {
				indexs += '<a  class="page_targe index" href="javascript:void(0);">' + j + '</a>';
			}
		}
		
		var nav = '<div>翻页&nbsp;&nbsp;';
		nav = nav+ ((currentPage > 1) ? '<a class="page_targe" href="javascript:void(0);">&lt;</a>': '');
		nav = nav + ((previousMore) ? '<a class="page_targe" href="#" moreflag="1">...</a>' : '');
		nav = nav + indexs;
		nav = nav+ ((nextMore) ? '<a class="page_targe" href="javascript:void(0);" moreflag="2">...</a>': '');
		nav = nav+ ((currentPage < pages) ? '<a class="page_targe" href="javascript:void(0);">&gt;</a>': '');
		
		nav = nav + '&nbsp;&nbsp;|&nbsp;&nbsp;当前显示第<span>'
				+ currentPage + '</span>页，总共<span>'
				+ pages + '</span>页，显示记录从<span>'
				+ from + '</span>到<span>' + to
				+ '</span>，总共<span>' + totalRowCount
				+ '</span>条记录</div>';
		
		divpage.append($(nav));

		$(".page_targe", divpage).each(function() {
			$(this).click(function() {
				var page = $(this).html();
				if (!page)
					page = 1;
				if (page == "&lt;")
					page = currentPage - 1;
				else if (page == "&gt;")
					page = currentPage + 1;
				else if (page == "...") {
					var moreflag = $(this).attr("moreflag");
					if (moreflag == "1") {
						page = pageFrom - 1;
					} else {
						page = pageTo + 1;
					}
				}
				
				data.condition.pager.currentPage = page;

				aClickFunc(data);
				
			});
		});
		
		return divpage;
	};
	
	return {
		fun:func
	};
});