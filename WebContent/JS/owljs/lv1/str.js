/**用str2,替换掉str中所有的str1*/

owl.str = {
		/**
		 * 
		 * @param str
		 * @param str1
		 * @param str2
		 * @returns
		 */
		replaceAll:function(str, str1, str2){
			return str.replace(new RegExp(str1,"gm"),str2);
		}
};

