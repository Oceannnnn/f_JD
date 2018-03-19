

// <!-- 下拉固定开始 -->
function shuzi() {
  var a =  document.getElementsByTagName('body')[0];
  // var b = document.getElementById('gundong');
  var c = document.getElementById('XLA');
  var d = document.getElementById('chan2');
  var lis = d.getElementsByTagName('p');
  var gg = d.getElementsByTagName('a');
  lis[0].onclick = function () {
    a.scrollTop=1845;
  }
  lis[1].onclick = function () {
    a.scrollTop=2255;
  }
  lis[2].onclick = function () {
    a.scrollTop=2840;
  }
  lis[3].onclick = function () {
    a.scrollTop=3775;
  }
  lis[4].onclick = function () {
    a.scrollTop=7030;
  }
  lis[5].onclick = function () {
    a.scrollTop=8878;
  }
  lis[6].onclick = function () {
    a.scrollTop=10630;
  }
  a.onscroll = function () {
    var nn = a.scrollTop;
    // b.innerHTML = nn;
    if (nn>923) {
      c.style.display = 'block';
    }else {
      c.style.display = 'none';
    }
    if (nn>15050) {
      c.style.display = 'none';
    }
    if (nn>1150) {
      d.style.display = 'block';
    }else {
      d.style.display = 'none';
    }
    if (nn>10946) {
      d.style.display = 'none';
    }
    if (1150<nn<2000) {
      for (var i = 0; i < lis.length; i++) {
        for (var j = 0; j < lis.length; j++) {
          lis[j].style.background = 'rgba(247,247,247,1)';
          gg[j].style.color = '#666';
        }
        lis[0].style.background = 'rgba(215,11,28,1)';
        gg[0].style.color = '#fff';
      }
    }
    if (nn>2000) {
      for (var i = 0; i < lis.length; i++) {
        for (var j = 0; j < lis.length; j++) {
          lis[j].style.background = 'rgba(247,247,247,1)';
          gg[j].style.color = '#666';
        }
        lis[1].style.background = 'rgba(215,11,28,1)';
        gg[1].style.color = '#fff';
      }
    }
    if (nn>2400) {
      for (var i = 0; i < lis.length; i++) {
        for (var j = 0; j < lis.length; j++) {
          lis[j].style.background = 'rgba(247,247,247,1)';
          gg[j].style.color = '#666';
        }
        lis[2].style.background = 'rgba(215,11,28,1)';
        gg[2].style.color = '#fff';
      }
    }
    if (nn>3350) {
      for (var i = 0; i < lis.length; i++) {
        for (var j = 0; j < lis.length; j++) {
          lis[j].style.background = 'rgba(247,247,247,1)';
          gg[j].style.color = '#666';
        }
        lis[3].style.background = 'rgba(215,11,28,1)';
        gg[3].style.color = '#fff';
      }
    }
    if (nn>6550) {
      for (var i = 0; i < lis.length; i++) {
        for (var j = 0; j < lis.length; j++) {
          lis[j].style.background = 'rgba(247,247,247,1)';
          gg[j].style.color = '#666';
        }
        lis[4].style.background = 'rgba(215,11,28,1)';
        gg[4].style.color = '#fff';
      }
    }
    if (nn>8450) {
      for (var i = 0; i < lis.length; i++) {
        for (var j = 0; j < lis.length; j++) {
          lis[j].style.background = 'rgba(247,247,247,1)';
          gg[j].style.color = '#666';
        }
        lis[5].style.background = 'rgba(215,11,28,1)';
        gg[5].style.color = '#fff';
      }
    }
    if (nn>10130) {
      for (var i = 0; i < lis.length; i++) {
        for (var j = 0; j < lis.length; j++) {
          lis[j].style.background = 'rgba(247,247,247,1)';
          gg[j].style.color = '#666';
        }
        lis[6].style.background = 'rgba(215,11,28,1)';
        gg[6].style.color = '#fff';
      }
    }
  }
}
shuzi();



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
}
chuangkou();


