function setRem(){
	document.documentElement.style.fontSize = window.innerWidth / 20 + "px";
};
window.onresize = function(){
	setRem();
};
setRem();
function ajax(option){
	function queryString(object){
		var result = [];
		for(var i in object){
			result.push(i + "=" + object[i] + "&");
		}
		return result.join("").replace(/&$/,"");
	}
	var xhr = new XMLHttpRequest(),
		type = option.type,
		data = queryString(option.data);
	xhr.open(type || "get", option.url + (data && type === "get" ? "?" + data : ""), option.asnyc || 1);
	option.data && xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			var responseText = option.dataType && option.dataType === "text" ? xhr.responseText : JSON.parse(xhr.responseText);
			if(xhr.status === 200){
				typeof option.success === "function" && option.success(responseText);
			}else{
				typeof option.fail === "function" && option.fail(responseText);
			}
		}
	};
	xhr.send(data || null);
}
ajax({
	type : "post",
	url : "http://www.ikindness.cn/api/test/post",
	dataType : "json",
	data : {
		a : 233,
		b : 666,
		c : "gg"
	},
	success : function(data){
	},
	error : function(err){
	}
})










