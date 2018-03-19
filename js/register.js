//邮箱验证
$('#sta .form1 a.youxiang1').click(function () {
  $('#sta .form1 .youxiang').show();
  $('#sta .form1 a.youxiang1').css({'display':'none'})
})
$('#sta .form1 a.shouji1').click(function () {
  $('#sta .form1 .youxiang').hide();
  $('#sta .form1 a.youxiang1').css({'display':'block'})
})



$('#sta .form1 .chu1 input').eq(1).click(function () {
  setTimeout(function () {
    $('#sta .form1 .chu1 img.hhh').eq(0).css({'display':'block'});
  },300)
  $('#sta .form1 .chu1 img.hhh').eq(1).css({'display':'none'});
})
$('#sta .form1 .chu1 input').eq(2).click(function () {
  setTimeout(function () {
    $('#sta .form1 .chu1 img.hhh').eq(1).css({'display':'block'});
  },300)
  $('#sta .form1 .chu1 img.hhh').eq(0).css({'display':'none'});
})


var b = $('#sta .form1 .chu1 input');
var c = $('#sta .form1 .chuxian');

for (var i = 0; i < b.length; i++) {
					b[i].xuhao = i;
					b[i].onclick = function () {
						d = this.xuhao;
						for (var i = 0; i < c.length; i++) {
							c[i].style.display = 'none';
						}
					c[d].style.display = 'block';
          $('#sta .form1 .chu1 img.hhh').css({'display':'none'});
					}
				}