// 放大镜效果
function Fangda() {
  var a = document.getElementsByClassName('yi_t')[0];
  var b = document.getElementsByClassName('chu_D')[0];
  var tuc = b.getElementsByClassName('tup')[0];
  var sekuai = a.getElementsByClassName('sekuai1')[0];
  var gaizi = a.getElementsByClassName('gaizi')[0];
  var c = a.getElementsByClassName('dk')[0];
  var d = document.getElementsByClassName('tiao')[0];
  var lis = d.getElementsByTagName('li');
  var zuo = document.getElementsByClassName('jt_2')[0];
  var you = document.getElementsByClassName('jt_3')[0];
  gaizi.onmousemove = function (e) {
    var er = window.event||e;
    //鼠标距离事件源的位置
    var s_l = er.offsetX||er.layerX;
    var s_t = er.offsetY||er.layerY;
    //计算色块的位置
    var c_l = s_l-118;
    var c_t = s_t-118;
    if (c_t<0) {
      c_t=0;
    }
    if (c_t>114) {
      c_t=114;
    }
    if (c_l>114) {
      c_l=114;
    }
    if (c_l<0) {
      c_l=0;
    }
    sekuai.style.left = c_l+'px';
    sekuai.style.top = c_t+'px';

    //计算右边的图片位置
    var y_l = c_l*(-129/57);
    var y_t = c_t*(-129/57);

    //赋值给右边图片的位置
    tuc.style.left = y_l+'px';
    tuc.style.top = y_t+'px';
  }
  gaizi.onmouseover = function () {
    sekuai.style.display = 'block';
    b.style.display = 'block';
  }
  gaizi.onmouseout = function () {
    sekuai.style.display = 'none';
    b.style.display = 'none';
  }
  for (var i = 0; i < lis.length; i++) {
    lis[i].xuhao = i;
    lis[i].addEventListener('mouseover',function () {
      for (var j = 0; j < lis.length; j++) {
        lis[j].setAttribute('class','');
      }
      lis[this.xuhao].setAttribute('class','xian_R');
    })
  }
    lis[0].onmouseover = function () {
      a.setAttribute('style','background:url(./img/yi_jia/1.jpg) no-repeat');
      tuc.setAttribute('src','./img/yi_jia/Dt1.jpg');
    }
    lis[1].onmouseover = function () {
      a.setAttribute('style','background:url(./img/yi_jia/2.jpg) no-repeat');
      tuc.setAttribute('src','./img/yi_jia/Dt2.jpg');
    }
    lis[2].onmouseover = function () {
      a.setAttribute('style','background:url(./img/yi_jia/3.jpg) no-repeat');
      tuc.setAttribute('src','./img/yi_jia/Dt4.jpg');
    }
    lis[3].onmouseover = function () {
      a.setAttribute('style','background:url(./img/yi_jia/4.jpg) no-repeat');
      tuc.setAttribute('src','./img/yi_jia/Dt3.jpg');
    }
    lis[4].onmouseover = function () {
      a.setAttribute('style','background:url(./img/yi_jia/5.jpg) no-repeat');
      tuc.setAttribute('src','./img/yi_jia/Dt5.jpg');
    }
    lis[5].onmouseover = function () {
      a.setAttribute('style','background:url(./img/yi_jia/6.jpg) no-repeat');
      tuc.setAttribute('src','./img/yi_jia/Dt6.jpg');
    }
    zuo.onclick = function () {
      lis[0].style.display = 'block';
      lis[5].style.display = 'none';
    }
    you.onclick = function () {
      lis[0].style.display = 'none';
      lis[5].style.display = 'block';
    }
}
Fangda();



