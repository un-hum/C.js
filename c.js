var c;
(function(){
	var fn = {
		// 阻止冒泡
		stopBubble:function( e ) {
			if( e && e.stopPropagation ){
				e.stopPropagation();
			}
			else{
				window.event.cancelBubble=true;
			}
		},
		// 阻止默认事件
		stopDefault:function( e ) {
			if ( e && e.preventDefault )
				e.preventDefault();
			else
				window.event.returnValue = false;
			return false;
     	},
		// 字符串常规处理
		str:function( str, params ) {
			var realLength = 0, len = str.length, charCode = -1,r = {};
			for (var i = 0; i < len; i++) {
				charCode = str.charCodeAt(i);
			if (charCode >= 0 && charCode <= 128) 
				realLength += 1;
			else
				realLength += 2;
			}
			if(params)
				realLength > params.len ? r.content =  (str.substr(0,params.len) + (params.content ? params.content : '...')) : r.content = realLength
			if(params)
				r.len = realLength
			else 
				r = realLength
			return r;
		},
		// 获取滚动条高度
		scrollTop:function() {
		    var scrollTop=0;
		    if(document.documentElement&&document.documentElement.scrollTop)
		    {
		        scrollTop=document.documentElement.scrollTop;
		    }
		    else if(document.body)
		    {
		        scrollTop=document.body.scrollTop;
		    }
		    return scrollTop;
		},
		// 深拷贝对象
		copyObj:function( obj ) {
			var tmp = {}
			for(var i in obj)
				tmp[i] = obj[i]
			return tmp
		},
		// 删除数组指定位置
		removeArrayTarget:function(arr, val) {
			var tmp = arr
			for(var i=0; i<tmp.length; i++) {
				if(tmp[i] == val)
					tmp.splice(i, 1)
			}
			return tmp
		}
	}
	c = fn
})()