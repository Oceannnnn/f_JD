  // function guding() {
  //   var a = document.documentElement.clientWidth;
  //   var b = document.getElementsByTagName('body')[0];
  //   b.style.width = a + 'px';
  // }
  // guding();

  //打叉按钮
 		$('.dacha').click(function(){
 			$('#topBanner').fadeOut(500);
 		})





//搜索按钮
$('#Search').click(function () {
	location.assign('yijia.html')
  var search = $('.search .form input').val();
  if (search =='衣架') {
    location.assign('yijia.html')
  }
})
$('.search .form input').click(function () {
  $('.search .yixia').addClass('show');
})
$('.search .form input').mouseout(function () {
  $('.search .yixia').removeClass('show');
})
$('.search .yixia li.last').click(function () {
  $('.search .yixia').hide();
})



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


  // <!-- 搜索下拉开始 -->
  function shuzi() {
    var a =  document.getElementsByTagName('body')[0];
    // var b = document.getElementById('gundong');
    var Soula = document.getElementById('Soula');
    var Xding = document.getElementById('Xding');
    var lis = Xding.getElementsByTagName('li');
    lis[0].onclick = function () {
      a.scrollTop=1859;
    }
    lis[1].onclick = function () {
      a.scrollTop=2455;
    }
    lis[2].onclick = function () {
      a.scrollTop=3065;
    }
    lis[3].onclick = function () {
      a.scrollTop=3618;
    }
    lis[4].onclick = function () {
      a.scrollTop=4176;
    }
    lis[5].onclick = function () {
      a.scrollTop=4845;
    }
    lis[6].onclick = function () {
      a.scrollTop=5400;
    }
    lis[7].onclick = function () {
      a.scrollTop=5953;
    }
    lis[8].onclick = function () {
      a.scrollTop=6509;
    }
    lis[9].onclick = function () {
      a.scrollTop=7409;
    }
    lis[10].onclick = function () {
      var timer = setInterval(function () {
          var c = a.scrollTop;
          var g = c - 50;
          a.scrollTop = g;
          if (a.scrollTop==0) {
            clearInterval(timer);
          }
        },3)
      }
    for (var i = 0; i < lis.length; i++) {
      lis[i].xuhao = i;
      lis[i].onmouseover = function () {
        for (var j = 0; j < lis.length; j++) {
          lis[j].style.background = 'rgba(145,136,136,1)';
        }
      lis[this.xuhao].style.background = 'rgba(215,11,28,1)';
      lis[10].style.background = 'rgba(94,74,74,1)';
      }
      lis[i].onmouseout = function () {
      lis[this.xuhao].style.background = 'rgba(145,136,136,1)';
      lis[10].style.background = 'rgba(94,74,74,1)';
      }
    }
    a.onscroll = function () {
      var nn = a.scrollTop;
      // b.innerHTML = nn;
      if (nn>688) {
        Soula.style.display = 'block';
      }else {
        Soula.style.display = 'none';
      }
      if (nn>1650) {
        Xding.style.display = 'block';
      }else {
        Xding.style.display = 'none';
      }
      if (1700<nn<2264) {
        for (var i = 0; i < lis.length; i++) {
          for (var j = 0; j < lis.length; j++) {
            lis[j].style.background = 'rgba(145,136,136,1)';
          }
          lis[0].style.background = 'rgba(215,11,28,1)';
        }
      }
      if (nn>2264) {
        for (var i = 0; i < lis.length; i++) {
          for (var j = 0; j < lis.length; j++) {
            lis[j].style.background = 'rgba(145,136,136,1)';
          }
          lis[1].style.background = 'rgba(215,11,28,1)';
        }
      }
      if (nn>2950) {
        for (var i = 0; i < lis.length; i++) {
          for (var j = 0; j < lis.length; j++) {
            lis[j].style.background = 'rgba(145,136,136,1)';
          }
          lis[2].style.background = 'rgba(215,11,28,1)';
        }
      }
      if (nn>3400) {
        for (var i = 0; i < lis.length; i++) {
          for (var j = 0; j < lis.length; j++) {
            lis[j].style.background = 'rgba(145,136,136,1)';
          }
          lis[3].style.background = 'rgba(215,11,28,1)';
        }
      }
      if (nn>4000) {
        for (var i = 0; i < lis.length; i++) {
          for (var j = 0; j < lis.length; j++) {
            lis[j].style.background = 'rgba(145,136,136,1)';
          }
          lis[4].style.background = 'rgba(215,11,28,1)';
        }
      }
      if (nn>4600) {
        for (var i = 0; i < lis.length; i++) {
          for (var j = 0; j < lis.length; j++) {
            lis[j].style.background = 'rgba(145,136,136,1)';
          }
          lis[5].style.background = 'rgba(215,11,28,1)';
        }
      }
      if (nn>5150) {
        for (var i = 0; i < lis.length; i++) {
          for (var j = 0; j < lis.length; j++) {
            lis[j].style.background = 'rgba(145,136,136,1)';
          }
          lis[6].style.background = 'rgba(215,11,28,1)';
        }
      }
      if (nn>5750) {
        for (var i = 0; i < lis.length; i++) {
          for (var j = 0; j < lis.length; j++) {
            lis[j].style.background = 'rgba(145,136,136,1)';
          }
          lis[7].style.background = 'rgba(215,11,28,1)';
        }
      }
      if (nn>6350) {
        for (var i = 0; i < lis.length; i++) {
          for (var j = 0; j < lis.length; j++) {
            lis[j].style.background = 'rgba(145,136,136,1)';
          }
          lis[8].style.background = 'rgba(215,11,28,1)';
        }
      }if (nn>7250) {
        for (var i = 0; i < lis.length; i++) {
          for (var j = 0; j < lis.length; j++) {
            lis[j].style.background = 'rgba(145,136,136,1)';
          }
          lis[9].style.background = 'rgba(215,11,28,1)';
        }
      }
      lis[10].style.background = 'rgba(94,74,74,1)';
    }
  }
  shuzi();


