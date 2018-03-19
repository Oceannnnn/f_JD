// 头部
    $('#toubu li').mouseover(function(){
        $(this).find('#dre').addClass('show');
    })
    $('#toubu li').mouseout(function(){
        $(this).find('#dre').removeClass('show');
    })
// 购物车
    $('#shousuo .sou .search .G_c').mouseover(function() {
    	$(this).css('background-color','#fff')
      $(this).find('.m_y').show();
    })
	$('#shousuo .sou .search .G_c').mouseout(function() {
    	$(this).css('background-color','#F9F9F9')
      $(this).find('.m_y').hide();
    })
//优惠券
$('#shousuo .dropdown_1').mouseover(function(){
	$(this).find('.muse').show();
	
})
$('#shousuo .dropdown_1').mouseout(function(){
	$(this).find('.muse').hide();
})
$('#shousuo .dropdown_1 li').click(function(){
		$(this).addClass('red').siblings('li').removeClass('red');
		var a = $(this).html()
		$('#shousuo .dropdown_1 p').html(a)
		
	})
//每日推荐
$('#chosen .tu img').mouseenter(function(){
	$(this).stop().animate({
		'width':'58%'
	},200)
})
$('#chosen .tu img').mouseleave(function(){
	$(this).stop().animate({
		'width':'60%'
	},200)
})
//	券集市
$('#quan .mei').mouseenter(function(){
	$(this).addClass('show').siblings('.mei').removeClass('show')
})
$('#quan .mei').mouseleave(function(){
	$(this).removeClass('show')
})
//右边固定
var body = document.getElementsByTagName('body')[0];
body.onscroll = function(){
	if(body.scrollTop > 300){
		$('#quan_m').addClass('show')
	}else{
		$('#quan_m').removeClass('show')
	}
	
}
$('#quan_m a.fan').click(function(){
	body.scrollTop=0
})