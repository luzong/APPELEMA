$(".footer ul li:nth-child(1)").on("click",function(){
	window.location.href="index.html"
})
$(".footer ul li:nth-child(2)").on("click",function(){
	window.location.href="faxian.html"
})
$(".footer ul li:nth-child(3)").on("click",function(){
	window.location.href="dingdan.html"
})
$(".footer ul li:nth-child(4)").on("click",function(){
	window.location.href="my.html"
})
$(".denglu").on("click",function(){
	window.location.href="denglu.html"
})
$(".denglu1").on("click",function(){
	window.location.href="dengluhou.html"
})
$(".index-header ul li i").on("click",function(){
	window.location.href="dingdan.html"
})
	var i=5
	var yel=null
    $("#eee").on("click",function(){
    	if(yel!=null){
    		return false
    	}
    	yel=setInterval(function(){
		
		console.log(123)
		if(i!=0){
			i--
			$("#eee").html("已发送"+i+"s")
			$(".cli").css("background","#4dc060")
			$(".cli").css("text-align","center")
					
		}else{
			i=20;
			$("#eee").html("重新发送")
			$(".cli").css("background","#4dc060")
			clearTimeout(yel)
			yel=null
		}
	},1000)
   })
    
function rand(max,min){
			if(min>max){
				var san;
				san=max;
				max=min;
				min=san;
			}
			return Math.ceil(Math.random()*(max-min+1))+(min-1)
		}//定义随机数函数  包含最大最小值
window.onload=function(){
	var a=rand(1,9);
	var b=rand(0,9);
	var c=rand(0,9);
	var d=rand(0,9);
	var e=rand(0,9);
	var f=rand(0,9);
	var g=rand(0,9);
	var h=rand(0,9);
	var i=rand(0,9);
	var j=rand(0,9);
	var k=rand(0,9);
	//生成随机字母
	var z=rand(97,122);
	var m=String.fromCharCode(z);
	$("#sj").html(a+""+b+""+c+""+d+""+e+""+f+""+g+""+h+""+i+""+j+""+m+""+k);
	
}