// 弹框

  $('#zhongbu .left0 .youbian li').mouseover(function(){
     var  i = $(this).index();
      $(this).addClass('on').siblings('#zhongbu .left0 .youbian li').removeClass('on');
      $('#zhongbu .left0 .kuangbox li').eq(i).addClass('show').siblings('li').removeClass('show');
  })
   $('#zhongbu .left0').mouseout(function(){
     $('#zhongbu .left0 .youbian li').removeClass('on');
     $('#zhongbu .left0 .kuangbox li').removeClass('show');
   })



   // 购物车
       $('#header .w .search .G_c').mouseover(function() {
         $('#header .w .search .G_c .m_y').show();
       })
       $('#header .w .search .G_c').mouseout(function() {
         $('#header .w .search .G_c .m_y').hide();
       })



    //轮播图
      var c = 0;
      function run () {
        c++;
        c=(c==8)?0:c
        $('#box img').eq(c).fadeIn(1000).siblings('img').fadeOut(1000);
        $('#box .lists li').eq(c).addClass('on').siblings('li').removeClass('on');
      }
      var timer = setInterval(function(){
          run();
      },3000)
      var tt;
      $('#box .lists li').mouseenter(function(){
        var shi = $(this);
        clearInterval(timer);
        tt = setTimeout(function(){
          c = shi.index();
          $('#box img').eq(c).fadeIn(1000).siblings('img').fadeOut(1000);
          $('#box .lists li').eq(c).addClass('on').siblings('li').removeClass('on');
        },100)
      })
      $('#box').mouseover(function(){
          clearInterval(timer);
          $('#box .w').show();
      })
      $('#box').mouseout(function(){
          timer = setInterval(run,3000);
          $('#box .w').hide();
      })
      $('.l_arrow').mouseover(function(){
          $(this).css('backgroundColor','rgba(0,0,0,0.5)');
      })
      $('.l_arrow').mouseout(function(){
          $(this).css('backgroundColor','rgba(0,0,0,0.1)');
      })
      $('.r_arrow').mouseover(function(){
          $(this).css('backgroundColor','rgba(0,0,0,0.5)');
      })
      $('.r_arrow').mouseout(function(){
          $(this).css('backgroundColor','rgba(0,0,0,0.1)');
      })
        $('.l_arrow').click(function(){
              c--;
              if(c==0){
                c = 8;
              }
              $('#box li').eq(c).addClass('on').siblings('li').removeClass('on');
              $('#box img').eq(c).fadeIn(1000).siblings('img').fadeOut(1000);
        })
      $('.r_arrow').click(function(){
          run();
      })
      $('#box .lists li').mouseleave(function(){
        clearTimeout(tt);
      })




