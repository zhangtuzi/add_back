//隐藏排序弹层
$('.bannerSortSave').click(function(){
  $('.adSortBtn').removeClass('dn');
  $('.bannerSortTc').addClass('dn');
})
//广告排序弹层出现
$('.adSortBtn').click(function(){
  $(this).addClass('dn');
  bannerSortWrite();
  $('.bannerSortTc').removeClass('dn');
})

// 未锁定的添加可以拖拽效果
$('.bannerSortTable .unLocked').draggable({
  containment: 'parent',
    helper: "clone",
    cursor: "move"
});
// $('.bannerSortTableSave').html($('.bannerSortTable').html());
// $('.bannerSortTable .unLocked').draggable( "destroy" );//移除可拖拽效果
var moveStartI=null;
$('.bannerSortTable td').droppable({
  // greedy: true,//禁止父级接收拖拽目标
  over:function(event, ui){
     moveStartI = $(ui.draggable).index();//获取拖动模块的下标
  },
  drop:function(event, ui){
    var moveEndI=$(this).index();
    if(!$(this).hasClass('locked')){
      var moveHTML = $(ui.draggable).html();//获取拖动模块的内容
      var thisHTML = $(this).html();//获取目标区域的内容
      var saveMove=moveHTML;//将拖动的模块内容存储
      //将拖动模块和目标模块内容互换
      $(ui.draggable).html(thisHTML);
      $(this).html(saveMove);
      var dragBannerLiHtml=$('.bannerUl1>li').eq(moveStartI).html();//获取拖动模块对应的banner的内容
      var dragBannerLi_ad_title=$('.bannerUl1>li').eq(moveStartI).attr('_ad_title');//获取拖动模块对应banner的广告名称
      var dropBannerLiHtml=$('.bannerUl1>li').eq(moveEndI).html();//获取目标模块对应的banner的内容
      var dropBannerLi_ad_title=$('.bannerUl1>li').eq(moveEndI).attr('_ad_title');//获取拖动模块对应banner的广告名称
      var saveMoveBannerHtml=dragBannerLiHtml;
      var saveMoveTit=dragBannerLi_ad_title;
      //将拖动模块和目标模块对应的banner内容互换
      $('.bannerUl1>li').eq(moveStartI).html(dropBannerLiHtml).attr('_ad_title',dropBannerLi_ad_title);
      $('.bannerUl1>li').eq(moveEndI).html(saveMoveBannerHtml).attr('_ad_title',saveMoveTit);
      //banner运行至相应位置
      $('.showAll').removeClass('showAll');
      $('.bannerIndexNumber').eq(moveEndI).addClass('showAll');
      banner.bannerMove('bannerUl1',moveEndI);
    }
  }
})
//将目前广告信息写入排序列表
function bannerSortWrite(){
  $('.bannerSortTable td').each(function(adIndex){
      var curentAdLiObj=$('.bannerUl1>li').eq(adIndex);//获取当前序号广告对象
      var curentAdLiTit=curentAdLiObj.attr('_ad_title');//获取当前广告标题
      var curentAdLiImgUrl=curentAdLiObj.find('.bannerPic').attr('src');//获取当前广告图片URL
      $(this).attr('_old_Index',adIndex);//将当前广告的序号记录到对应的td位置
      if(curentAdLiObj.hasClass('locked')){//如果当前广告锁定，则对应排序的td也添加锁定标识
        $(this).addClass('locked');
        $(this).find('.bannerLockMc').removeClass('dn');
      }else{
        $(this).removeClass('locked');
        $(this).find('.bannerLockMc').addClass('dn');
      }
      $(this).find('.bannerSortPic').attr('src',curentAdLiImgUrl);//将当前广告图片url赋值到排序对应位置
      $(this).find('.bannerAdTit').text(curentAdLiTit);//将当前广告标题赋值到排序对应位置
  })
}

// 点击排序列表，banner移动到相应位置
$('.bannerSortTable td').click(function(){
  $('.showAll').removeClass('showAll');
  var thisIndex=$(this).index();
  $('.bannerIndexNumber').eq(thisIndex).addClass('showAll');
  banner.bannerMove('bannerUl1',thisIndex);
})


// banner轮播构造
var banner={
  // banner构造函数:参数说明：banner的ul的class
  bannerGz:function(bannerUl){
    var bannerUlLg=$('.'+bannerUl+'>li').length;
    var bannerLiW=$('.'+bannerUl+'>li').width();
    $('.'+bannerUl+'').width(bannerLiW*bannerUlLg);
  },
  // banner运行函数:参数说明：banner的ul的class和指定的banner运行到的index下标
  bannerMove:function(bannerUl,bannerIndex){
    $('.'+bannerUl+'').stop(true);
    var bannerLiW=$('.'+bannerUl+'>li').width();
    $('.'+bannerUl+'').animate({
      'left':-bannerIndex*bannerLiW
    },1000);
  }
}

// banner构造
banner.bannerGz('bannerUl1');
// 点击下标，banner运行至相应的banner位置
$('.bannerIndexNumber').click(function(){
  $('.showAll').removeClass('showAll');
  var thisIndex=$(this).parent().index();
  $(this).addClass('showAll');
  banner.bannerMove('bannerUl1',thisIndex);
})

// 锁定功能
$('.bannerLockDiv').click(function(){
  var thisIndex=$(this).parents('li').index();
  $('.showAll').removeClass('showAll');
  $(this).prev().addClass('showAll');
  banner.bannerMove('bannerUl1',thisIndex);
  var bannerLi=$('.bannerUl1>li').eq(thisIndex);
  var sortTableTd=$('.bannerSortTable tr td').eq(thisIndex);
  if($(this).hasClass('locked')){//如果锁定按钮已有含有锁定标志locked，则进行解锁并且去掉锁定标识
      $(this).parents('.bannerIndexLi').removeClass('locked');
      $(this).parents('.bannerIndexLi').addClass('unLocked');
      $(this).removeClass('locked');
      sortTableTd.removeClass('locked');
      sortTableTd.addClass('unLocked');
      $(this).attr('title','未锁定');
      bannerLi.addClass('unLocked');
      bannerLi.removeClass('locked');
      bannerLi.find('.editDiv1').removeClass('dn');
      bannerLi.find('.bannerLockMc').addClass('dn');
      $(this).find('.unLockIcon').removeClass('dn');
      $(this).find('.lockIcon').addClass('dn');
  }else{
      $(this).parents('.bannerIndexLi').removeClass('unLocked');
      $(this).parents('.bannerIndexLi').addClass('locked');
      $(this).addClass('locked');
      sortTableTd.removeClass('unLocked');
      sortTableTd.addClass('locked');
      $(this).attr('title','已锁定');
      bannerLi.removeClass('unLocked');
      bannerLi.addClass('locked');
      bannerLi.find('.editDiv1').addClass('dn');
      bannerLi.find('.bannerLockMc').removeClass('dn');
      $(this).find('.lockIcon').removeClass('dn');
      $(this).find('.unLockIcon').addClass('dn');
  }
  bannerSortWrite();
  // 未锁定的添加可以拖拽效果
  $('.bannerSortTable td').draggable({
      helper: "clone",
      cursor: "move"
  });
  $('.bannerSortTable .locked').draggable( "destroy" );//锁定的移除可拖拽效果
})
