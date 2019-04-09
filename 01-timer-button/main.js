$(function(){
  //console.log('hello world!');
  var n=6;
  var $btnAgree=$('input[type="button"]');

  var timer=window.setInterval(function(){
    n--;
    if(n===0){
      window.clearInterval(timer);
      $btnAgree.removeAttr('disabled');
      $btnAgree.val('同意');
    }else{
      //$btnAgree.attr('disabled',true);
      $btnAgree.val('同意('+n+'s)');
    }
  },1000);
  $btnAgree.click(function(){
    alert('SPA! 01-timer-button task');
  });
});
