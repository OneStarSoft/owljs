/**
 * 控制textInput控件可用，不可用。
 * lampig2015-10-15
 */

var controllingTextInput = {
		setDisabled:function(jquerySelector){
			$(jquerySelector).val("");
			$(jquerySelector).css("background-color", "#FFFFFF");
			$(jquerySelector).attr("disabled", "disabled");
			$(jquerySelector).css("border-color", "#E7E5E5");
		},
		setEnabled:function(jquerySelector){
			//$(jquerySelector).css("background-color", "#FFFFFF");
			$(jquerySelector).removeAttr("disabled");
			$(jquerySelector).css("border-color", "#999999");
		}
};