// 倒计时
var shi_1 = document.getElementById('hour_show');
var fen_1 = document.getElementById('minute_show');
var miao_1 = document.getElementById('second_show');
var s = 2*60*60*1000;
        var shi = parseInt(s/(60*60*1000));
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
              if (fen<0||fen==0) {
                fen = 59;
                shi--;
              }
              if (shi==0) {
                clearInterval(kk);
              }
              shi_1.innerHTML = shi;
              fen_1.innerHTML = fen;
              miao_1.innerHTML = miao;
            },1000)


$('#huadong .huad .huad1 div').mouseover(function(){
    $(this).find('img').stop();
     $(this).find('img').animate({
        'marginLeft':'23px'
     }, 500 );

})
$('#huadong .huad .huad1 div').mouseout(function(){
  $(this).find('img').stop();
  $(this).find('img').animate({
     'marginLeft':'18px'
   }, 500 );
})




// 右边部分

    $('#zhongbu .right .box .lists li').mouseover(function(){
        var  i = $(this).index();
        $(this).addClass('on').siblings('#zhongbu .right .box .lists li').removeClass('on');
        $('#zhongbu .right .box p').eq(i).addClass('show').siblings('#zhongbu .right .box p').removeClass('show');
    })


// 游戏机票话费下滑
$('.buxiayi .huafei').mouseenter(function () {
  $(this).siblings('.juan2').css({'border-top':'2px solid red'});
  $(this).parents('ul').siblings('.Shua').find('.tu1').addClass('show');
})
$('.buxiayi .jipiao').mouseenter(function () {
  $(this).siblings('.juan2').css({'border-top':'2px solid red'});
  $(this).parents('ul').siblings('.Shua').find('.tu12').addClass('show');
})
$('.buxiayi .dianying').mouseenter(function () {
  $(this).siblings('.juan2').css({'border-top':'2px solid red'});
  $(this).parents('ul').siblings('.Shua').find('.tu13').addClass('show');
})
$('.buxiayi .youxi').mouseenter(function () {
  $(this).siblings('.juan2').css({'border-top':'2px solid red'});
  $(this).parents('ul').siblings('.Shua').find('.tu14').addClass('show');
})

$('.buxiayi .chu').mouseenter(function () {
	  	$('.buxiayi .ljuan1').animate({'top':'-25px'},70);
       $('.Shua').animate({'top':'19px'},70);
})
$('.Shua p').mouseenter(function () {
  $('.Shua p a').css({'color':'red'})
})
$('.Shua p').mouseleave(function () {
  $('.Shua p a').css({'color':'#666'})
})
$('.xiaokuang .touk li').mouseenter(function () {
  var hua = $(this).index();
  // alert(hua)
  $('.Shua div.chutu').eq(hua).addClass('show').siblings('div.chutu').removeClass('show');
  $('.xiaokuang .touk li').eq(hua).addClass('kkk').siblings('li').removeClass('kkk');
  $('.juan2').css({'border-top':''});
})
$('.Shua p').click(function () {
  $('.buxiayi .ljuan1').animate({'top':'19px'},100);
  $('.Shua').animate({'top':'208px'},100);
  $('.xiaokuang .touk li').removeClass('kkk');
  $('.juan2').css({'border-top':''});
})






