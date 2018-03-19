//
$('#bodyBox .bg .loginForm .ddd1').click(function(){
  $('#bodyBox .bg .loginForm .login-tab a').addClass('kkk');
  $('#bodyBox .bg .loginForm .login-tab a.red').css({'color':"#666",'font-weight': '100'})
  $('#bodyBox .bg .loginForm .ewm').addClass('show');

})
$('#bodyBox .bg .loginForm .ddd2').click(function(){
 $('#bodyBox .bg .loginForm .login-tab a').removeClass('kkk');
 $('#bodyBox .bg .loginForm .login-tab a.red').css({'color':"#E4393C",'font-weight': '700'})
   $('#bodyBox .bg .loginForm .ewm').removeClass('show');
})
