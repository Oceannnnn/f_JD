// <!-- 右边固定窗口开始 -->
function chuangkou() {
  var a = document.getElementById('GD');
  var b = a.getElementsByClassName('G1')[0];
  var c = a.getElementsByClassName('G2')[0];
  var dd = b.getElementsByTagName('a');
  var f = c.getElementsByTagName('li');
  var g = c.getElementsByTagName('a');
    for (var i = 0; i < dd.length; i++) {
      dd[i].xuhao = i;
      dd[i].onmouseover = function () {
        for (var j = 0; j < f.length; j++) {
          f[j].style.background = 'rgba(0,0,0,0)';
          g[j].style.display = 'none';
        }
        f[this.xuhao].style.background = 'rgba(194,30,42,1)';
        g[this.xuhao].style.display = 'block';
      }
      dd[i].onmouseout = function () {
        f[this.xuhao].style.background = 'rgba(0,0,0,0)';
        g[this.xuhao].style.display = 'none';
      }
    }
  var dingbu = b.getElementsByTagName('a')[6];
  var body = document.getElementsByTagName('body')[0];
  var gao = document.documentElement.clientHeight;
  a.style.height = gao+'px';
  dingbu.onclick = function () {
        body.scrollTop = 0;
    }
  $('#Left li.ziti_1 a.top').click(function(){
  	body.scrollTop = 0;
  }) 
}
chuangkou();




//倒计
function daoji(){
	var fen_1 = document.getElementById('FEN');
	var miao_1 = document.getElementById('MIAO');
		var s = 31*60*1000+25*1000;
        s = s%(60*60*1000);
        var fen = parseInt(s/(60*1000));
        s = s%(60*1000);
        var miao = parseInt(s/1000);
        var kk = setInterval(function () {
              miao--;
              if (miao<0||miao==0) {
                miao = 59;
                fen--;
              }
              if(fen==0){
              	clearInterval(kk);
              }
              fen_1.innerHTML = fen;
              miao_1.innerHTML = miao;
            },1000)
        }
daoji();


// 头部
    $('#toubu li').mouseover(function(){
        $(this).find('#dre').addClass('show');
    })
    $('#toubu li').mouseout(function(){
        $(this).find('#dre').removeClass('show');
    })
// 全部分类
    $('#s_S .f_l').mouseover(function() {
      $('#s_S .j_d .q_b .f_L').addClass('f_show');
    })
    $('#s_S .q_b').mouseout(function() {
      $('#s_S .j_d .q_b .f_L').removeClass('f_show');
    })
// 购物车
    $('#s_S .G_c').mouseover(function() {
      $('#s_S .G_c .m_y').addClass('m_show');
    })
    $('#s_S .G_c').mouseout(function() {
      $('#s_S .G_c .m_y').removeClass('m_show');
    })
//更多分类
$('#miao .zhong .right li a.geng').mouseenter(function(){
	$('#miao .zhong .right .yin').stop().animate({
		'top':'47px',
		'opacity':'1'
	},200)
})
$('#miao .zhong .right li a.geng').mouseleave(function(){
	$('#miao .zhong .right .yin').stop().animate({
		'top':'156px',
		'opacity':'0'
	},200)
})


//秒杀开始
function miao(){
	var a =  document.getElementsByTagName('body')[0];
a.onscroll = function () {
      var nn = a.scrollTop;
//    document.title = nn;
      if (nn>131) {
      	$('#miao .miao_e').addClass('fixed');
      } else{
      	$('#miao .miao_e').removeClass('fixed');
      }
      if (nn>169) {
      	$('#miao .miao_1 .now_1 li a .qian_2').removeClass('qian_1');
      	$('#miao .miao_1 .now_1 li a .hou_2').removeClass('hou hou_1');
      	$('#miao .miao_1 .now_1 li a .zuihou').removeClass('qian');
      	$('#miao .miao_1 .now_1').addClass('fixed');
      	$('#miao .miao_1 .now_1 li a .jinxing').addClass('show');
      	$('#miao .miao_1 .now_1 li.on').addClass('on_1');
      } else{
      	$('#miao .miao_1 .now_1 li a .qian_2').addClass('qian_1');
      	$('#miao .miao_1 .now_1 li a .hou_2').addClass('hou hou_1');
      	$('#miao .miao_1 .now_1 li a .zuihou').addClass('qian');
      	$('#miao .miao_1 .now_1').removeClass('fixed');
      	$('#miao .miao_1 .now_1 li a .jinxing').removeClass('show');
      	$('#miao .miao_1 .now_1 li.on').removeClass('on_1');
      }
     }
}
miao();