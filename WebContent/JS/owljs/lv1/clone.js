/**克隆对象lampig整理2015-7-23
 * 使用方法：
 * var obj = {a:1,b:'2',c:{},...};
 * var obj2 = owl.clone.clone(obj);
 */

owl.clone = {
		clone:function clone(obj){
	    var o;  
	    switch(typeof obj){  
	    case 'undefined': break;  
	    case 'string'   : o = obj + '';break;
	    case 'number'   : o = obj - 0;break;  
	    case 'boolean'  : o = obj;break;  
	    case 'object'   :  
	        if(obj === null){  
	            o = null;  
	        }else{  
	            if(obj instanceof Array){  
	                o = [];  
	                for(var i = 0, len = obj.length; i < len; i++){  
	                    o.push(clone(obj[i]));  
	                }  
	            }else{  
	                o = {};  
	                for(var k in obj){  
	                    o[k] = clone(obj[k]);  
	                }  
	            }  
	        }  
	        break;  
	    default:          
	        o = obj;break;  
	    }  
	    return o;     
	}
		
};

