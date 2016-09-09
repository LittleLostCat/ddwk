
// &:hover .t
// 	height 1px
// 	width 100%
// &:hover .l
// 	width 1px
// 	height 100%
// &:hover .b
// 	height 1px
// 	width 100%
// &:hover .r
// 	width 1px
// 	height 100%
// $(".header .nav .item").mouseenter(function(){
// 	$(this).find(".l").css("width",1+"px").stop().animate({
// 		height:"100%"
// 	},500);
// 	$(this).find(".r").css("width",1+"px").stop().animate({
// 		height:"100%"
// 	},500);
// 	$(this).find(".t").css("height",1+"px").stop().animate({
// 		width:"100%"
// 	},500);
// 	$(this).find(".b").css("height",1+"px").stop().animate({
// 		width:"100%"
// 	},500);
// }).mouseleave(function(){
// 	$(this).find(".l").stop().animate({
// 		height:"0"
// 	},500);
// 	$(this).find(".r").stop().animate({
// 		height:"0"
// 	},500);
// 	$(this).find(".t").stop().animate({
// 		width:"0"
// 	},500);
// 	$(this).find(".b").stop().animate({
// 		width:"0"
// 	},500);
// })
var topx;
$(".leftLink").mouseenter(function(){
	$(".leftLink").stop().animate({
		"right":0
	});
}).mouseleave(function(){
	$(".leftLink").stop().animate({
		"right":-120 + "px"
	});
})
var bodyWidth = $(window).width(),
	topValue = parseFloat($(".main-part-4 .animate .item .text").css("top")),
	bannerHeight = parseFloat($(".banner a img").css("height")),
	itemHeight = bodyWidth*0.2495*0.8;
