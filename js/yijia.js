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



// 头部
    $('#toubu li').mouseover(function(){
        $(this).find('#dre').addClass('show');
    })
    $('#toubu li').mouseout(function(){
        $(this).find('#dre').removeClass('show');
    })



    //给每一个li添加鼠标移动上去的事件
    $('#shousuo .Quan .zhongbu .left0 .youbian li').mouseover(function(){
       var  i = $(this).index();//获取li的下标值
        $(this).addClass('on').siblings('li').removeClass('on');
        $('.kuangbox li').eq(i).addClass('show').siblings('li').removeClass('show');
        $(this).find('a').css('color','#B1191A').parents('li').siblings('li').find('a').css('color','#fff');
        $(this).find('span').css('color','#B1191A').parents('li').siblings('li').find('span').css('color','#fff');
    })
    $('#shousuo .Quan .zhongbu .left0 .youbian li').mouseout(function() {
       $(this).removeClass('on');
       $('#shousuo .Quan .zhongbu .kuangbox li').removeClass('show');
        $(this).find('a').css('color','#fff');
        $(this).find('span').css('color','#fff');
    })

// 全部商品分类
  $('#shousuo .sou .quanbu p').mouseover(function(){
        $(this).siblings('.zhongbu').addClass('show');
    })
    $('#shousuo .sou .quanbu p').mouseout(function(){
        $(this).siblings('.zhongbu').removeClass('show');
    })

    // 购物车
        $('#shousuo .sou .search .G_c').mouseover(function() {
          $('#shousuo .sou .search .G_c .m_y').addClass('m_show');
        })
        $('#shousuo .sou .search .G_c').mouseout(function() {
          $('#shousuo .sou .search .G_c .m_y').removeClass('m_show');
        })



    // shangpin  // 商品呈现
    $('.huan ul li').mouseover(function(){
       var  i = $(this).index();//获取li的下标值
        $(this).addClass('xian_R').siblings('li').removeClass('xian_R');
        $(this).parents('ul').parents('.huan').siblings('.jia_ge').find('p').eq(i).addClass('show').siblings('p').removeClass('show');
    })
    $('.huan ul li').mouseover(function(){
       var  i = $(this).index();//获取li的下标值
        $(this).parents('ul').parents('.huan').siblings('.d_K').find('img').eq(i).addClass('dk_show').siblings('img').removeClass('dk_show');
    })


    // 选择地址
      $('#zonghe .shangpin .peisong .text').mouseover(function(){
          $('#zonghe .shangpin .peisong .z_y').addClass('z_show');
      })
      $('#zonghe .shangpin .peisong .text').mouseout(function(){
          $('#zonghe .shangpin .peisong .z_y').removeClass('z_show');
      })



    // 京东自营
    $('.zi_y ul .xian').mouseover(function(){
       var  i = $(this).index();
        $(this).parents('ul').siblings('.tiao_c').find('li').eq(i).addClass('shon').siblings('li').removeClass('shon');
      })
      $('.zi_y .xian').mouseout(function(){
          $('.zi_y .cang').removeClass('shon');
      })

// 关注
$('#zonghe .shangpin .kaishi .da_K').mouseover(function(){
  $(this).find('.guan_zhu').addClass('show_n');
    $(this).find('.guan_zhu').stop();
     $(this).find('.guan_zhu').animate({
        'marginTop':'-42px'
     }, 50 );

})
// 鼠标移除
$('#zonghe .shangpin .kaishi .da_K').mouseout(function(){
  $(this).find('.guan_zhu').removeClass('show_n');
  $(this).find('.guan_zhu').stop();
  $(this).find('.guan_zhu').animate({
     'marginTop':'-16px'
   }, 50 );
})