//看了又看
//function kanleyou() {
//var a = document.getElementsByClassName('z_3')[0];
//var b = a.getElementsByClassName('tu');
//var bian = a.getElementsByClassName('bianse');
//var sha_X = document.getElementsByClassName('sha_X')[0];
//var shang = sha_X.getElementsByTagName('a')[0];
//var xia = sha_X.getElementsByTagName('a')[1];
//var yin = document.getElementsByClassName('Xiala1')[0];
//var xian = document.getElementsByClassName('Xiala2')[0];
//var xian1 = document.getElementsByClassName('Xiala3')[0];
//for (var i = 0; i < b.length; i++) {
//  b[i].xuhao = i;
//  b[i].onmouseover = function () {
//    for (var i = 0; i < b.length; i++) {
//      bian[i].style.color = '#666';
//    }
//  bian[this.xuhao].style.color = 'red';
//  }
//  b[i].onmouseout = function () {
//    bian[this.xuhao].style.color = '#666';
//  }
//}
//xia.onclick = function () {
//  yin.style.display = 'none';
//  // xian1.style.display = 'none';
//  xian.style.display = 'block';
//}
//shang.onclick = function () {
//  yin.style.display = 'block';
//  xian.style.display = 'none';
//}
//}
//kanleyou();
var lun = 0;
$('.sha_X .s_2').click(function(){
	lun++;
	if (lun==4) {
		lun = 1;
		$('.KAN .xiakan').css({'top':'0px'})
	}
	var topz = -549*lun;
	$('.KAN .xiakan').animate({
		'top' : topz+'px'
	},500)
})
$('.sha_X .s_1').click(function(){
	lun--;
	if (lun<0) {
		lun = 2;
		$('.KAN .xiakan').css({'top':'-1647px'})
	}
	var topz = -549*lun;
	$('.KAN .xiakan').animate({
		'top' : topz+'px'
	},500)
})
$('#J_u .ju_1 .z_3 .tu').mouseenter(function(){
	$(this).find('p').css({'color':'red'}).siblings('p').css({'color':'#666'})
})
$('#J_u .ju_1 .z_3 .tu').mouseleave(function(){
	$(this).find('p').css({'color':'#666'})
})




//京东白条
function Baitiao() {
  var a = document.getElementsByClassName('BT')[0];
  var b = a.getElementsByClassName('youhui')[0];
  var c = b.getElementsByTagName('p');
  var d = document.getElementsByClassName('bai_tiao')[0];
  var cc = 1      // 默认1为显示，2为隐藏
  for (var i = 0; i < c.length; i++) {
    c[i].xuhao = i;
    c[i].onclick = function () {
      for (var j = 0; j < c.length; j++) {
        c[j].setAttribute('class','');
      }
      c[this.xuhao].setAttribute('class','red');
      if (cc==1) {
        c[this.xuhao].setAttribute('class','');
        d.style.display = 'none';
        cc = 2;
      }else {
        c[this.xuhao].setAttribute('class','red');
        cc = 1;
      }
    }
  }
}
Baitiao();
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

// 微店
    $('#J_u .q_t .z_y4').mouseover(function() {
      $('#J_u .q_t .w_d').addClass('w_show');
    })
    $('#J_u .q_t .z_y4').mouseout(function() {
      $('#J_u .q_t .w_d').removeClass('w_show');
    })




  // 选择地址
    $('#J_u .z_2 .p_s .d2 .b_j').mouseover(function(){
        $('#J_u .z_2 .p_s .z_y').addClass('z_show');
    })
    $('#J_u .z_2 .p_s .d2 .b_j').mouseout(function(){
        $('#J_u .z_2 .p_s .z_y').removeClass('z_show');
    })




// 支持
    $('#J_u .z_2 .p_s .z_C').mouseover(function(){
        $('#J_u .z_2 .p_s .z_C .t_c').addClass('t_show');
    })
    $('#J_u .z_2 .p_s .z_C').mouseout(function(){
        $('#J_u .z_2 .p_s .z_C .t_c').removeClass('t_show');
    })


