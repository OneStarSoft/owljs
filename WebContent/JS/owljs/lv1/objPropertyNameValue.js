/**
 * 对对象的属性和其属性名称的操作
 * lampig 2015-7-23
 * 
 * 使用方法
 * 根据属性值获取属性名称：
 * var nm = Obj.getPropertyNameByValue(o, "abc123");
 * o:对象，"abc123"：对象o的属性值。
 * 只对对象的属性起作用，不对其子对象的属性起作用；只找到第一个属性值匹配的属性名称
 * 
 * */

owl.propertyNameGetter = {
		
		get:function (obj, propertyValue){
			var r;
			for(var name in obj){
				if(propertyValue == obj[name]){
					r = name;
					break;
				}
			}
			
			return r;
		}
};
