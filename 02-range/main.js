$(function(){
  //console.log('hello world!');
  var $range=$('input[type="range"]');

  var $txtAge=$('#age');
  $range.change(function(){
    $txtAge.html($range.val());
  });
});
