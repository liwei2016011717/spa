/* exported $timerBtn,TimerButton*/
//var $timerBtn=(function(){

function TimerButton(){
  var cfg={
    container:'.main',
    title:'确定',
    time:9,//时长
    enable:false,//禁用的
    clickHandler:function(){}
  };
  //var n=cfg.time;
  this.init=function(conf){
    $.extend(cfg,conf);
    var $container=$(cfg.container);
    var DOM='<input class="timer-button" type="button" value="'+ cfg.title +'('+ cfg.time+' s) " disabled>';
    $container.html(DOM);
    var $btnAgree=$container.find('.timer-button');
    var timer=window.setInterval(function(){
      cfg.time--;
      if(cfg.time===0){
        window.clearInterval(timer);
        $btnAgree.removeAttr('disabled'); 
        $btnAgree.val(cfg.title);
      }else{
        $btnAgree.val(cfg.title +'('+cfg.time+'s)');
      }
                                        
    },1000);
    $btnAgree.click(function(){
      //alert('SPA!10-timer-buttton task!');
      cfg.clickHandler();                        
    });
  };
  //var remove=function(){
    //var $btn=$('.main').find('.timer-button');
    //$btn.remove();
  //};
  return {init:this.init};

}
//}());