// 选择颜色
    $('#J_u .z_2 .YS p.diy2').mouseover(function(){
        $(this).addClass('diy3').siblings(this).removeClass('diy3');
    })
    $('#J_u .z_2 .YS p.diy2').mouseout(function(){
      $('p.diy2').removeClass('diy3');
    })



    // 套装
        $('#J_u .z_2 .TZ .you1').mouseover(function(){
            $(this).addClass('y_red').siblings(this).removeClass('y_red');
        })
        $('#J_u .z_2 .TZ .you1').mouseout(function(){
          $(this).removeClass('y_red');
        })



        // 图
            $('#J_u .z_2 .ZZ .tu').mouseover(function(){
                $('#J_u .z_2 .ZZ .tu1').addClass('t_show');
            })
            $('#J_u .z_2 .ZZ .tu').mouseout(function(){
                $('#J_u .z_2 .ZZ .tu1').removeClass('t_show');
            })


            // 京东换新
                $('#J_u .z_2 .ZZ .youhui p').mouseover(function(){
                    $('#J_u .z_2 .ZZ .jD').addClass('J_show');
                })
                $('#J_u .z_2 .ZZ .youhui p').mouseout(function(){
                    $('#J_u .z_2 .ZZ .jD').removeClass('J_show');
                })

                $('#J_u .z_2 .ZZ .jD .jing').mouseover(function(){
                    $('#J_u .z_2 .ZZ .jD .jing1').addClass('j_show');
                })


// 京东白条
  $('#J_u .z_2 .BT .youhui p').mouseover(function(){
    var  i = $(this).index();
      $(this).parents('.youhui').siblings('.bai_T').find('li').eq(i).addClass('l_show').siblings('li').removeClass('l_show');
  })
  $('#J_u .z_2 .BT .youhui p').mouseout(function(){
    $('#J_u .z_2 .BT .bai_T li').removeClass('l_show');
  })




// 优惠和问题
      $('#J_u .z_2 .BT .hui').mouseover(function(){
          $('#J_u .z_2 .BT .hui1').addClass('h_show');
      })
      $('#J_u .z_2 .BT .hui').mouseout(function(){
          $('#J_u .z_2 .BT .hui1').removeClass('h_show');
      })

      $('#J_u .z_2 .BT .tu').mouseover(function(){
          $('#J_u .z_2 .BT .tu1').addClass('t_show');
      })
      $('#J_u .z_2 .BT .tu').mouseout(function(){
          $('#J_u .z_2 .BT .tu1').removeClass('t_show');
      })




// 达人选购

    $('#ZQ .J_D .da_r li a img').mouseover(function(){
      var  i = $(this).index();
        $(this).parents('a').siblings('a').find('.yinc').eq(i).addClass('y_show').siblings('p').removeClass('y_show');
    })
    $('#ZQ .J_D .da_r li a img').mouseout(function(){
      $('#ZQ .J_D .da_r li p.yinc').removeClass('y_show');
    })

    // 加入购物车
        $('.s_j p.jr').mouseover(function(){
            $('.s_j .jia1').addClass('j_show');
        })
        $('.s_j p.jr').mouseout(function(){
            $('.s_j .jia1').removeClass('j_show');
        })


// 时间排序
    $('#ZQ .J_S .S_H1 p').mouseover(function(){
        $('#ZQ .J_S .S_H1 .s_j').addClass('s_show');
    })
    $('#ZQ .J_S .S_H1 p').mouseout(function(){
        $('#ZQ .J_S .S_H1 .s_j').removeClass('s_show');
    })
// 最后
$('#C_N .s_p li a img').mouseover(function(){
  var  i = $(this).index();
    $(this).parents('a').siblings('.wz').eq(i).addClass('w_show').siblings('.wz').removeClass('w_show');
})
$('#C_N .s_p li a img').mouseout(function(){
  $('#C_N .s_p .wz').removeClass('w_show');
})
