///*<!-- 右边固定窗口开始 -->*/
$('.G1 p').click(function(){
	$(this).hide();
	$('#GD .youtu1').hide();
})

$('.G1 .yt').mouseenter(function(){
	$('#GD .dou').stop().animate({
		'right':'40px'
	},40)
})
$('.G1 .yt').mouseleave(function(){
	$('#GD .dou').stop().animate({
		'right':'-26px'
	},40)
})
$('.g1 li .youtu2').mouseenter(function(){
	$('.lb').show();
})
$('.g1 li .youtu3').mouseenter(function(){
	$('.lb1').show();
})
$('.g1 li .youtu4').mouseenter(function(){
	$('.lb2').show();
})
$('.g1 li .youtu2').mouseleave(function(){
	$('.lb').hide();
})
$('.g1 li .youtu3').mouseleave(function(){
	$('.lb1').hide();
})
$('.g1 li .youtu4').mouseleave(function(){
	$('.lb2').hide();
})
$('.g1 li.fanhui').click(function(){
	var body = document.getElementsByTagName('body')[0];
	body.scrollTop = 0;
})
// 头部
    $('#toubu li').mouseover(function(){
        $(this).find('#dre').addClass('show');
    })
    $('#toubu li').mouseout(function(){
        $(this).find('#dre').removeClass('show');
    })
    
///*<!--会员福利开始-->*/
$('#fuli a').mouseenter(function(){
	$(this).find('img').stop().animate({
		'bottom':'22px'
	})
})
$('#fuli a').mouseleave(function(){
	$(this).find('img').stop().animate({
		'bottom':'15px'
	})
})


//	<!--金钻会员开始-->
$('.bodys .diyi').mouseenter(function(){
	$(this).find('.gw').show().stop().animate({
		'bottom':'116px'
	},300)
})
$('.bodys .diyi').mouseleave(function(){
	$(this).find('.gw').stop().animate({
		'bottom':'62px'
	},300)
})


//<!--集勋章享优惠 >开始-->
$('#xz .diyi').mouseenter(function(){
	$(this).find('.cy1').css('color','red')
})
$('#xz .diyi').mouseleave(function(){
	$('#xz .cy1').css('color','#333')
})


//	<!--跨界特权汇 >开始-->
$('#kj .mt a.mt_1').mouseenter(function(){
	$(this).stop().animate({
		'background-size': '112%',
	},500)
})
$('#kj .mt a.mt_2').mouseenter(function(){
	$(this).stop().animate({
		'background-size': '112%',
	},500)
})
$('#kj .mt a.mt_3').mouseenter(function(){
	$(this).stop().animate({
		'background-size': '112%',
	},500)
})
$('#kj .mt a.mt_4').mouseenter(function(){
	$(this).stop().animate({
		'background-size': '112%',
	},500)
})
$('#kj .mt a.mt_5').mouseenter(function(){
	$(this).stop().animate({
		'background-size': '112%',
	},500)
})
$('#kj .mt a.mt_6').mouseenter(function(){
	$(this).stop().animate({
		'background-size': '112%',
	},500)
})
$('#kj .mt a.mt_1').mouseleave(function(){
	$(this).stop().animate({
		'background-size': '100%',
	},500)
})
$('#kj .mt a.mt_2').mouseleave(function(){
	$(this).stop().animate({
		'background-size': '100%',
	},500)
})
$('#kj .mt a.mt_3').mouseleave(function(){
	$(this).stop().animate({
		'background-size': '100%',
	},500)
})
$('#kj .mt a.mt_4').mouseleave(function(){
	$(this).stop().animate({
		'background-size': '100%',
	},500)
})
$('#kj .mt a.mt_5').mouseleave(function(){
	$(this).stop().animate({
		'background-size': '100%',
	},500)
})
$('#kj .mt a.mt_6').mouseleave(function(){
	$(this).stop().animate({
		'background-size': '100%',
	},500)
})