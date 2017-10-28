/*
* @Author: Administrator
* @Date:   2017-09-19 22:27:45
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-27 14:57:49
*/
$(function(){
	function resize(){
	var windowwidth=$(window).width();
	var xy=windowwidth<768;
	$("#min_ad .carousel-inner .item").each(function(i, e) {
		var $e=$(e);
		var imgSrc=xy? $e.data('img-xs') : $e.data('img-lg');
		$e.css('backgroundImage', 'url("' + imgSrc + '")');
		if(xy){
			$e.html('<img src="' + imgSrc + '" alt="" />');
		}else{
			$e.empty();
		}
	});
	}
	$(window).on("resize",resize).trigger("resize");
	$('[data-toggle="tooltip"]').tooltip()
	var $ul_w=$(".nav-tabs");
	var width=30;
	$ul_w.children().each(function(i, e) {
		width+=e.clientWidth;
		
	});
	if(width>$(window).width()){
		$ul_w.css("width",width).parent().css("overflow-x","scroll");
	}
	$newsTitle=$(".news-title")
	$("#news .nav-pills a").on("click",function(){
		var $this=$(this);
		var title=$(this).data("title");
		$newsTitle.text(title);
	})
	//1.获取手指在轮播图元素上的一个滑动方向(左右)
	//先获取界面上的轮播图容器
	var $carousel=$(".carousel")
	var startX,endX;
	var offset=50;
	//注册滑动
	$carousel.on("touchstart",function(e){
		//手指触摸开始时记录一下手指所在的坐标X
		startX=e.originalEvent.touches[0].clientX;
		console.log(startX);
	})
	$carousel.on("touchmove",function(e){
		//手指在屏幕滑动记录一下手指所在的坐标X
		endX=e.originalEvent.touches[0].clientX;
		console.log(endX)
	})
	$carousel.on("touchend",function(e){
		//获取每次运动的距离,当距离大于一定值时认为是有方向变化
		var distance=Math.abs(startX - endX);
		if(distance>offset){
			//有方向变化
			//2.根据得到的方向选择上一张或者下一张
			$(this).carousel(startX>endX ? "next":"prev")
		}
	})

})