//机票
$('.dan input.fancheng').click(function () {
  $('.chufa .chu1 .fanchen').show()
})
$('.dan input.fancheng1').click(function () {
  $('.chufa .chu1 .fanchen').hide()
})
$('.Shua .tu2 .jp li').mouseenter(function () {
  var i = $(this).index();
  $('.Shua .tu2 .jp li').eq(i).addClass('on').siblings('li').removeClass('on');
  var lefth = -192*i + 'px';
	$('.Shua .tu2 .J_P .jp1 ul').stop().animate({
		'marginLeft':lefth
	},1000)
})



// 北京
$('#shortCut .w .address li').mouseover(function(){
    $(this).find('#dre').addClass('show');
})
// $('#shortCut .w .fr li span.wode').mouseover(function(){
//     $('#shortCut .w .fr li .dropdown').show();
// })
$('#shortCut .w .address li').mouseout(function(){
    $(this).find('#dre').removeClass('show');
})

// 我的京东

$('#shortCut .w .fr li').mouseover(function(){
    $(this).find('#dre').addClass('show');
})
$('#shortCut .w .fr li').mouseout(function(){
    $(this).find('#dre').removeClass('show');
})





// 排行

    $('#Faxian .paihang1 li').mouseover(function(){
      var  i = $(this).index();
        $(this).addClass('on').siblings('#Faxian .paihang1 li').removeClass('on');
        $('#Faxian .remai li').eq(i).addClass('show').siblings('#Faxian .remai li').removeClass('show');
    })


// 发现好货
$('#Faxian .haohuo .haohuo1').mouseover(function(){
    //  $(this).find('img').css('left','5px');
    $(this).find('img').stop();
     $(this).find('img').animate({
        'marginLeft':'-10px'
     }, 500 );
    //  $(this).find('img').css('marginLeft','5px')

})
// 鼠标移除
$('#Faxian .haohuo .haohuo1').mouseout(function(){
  // $(this).find('img').css('left','0px');
  $(this).find('img').stop();
  $(this).find('img').animate({
     'marginLeft':'0px'
   }, 500 );
  //  $(this).find('img').css('marginLeft','0px')
})



// 品牌头条
$('#Faxian .toutiao1 .pinpai').mouseover(function(){
    //  $(this).find('img').css('left','5px');
    $(this).find('img').stop();
     $(this).find('img').animate({
        'marginLeft':'30px'
     }, 500 );
    //  $(this).find('img').css('marginLeft','5px')

})
// 鼠标移除
$('#Faxian .toutiao1 .pinpai').mouseout(function(){
  // $(this).find('img').css('left','0px');
  $(this).find('img').stop();
  $(this).find('img').animate({
     'marginLeft':'21px'
   }, 500 );
})


// 领券中心
$('#lingquan .lingquan2 li').mouseover(function(){
    //  $(this).find('img').css('left','5px');
    $(this).find('img').stop();
     $(this).find('img').animate({
        'marginLeft':'58px'
     }, 500 );

})
// 鼠标移除
$('#lingquan .lingquan2 li').mouseout(function(){
  // $(this).find('img').css('left','0px');
  $(this).find('img').stop();
  $(this).find('img').animate({
     'marginLeft':'51px'
   }, 500 );
})

// 享品质
$('#pinzhi .pinzhi2 li').mouseover(function(){
    $(this).find('img').stop();
     $(this).find('img').animate({
        'left':'-10px'
     }, 500 );
})
$('#pinzhi .pinzhi2 li').mouseout(function(){
  $(this).find('img').stop();
  $(this).find('img').animate({
     'left':'0px'
   }, 500 );
})



