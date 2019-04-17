/*global hljs:true*/
$(function(){
  //var $code=$('div>pre');

  //hljs.highlightBlock($code[0]);
  
  var $btnAddCode=$('input[type="button"]');

  $btnAddCode.click(function(){
    var $code=$('<div><pre class="javascript"><button class="btn">删除</button></pre></div>');
    $code.find('pre').html($('.code').val());
    $('div.main').append($code);
    hljs.highlightBlock($code.find('pre').get(0));
  });
});
