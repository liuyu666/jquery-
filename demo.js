var index = 0;//定义一个全局变量，存索引值
$(function(){

	setInterval(function(){//定时器，每4秒换一张图片
        index++; 
        if(index==5){
        	index=0
        };
        changePic();
    }, 4000);

	//写一个换图片的函数 根据index值换图片（封装）
	function changePic(){
		//选取index的图片显示和小圆点变蓝，其余兄弟元素移除class,改变css样式。
		$(".pic li").eq(index).addClass("current").siblings().removeClass("current");
		$(".circle li").eq(index).addClass("first").siblings().removeClass("first");
	};

	//点击小圆点获取index值
	$(".circle li").click(function() {
        index = $(this).index(); 
        console.log(index);
        changePic();
    });
    // 点击左边index-1，调用换图片函数
    $(".left").click(function() {
        index--; 
        if(index==-1){
        	index=5
        };//保证index值正确，实现循环
        console.log(index);
        changePic();
    });
    // 点击右边index+1，调用换图片函数
    $(".right").click(function() {
        index++; 
        if(index==5){
        	index=0
        };
        console.log(index);
        changePic();
    })
})