// 爱生活
// 1
$('#shenghuo .shenghuo2 .aiguang .tou21 a').mouseover(function(){
    $(this).find('.fuzhuang').stop();
     $(this).find('.fuzhuang').animate({
        'marginLeft':'-14px'
     }, 500 );
})
$('#shenghuo .shenghuo2 .aiguang .tou21 a').mouseout(function(){
  $(this).find('.fuzhuang').stop();
  $(this).find('.fuzhuang').animate({
     'marginLeft':'-1px'
   }, 500 );
})
  // 2
  $('#shenghuo .shenghuo2 .aiguang .tou2 .xingnan').mouseover(function(){
      $(this).find('img').stop();
       $(this).find('img').animate({
          'marginLeft':'65px'
       }, 500 );
  })
  $('#shenghuo .shenghuo2 .aiguang .tou2 .xingnan').mouseout(function(){
    $(this).find('img').stop();
    $(this).find('img').animate({
       'marginLeft':'73px'
     }, 500 );
  })
  // 3
  $('#shenghuo .shenghuo2 .aiguang .tou22 a').mouseover(function(){
      $(this).find('img').stop();
       $(this).find('img').animate({
          'marginLeft':'-8px'
       }, 500 );
  })
  $('#shenghuo .shenghuo2 .aiguang .tou22 a').mouseout(function(){
    $(this).find('img').stop();
    $(this).find('img').animate({
       'marginLeft':'0px'
     }, 500 );
  })

  // 爱生活2222
  // 1
  $('#shenghuo .shenghuo2 .aiguang1 .tou21 a').mouseover(function(){
      $(this).find('.fuzhuang').stop();
       $(this).find('.fuzhuang').animate({
          'marginLeft':'2px'
       }, 500 );
  })
  $('#shenghuo .shenghuo2 .aiguang1 .tou21 a').mouseout(function(){
    $(this).find('.fuzhuang').stop();
    $(this).find('.fuzhuang').animate({
       'marginLeft':'14px'
     }, 500 );
  })
    // 2
    $('#shenghuo .shenghuo2 .aiguang1 .tou2 .xingnan a').mouseover(function(){
        $(this).find('img').stop();
         $(this).find('img').animate({
            'marginLeft':'65px'
         }, 500 );
    })
    $('#shenghuo .shenghuo2 .aiguang1 .tou2 .xingnan a').mouseout(function(){
      $(this).find('img').stop();
      $(this).find('img').animate({
         'marginLeft':'73px'
       }, 500 );
    })
    // 33
$('#shenghuo .shenghuo2 .aiguang1 .tou31 a').mouseover(function(){
      $(this).find('img').stop();
       $(this).find('img').animate({
          'marginLeft':'-8px'
       }, 500 );
})
$('#shenghuo .shenghuo2 .aiguang1 .tou31 a').mouseout(function(){
    $(this).find('img').stop();
    $(this).find('img').animate({
       'marginLeft':'0px'
     }, 500 );
})
  
  
  
  
 $('#shenghuo .shenghuo2 .aiguang3 .tou21 a').mouseover(function(){
    $(this).find('.fuzhuang').stop();
     $(this).find('.fuzhuang').animate({
        'marginLeft':'-14px'
     }, 500 );
})
$('#shenghuo .shenghuo2 .aiguang3 .tou21 a').mouseout(function(){
  $(this).find('.fuzhuang').stop();
  $(this).find('.fuzhuang').animate({
     'marginLeft':'-1px'
   }, 500 );
})
  // 2
  $('#shenghuo .shenghuo2 .aiguang3 .tou2 .xingnan').mouseover(function(){
      $(this).find('img').stop();
       $(this).find('img').animate({
          'marginLeft':'65px'
       }, 500 );
  })
  $('#shenghuo .shenghuo2 .aiguang3 .tou2 .xingnan').mouseout(function(){
    $(this).find('img').stop();
    $(this).find('img').animate({
       'marginLeft':'73px'
     }, 500 );
  })
  // 3
  $('#shenghuo .shenghuo2 .aiguang3 .tou22 a').mouseover(function(){
      $(this).find('img').stop();
       $(this).find('img').animate({
          'marginLeft':'-8px'
       }, 500 );
  })
  $('#shenghuo .shenghuo2 .aiguang3 .tou22 a').mouseout(function(){
    $(this).find('img').stop();
    $(this).find('img').animate({
       'marginLeft':'0px'
     }, 500 );
  })
 