//获取对象函数
function $(str){
	var s=str.charAt(0);
	var ss=str.substr(1);
	if(s=="#"){
		return document.getElementById(ss);
	}else if(s=="."){
		return document.getElementsByClassName(ss);
	}else{
		return document.getElementsByName(str);
	}
}
//轮播图
var target=0; var leader=0;
var banner=$(".banner-ul")[0];
var rect=document.createElement("div");	

// 动态生成小圆点	
banner.parentNode.appendChild(rect);
rect.className="rect";
for(var i=0;i<2;i++){
	var span=document.createElement("span");
	rect.appendChild(span);
}
var rect_btn=rect.getElementsByTagName("span");

//鼠标经过
for(var i=0;i<rect_btn.length;i++){
	rect_btn[i].index=i;
	rect_btn[i].onmouseover=function(){
		target=this.index*1700;
		setrect();
		this.style.backgroundColor="#fff";
	}
}
//定时播放	
var num=0;
rect_btn[0].style.backgroundColor="#fff";
setInterval(function(){
	target+=1700;
	if(target>=1700*2){
		target=0;
	}
	num=Math.abs(target/1700);
	setrect();
	rect_btn[num].style.backgroundColor="#fff";
	banner.style.left=-target+"px";
}, 6000);
//缓动动画
setInterval(function(){
	leader=leader+(target-leader)/20;
	banner.style.left=-leader+"px";
},30);

// 清除小圆点默认显示
function setrect(){
	for(var i=0;i<rect_btn.length;i++){
		rect_btn[i].style.backgroundColor="";
	}
}