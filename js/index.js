$(function(){
	/*获取屏幕的宽高*/
	var nowpage=0;
	//当前页数
	var width=window.innerWidth;
	var height=window.innerHeight;
	
	$(".content").width(width);
	$(".content").height(4*height);
	
	$(".page").width(width);
	$(".page").height(height);
	//不是juery自带的，是引入的插件
	//手指触屏滑动的时间
	$(".content").swipe({
		swipe:function(event,direction,distance,duration,fingerCount){
			/*console.log(direction);打印*/
			if(direction=="up"){
				nowpage++;
			}
			if(direction=="down"){
				nowpage--;
			}
			if(nowpage>3){
				nowpage=3;
			}else if(nowpage<0){
				nowpage=0;
			}
			
			$(".content").animate({top:-nowpage*100+"%"},{duration:400,complete:function(){
				if(nowpage==1){
					$(".page2-farm").fadeIn(2000,function(){
						$(".page2-it").fadeIn(2000)
					})
				}
				if(nowpage==2){
					$(".page3-et").fadeIn(2000);
					$(".page3-lt").fadeIn(3000);
					$(".page3-bus").animate({left:"-100%"},{duration:2000})
					$(".page3-human").animate({right:"50%"},{duration:3000,complete:function(){
						$(".page3-bus").fadeOut(3000);
						$(".page3-busStation").fadeOut(3000);
						$(".page3-et").fadeOut(3000);
						$(".page3-human").fadeOut(3000);
						$(".page3-lt").fadeOut(3000,function(){
							$(".page3-wall").fadeIn("3000");
							$(".page3-human2").fadeIn("3000",function(){
								$(".page3-txt").animate({width:"30%"},{duration:400,complete:function(){
									$(".page3-where").animate({width:"55%"},{duration:400})
								}})
							});
						});
					}})
				}
			}})
		}
	});
	//animate ({要做的动画效果})
	$(".page1-Building").fadeIn(2000,function(){
		$(".page1-flight").animate({width:"70%"},{duration:1000})
	});
})

/*$(document).ready(function(){
	
})*/
/*等文档完成之后再执行js代码*/