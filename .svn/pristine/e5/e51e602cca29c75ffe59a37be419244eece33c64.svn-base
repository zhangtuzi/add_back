var rabbitBanner={
  //banner图构造
  //bannerGz参数说明：bannerUl的class
  bannerGz:function(bannerUl){
    var bannerUlLg=$('.'+bannerUl+'>li').length;
    var bannerLiW=$('.'+bannerUl+'>li').width();
    $('.'+bannerUl+'').append($('.'+bannerUl+'').html());
    $('.'+bannerUl+'').width(bannerLiW*bannerUlLg*2);
    $('.'+bannerIndexUl+'').html('');//清空下方圆点后重新填充圆点
    for(var i=0;i<bannerUlLg;i++){
      $('.'+bannerIndexUl+'').append('<li></li>');
    }
    $('.'+bannerIndexUl+'>li').eq(0).addClass(''+bgClass+'');
  },
  // banner运行
  //moveFun参数说明：banner当前运行的index下标，bannerUl的class，banner下方圆点的ul的class，banner圆点激活状态的背景色class，bannerLi宽度
  moveFun:function(bannerI1,bannerUl,bannerIndexUl,bgClass,LiWidth){
    bannerI1++;
    $('.'+bannerUl+'').animate({
      'left':-bannerI1*LiWidth
    },1000);
    if(bannerI1<$('.'+bannerUl+'>li').length/2){
      bannerI1=bannerI1;
    }else{
      bannerI1=0;
      $('.'+bannerUl+'').animate({
        'left':-bannerI1*LiWidth
      },0);
    }
    $('.'+bannerIndexUl+'>li').removeClass(''+bgClass+'').eq(bannerI1).addClass(''+bgClass+'');
    return bannerI1;
  }
}