$(".banner").css("height",bannerHeight+"px")
$(".banner .arrow").css("top",bannerHeight*0.45+"px")
$(".main-part-4").css("height",itemHeight+"px")
$(window).resize(function(){
var bodyWidth = $(window).width(),
	topValue = parseFloat($(".main-part-4 .animate .item .text").css("top")),
	bannerHeight = parseFloat($(".banner a img").css("height")),
	itemHeight = bodyWidth*0.2495*0.8;
	$(".banner").css("height",bannerHeight+"px")
	$(".banner .arrow").css("top",bannerHeight*0.45+"px")
	$(".main-part-4").css("height",itemHeight+"px")
	if(bodyWidth<1240){
		$(".footer .cover").css("width",100+"%")
	}else{
		$(".footer .cover").css("width",1240+"px")
	}
})
$(window).scroll(function(e){
	var cp = $(".main-part-1 .container .text").offset().top,
		pic1 = $(".main-part-2 .first .img .firstPic").offset().top,
		pic2 = $(".main-part-2 .second .img .secondPic").offset().top,
		firstPic = $(".main-part-2 .first").offset().top,
		secondPic = $(".main-part-2 .second").offset().top,
		title = $(".main-part-3 .title").offset().top,
		textPic = $(".main-part-4 .animate").offset().top,
		text = $(".main-part-4 .animate .item .text").offset().top,
		icon = $(".main-part-5 .img").offset().top,
		screenHeight = $(window).height(),
		screenScroll = $(window).scrollTop();
	if(screenScroll + screenHeight >=cp){
		$(".main-part-1 .container .text").addClass("slideAnimation");
		topx = -(screenScroll-bannerHeight)/2;
		$(".main-part-1 .container .img").stop().animate({
			"top":topx+"px"
		},300,"swing")
		$(".main-part-1 .container .text").stop().animate({
			"top":120-topx/10+"px"
		},300)
	}else{
		$(".main-part-1 .container .text").removeClass("slideAnimation");
	}
	//终端形象动画
	if(screenScroll + screenHeight >= pic1){
		$(".main-part-2 .first .img .firstPic").addClass("addRight");
		$(".main-part-2 .pic .shadow1").addClass("addShadow");
	}else{
		$(".main-part-2 .first .img .firstPic").removeClass("addRight");
		$(".main-part-2 .pic .shadow1").removeClass("addShadow");
	}

	if(screenScroll + screenHeight >= pic2){
		$(".main-part-2 .second .img .secondPic").addClass("addLeft");
		$(".main-part-2 .pic .shadow2").addClass("addShadow");
	}else{
		$(".main-part-2 .second .img .secondPic").removeClass("addLeft");
		$(".main-part-2 .pic .shadow2").removeClass("addShadow");
	}
	// 终端形象图片动画
	if(screenScroll + screenHeight >= firstPic){
		$(".main-part-2 .first .big").stop().animate({
			left:-50+screenScroll/25+"px"
		},300);
	}
	if(screenScroll + screenHeight >= firstPic){
		$(".main-part-2 .second .big").stop().animate({
			left:50-screenScroll/25+"px"
		},300);
	}
	//第三部分动画
	if(screenScroll + screenHeight >= title){
		$(".main-part-3 .title .partTitle").addClass("addTop");
	}else{
		$(".main-part-3 .title .partTitle").removeClass("addTop");
	}
	//方格的鼠标事件
	$(".main-part-3 .bottom .common").mouseenter(function(){
		$(this).css({
			"background-color":"white"
		})
		$(this).find($(".part1")).stop().animate({
			opacity:"0"
		},500);
		$(this).find($(".part2 .top2")).stop().animate({
			top:"162px"
		},500);
		$(this).find($(".part2 .desc")).stop().animate({
			top:"338px"
		},500);
		$(this).find($(".part2 .more2")).stop().animate({
			top:"386px"
		},500);
	}).mouseleave(function(){
		$(this).css({
			"background-color":"transparent"
		})
		$(this).find($(".part1")).stop().animate({
			opacity:"1"
		},500);
		$(this).find($(".part2 .top2")).stop().animate({
			top:"0px"
		},500);
		$(this).find($(".part2 .desc")).stop().animate({
			top:"0px"
		},500);
		$(this).find($(".part2 .more2")).stop().animate({
			top:"0px"
		},500);
	});
	//图片
	if(screenScroll + screenHeight >= textPic){
		$(".main-part-4 .animate .item .shadow").addClass("addShadow");
		$(".main-part-4 .animate").addClass("addRight");
	}else{
		$(".main-part-4 .animate .item .shadow").removeClass("addShadow");
		$(".main-part-4 .animate").removeClass("addRight");
	}
	if(screenScroll + screenHeight >= text){
		$(".main-part-4 .animate .item .title").addClass("addUp");
		$(".main-part-4 .animate .item .text").stop().animate({
			top: 50 - (screenScroll-2500)/50+"%"
		},300);
	}else{
		$(".main-part-4 .animate .item .title").removeClass("addUp");
	}
	//小图标动画
	if(screenScroll + screenHeight >= icon){
		$(".main-part-5 .container .img .job").addClass("addMoveUp1");
		$(".main-part-5 .container .img .video").addClass("addMoveUp2");
		$(".main-part-5 .container .img .download").addClass("addMoveUp3");
		$(".main-part-5 .container .img .faq").addClass("addMoveUp4");
	}else{

		$(".main-part-5 .container .img .job").removeClass("addMoveUp1");
		$(".main-part-5 .container .img .video").removeClass("addMoveUp2");
		$(".main-part-5 .container .img .download").removeClass("addMoveUp3");
		$(".main-part-5 .container .img .faq").removeClass("addMoveUp4");
	}
})
//banner
var index = $(".banner .li").length - 1,
	_index = 0,
	timer;
function change(){
	$(".banner .left").click(function(){
		clearInterval(timer);
		_index = _index <= 0 ? index : _index-1;
		$(".banner .li").eq(_index).fadeOut(300).siblings().fadeIn(300);
		console.log(timer)
		timer = setInterval(function(){
			_index = _index >=index ? 0 : _index+1;
			$(".banner .li").eq(_index).fadeOut(300).siblings().fadeIn(300);
			console.log(timer);
		},3000)
	})
	$(".banner .right").click(function(){
		clearInterval(timer);
		_index = _index >=index ? 0 : _index+1;
		$(".banner .li").eq(_index).fadeOut(300).siblings().fadeIn(300);
		timer = setInterval(function(){
			_index = _index >=index ? 0 : _index+1;
			$(".banner .li").eq(_index).fadeOut(300).siblings().fadeIn(300);
			console.log(timer);
		},3000)
	})
	$(".banner .right").click();
}
change();