// 页面跳转
$('.adBjBtn,.newAdBtn').click(function(){
  window.location.href='newBannerAd.html';
})
$('.bannerUl1>li').click(function(){
  if(!$(this).hasClass('locked')){
    window.location.href='bannerAd.html';
  }
})

$('.floorAdUl').delegate('.floorAdEdite','click',function(){
  if(!$(this).parents('.floorAdLi').hasClass('floorLocked')){
    window.location.href='bannerAd.html';
  }
})

$('.adBackBtn').click(function(){
  window.history.go(-1);
})
$('.adCkBtn').click(function(){
  window.location.href='bannerAdCk.html';
})


// 新建广告页面发布区域全选
$('.AreaSelectAll').click(function(){
    $('.sfInput').prop('checked','checked');
})
// 新建广告页面发布区域选中清空
$('.clrAreaSelect').click(function(){
    $('.sfInput').removeProp('checked');
})

// 新建广告页面套餐全选
$('.TaocanSelectAll').click(function(){
    $('.taocanProduct').prop('checked','checked');
})
// 新建广告页面套餐选中清空
$('.clrTaocanSelect').click(function(){
    $('.taocanProduct').removeProp('checked');
})
// 新建广告页面2I套餐全选
$('.2ISelectAll').click(function(){
    $('.taocan2IProduct').prop('checked','checked');
})
// 新建广告页面2I套餐选中清空
$('.clr2ISelect').click(function(){
    $('.taocan2IProduct').removeProp('checked');
})

// banner广告排期页面重置发布时间
$('.adList').delegate('.adFbBtn','click',function(){
    $(this).parents('li').addClass('adListCzDom');//给当前操作的排期广告添加标识
    $('.bgMc,.setTimeDiv').show();
})

$('.confirmBtn,.cancelBtn').click(function(){
    $('.adListCzDom').removeClass('adListCzDom');//去掉广告排期操作的标识
    $('.bgMc,.setTimeDiv').hide();
})

// 排期banner广告删除
$('.adList').delegate('.adDelBtn','click',function(){
    $(this).parents('li').addClass('adListCzDom');//给当前操作的排期广告添加标识
    $('.bgMc,.bannerAdTc1').show();
})
//排期广告删除确认
$('.delBannerAd').click(function(){
  $('.adListCzDom').remove();//将当前操作的排期广告删除
  $('.bgMc,.bannerAdTc1').hide();
  $('.adList>li').removeClass('marginR0');
  for(var i=0;i<$('.adList>li').length;i++){
    $('.adList>li').eq(i).find('.adIndex').text(i+1);
    if(i%3==2){
      $('.adList>li').eq(i).addClass('marginR0');
    }
  }
})

//排期广告删除取消
$('.delBannerAdCancel').click(function(){
  $('.adListCzDom').remove('adListCzDom');//操作排期广告的标识去掉
  $('.bgMc,.bannerAdTc1').hide();
})



// 楼层广告展示页面
$(function(){
  // 页面加载完成后，获取当前楼层广告区域的高度，将高度赋值给下面填充区域，使底部内容展示出来
  var floorAdContenH=$('.floorAdWarp').height();
  $('.bannerDivShade').height(floorAdContenH);
})

var floorAdLiTemplate='';//楼层广告模板
floorAdLiTemplate+='<li class="floorAdLi"><img src="images/thProPic1.jpg" class="floorAdPic">';
floorAdLiTemplate+='<div class="floorAdMc dn"></div><div class="floorActiveDiv"></div>';
floorAdLiTemplate+='<img src="images/lockedIcon3.png" class="floorAdLockShow dn" title="已锁定">';
floorAdLiTemplate+='<img src="images/closeIcon2.png" class="floorAdDelIcon"><div class="floorAdCzDiv">';
floorAdLiTemplate+='<table class="floorAdCz" cellspacing="5" border-collapse="inherit"><tr class="floorAdUp"';
floorAdLiTemplate+=' title="上移"><td><img src="images/upMoveIcon2.png" class="floorAdCzBtn"></td></tr>';
floorAdLiTemplate+='<tr class="floorAdEdite" title="编辑"><td><img src="images/editIcon2.png" class="floorAdCzBtn">';
floorAdLiTemplate+='</td></tr><tr class="floorAdLocked" title="锁定"><td><img src="images/lockIcon2.png"';
floorAdLiTemplate+='  class="floorAdCzBtn"></td></tr><tr class="floorAdUnLock dn" title="解锁"><td>';
floorAdLiTemplate+='<img src="images/unLockIcon2.png" class="floorAdCzBtn"></td></tr>';
floorAdLiTemplate+='<tr class="floorAdDown" title="下移"><td><img src="images/downMoveIcon2.png"';
floorAdLiTemplate+= 'class="floorAdCzBtn"></td></tr></table></div></li>';


// 楼层广告位添加
$('.floorAdAddBtn').click(function(){
  var floorAdLg=$('.floorAdUl>li').length;
  if(floorAdLg<11){//最多10个楼层广告
    $('.floorAdAddLi').before(floorAdLiTemplate);//插入楼层新的广告位
    floorAdMoveBtnShow();//最上方的楼层广告上移按钮隐藏，最下方的楼层广告下移按钮隐藏
    // 完成后，获取当前楼层广告区域的高度，将高度赋值给下面填充区域，使底部内容展示出来
    var floorAdContenH=$('.floorAdWarp').height();
    $('.bannerDivShade').height(floorAdContenH);
    if(floorAdLg>9){
      $('.floorAdAddBtn').parent().addClass('dn');
    }
  }
})

floorAdMoveBtnShow();//最上方的楼层广告上移按钮隐藏，最下方的楼层广告下移按钮隐藏

// 楼层广告位解锁
$('.floorAdWarp').delegate('.floorAdUnLock','click',function(){
    $(this).addClass('dn');//解锁按钮隐藏
    var thisPLi=$(this).parents('li');//获取当前楼层广告位li
    thisPLi.removeClass('floorLocked');//当前楼层广告位去掉锁定标识
    thisPLi.children().find('.floorAdLocked').removeClass('dn');//当前广告位右侧锁定操作按钮显示
    thisPLi.find('.floorAdMc').addClass('dn');//当前广告位去掉蒙层
    thisPLi.find('.floorAdLockShow').addClass('dn');//当前广告位锁定标识消失
})
//楼层广告位锁定
$('.floorAdWarp').delegate('.floorAdLocked','click',function(){
    $(this).addClass('dn');//锁定按钮隐藏
    var thisPLi=$(this).parents('li');//获取当前楼层广告位li
    thisPLi.addClass('floorLocked');//当前楼层广告位添加锁定标识
    thisPLi.children().find('.floorAdUnLock').removeClass('dn');//当前广告位右侧解锁操作按钮显示
    thisPLi.find('.floorAdMc').removeClass('dn');//当前广告位添加蒙层
    thisPLi.find('.floorAdLockShow').removeClass('dn');//当前广告位锁定标识显示
})
//楼层广告位删除
$('.floorAdWarp').delegate('.floorAdDelIcon','click',function(){
    var thisPLi=$(this).parents('li');//获取当前楼层广告位li
    thisPLi.addClass('floorCzDom');//添加操作标识
    $('.floorTc,.tcMc').show();
})

//楼层广告位上移
$('.floorAdWarp').delegate('.floorAdUp','click',function(){
    var thisPLi=$(this).parents('li');//获取当前楼层广告位li
    if(!thisPLi.hasClass('floorLocked')){
      var thisPLiIndex=thisPLi.index();//获取当前楼层广告位的下标
      var targetPLiIndex=thisPLiIndex-1;//获取目标楼层广告位li的下标
      var moveFlag=true;//定义可移动标识
      while (moveFlag) {
          if(targetPLiIndex>-1){//0为最上方一个楼层
            var targetLi=$('.floorAdUl>li').eq(targetPLiIndex);//获取目标Li
              if(targetLi.hasClass('floorLocked')){//如果目标楼层广告位含有锁定标识，则查找上一个
                  targetPLiIndex--;
              }else{
                var moveBannerCurentHtml=$('.floorAdUl>li').eq(thisPLiIndex).html();//获取需要移动的楼层广告位内容
                var moveBannerTargetHtml=$('.floorAdUl>li').eq(targetPLiIndex).html();//获取目标位置的楼层广告位内容
                var moveSaveHtml=moveBannerCurentHtml;//将需要移动楼层广告位内容存储在moveSaveHtml变量中
                $('.floorAdUl>li').eq(thisPLiIndex).html(moveBannerTargetHtml);//将目标位置的楼层广告位内容放在需要移动的banner的现在位置上
                $('.floorAdUl>li').eq(targetPLiIndex).html(moveSaveHtml);//将存储的需要移动的楼层广告位内容放入目标位置
                moveFlag=false;
                floorAdMoveBtnShow();
              }
          }else{
            moveFlag=false;
          }
      }
    }
})

//楼层广告位上移
$('.floorAdWarp').delegate('.floorAdDown','click',function(){
    var thisPLi=$(this).parents('li');//获取当前楼层广告位li
    if(!thisPLi.hasClass('floorLocked')){
      var thisPLiIndex=thisPLi.index();//获取当前楼层广告位的下标
      var targetPLiIndex=thisPLiIndex+1;//获取目标楼层广告位li的下标
      var moveFlag=true;//定义可移动标识
      while (moveFlag) {
          if(targetPLiIndex<$('.floorAdUl>li').length-1){//0为最上方一个楼层
            var targetLi=$('.floorAdUl>li').eq(targetPLiIndex);//获取目标Li
              if(targetLi.hasClass('floorLocked')){//如果目标楼层广告位含有锁定标识，则查找上一个
                  targetPLiIndex++;
              }else{
                var moveBannerCurentHtml=$('.floorAdUl>li').eq(thisPLiIndex).html();//获取需要移动的楼层广告位内容
                var moveBannerTargetHtml=$('.floorAdUl>li').eq(targetPLiIndex).html();//获取目标位置的楼层广告位内容
                var moveSaveHtml=moveBannerCurentHtml;//将需要移动楼层广告位内容存储在moveSaveHtml变量中
                $('.floorAdUl>li').eq(thisPLiIndex).html(moveBannerTargetHtml);//将目标位置的楼层广告位内容放在需要移动的banner的现在位置上
                $('.floorAdUl>li').eq(targetPLiIndex).html(moveSaveHtml);//将存储的需要移动的楼层广告位内容放入目标位置
                moveFlag=false;
                floorAdMoveBtnShow();
              }
          }else{
            moveFlag=false;
          }
      }
    }
})


//最上方的楼层广告上移按钮隐藏，最下方的楼层广告下移按钮隐藏
function floorAdMoveBtnShow(){
  $('.floorAdUp,.floorAdDown').removeClass('dn');//将所有的楼层移动按钮显示
  $('.floorAdUl>li').first().children().find('.floorAdUp').addClass('dn');//最上方的楼层广告上移按钮隐藏
  $('.floorAdUl>li').last().prev().children().find('.floorAdDown').addClass('dn');//最下方的楼层广告下移按钮隐藏
}

// 楼层广告删除弹层确认
$('.delConfrimBtn').click(function(){
  $('.floorAdAddBtn').parent().removeClass('dn');
  $('.floorCzDom').remove();
  $('.floorTc,.tcMc').hide();
  floorAdMoveBtnShow();
})
// 楼层广告删除取消
$('.delCancelBtn').click(function(){
  $('.floorCzDom').removeClass('floorCzDom');
  $('.floorTc,.tcMc').hide();
})

var taocanArray1=[{
  'id':'taocan2',
  'title':'套餐套餐套餐套餐套餐套餐'
},{
  'id':'taocan3',
  'title':'套餐3'
},{
  'id':'taocan4',
  'title':'taocanTestabcdefg'
},{
  'id':'taocan5',
  'title':'自由组合套餐'
},{
  'id':'taocan6',
  'title':'全国4G流量套餐'
},{
  'id':'taocan7',
  'title':'流量包套餐'
},{
  'id':'taocan8',
  'title':'套餐4套餐4'
},{
  'id':'taocan9',
  'title':'ABCDEFGHIJKLMN'
},{
  'id':'taocan10',
  'title':'套餐套餐套餐套餐套餐套餐'
},{
  'id':'taocan11',
  'title':'套餐套餐套餐套餐套餐套餐'
},{
  'id':'taocan12',
  'title':'套餐套餐套餐套餐套餐套餐'
}];


$('.taocanUl').append(taocanLi(taocanArray1,'taocanProduct'));
$('.2IcaotanUl').append(taocanLi(taocanArray1,'taocan2IProduct','2i'))
// taocanLi(taocanArray1,'2i');
function taocanLi(option){
  var taocanA=arguments[0];
  var taocanInputClass=arguments[1];
  var taocanType=arguments[2];
  var taocanLi1='';
  for(var i=0;i<taocanA.length;i++){
    var curTancan=taocanArray1[i];
    var curTaocanId=curTancan.id+taocanType;
    var curTaocanTit=curTancan.title;
    var titLength=fontLenth(curTaocanTit);
    var _attr_title='';
    if(titLength>12){
      _attr_title=curTaocanTit;
      var newTit=fontCut(curTaocanTit,10)+'...';
    }else{
      newTit=curTaocanTit;
    }
    taocanLi1+='<li><input type="checkbox" name="taocan" class="taocanInput '+taocanInputClass+'" id="'+curTaocanId+'">';
    taocanLi1+='<label for="'+curTaocanId+'" title="'+_attr_title+'">'+newTit+'</label></li>';
  }
  return taocanLi1;
}



// 楼层标题更改前的：标题、标题外部divclass和标题外部div的style
var floorTitChangeBefore='';
var floorTitBgClassChangeBefore='';
var floorTitBgStyleChangeBefore='';

//更改楼层标题
$('.floorTitChange').click(function(){
  //获取现在展示的楼层标题信息
    var floorTitDom=$('.floorTitDiv1').eq(0);
    floorTitChangeBefore=floorTitDom.find('span').text();
    floorTitBgClassChangeBefore=floorTitDom.attr('class');
    floorTitBgStyleChangeBefore=floorTitDom.attr('style');
    //对背景图片字符串进行处理
    var floorBgImgSrc1=floorTitBgStyleChangeBefore.substring(16,floorTitBgStyleChangeBefore.length-2);
    // 将现有的信息赋值给弹层相关位置
    $('.floorTitInput').val(floorTitChangeBefore);
    $('.floorTitBgUl>li>img').each(function(){
      var thisBgClass=$(this).attr('class');
      if($('.floorTitDiv1').hasClass(thisBgClass)){
        $(this).parent().addClass('dn');
        $('.floorTitBgShow>img,.floorTitBgShowLi>img').attr({
          'class':thisBgClass,
          'src':floorBgImgSrc1
        });
      }
    })
    $('.floorTitBgShowLi').removeClass('dn');
    $('.floorTitBgShowLi>img').removeClass('dn');
    $('.floorAdDelIcon,.mc,.floorLocked .floorAdMc,.floorLocked .floorAdLockShow,.floorTitChange').addClass('dn');
    $('.floorTitDivTc,.floorTitMc').removeClass('dn');
})
//楼层背景选则项展开
$(window).click(function(e){
  if($(e.target).hasClass('floorTitBgChangeIcon')){
    $('.floorTitBgShow').addClass('dn');
    $('.floorTitBgUl>li').removeClass('dn');
    //对背景图片列表进行循环查找，现在展示的背景图片进行隐藏
    $('.floorTitBgUl>li>img').each(function(){
      var thisBgClass=$(this).attr('class');
      if($('.floorTitDiv1').hasClass(thisBgClass)){
        $(this).parent().addClass('dn');
      }
    })
    $('.floorTitBgShowLi').removeClass('dn');
    $('.floorTitBgUl').removeClass('dn');
  }else{
    $('.floorTitBgShow').removeClass('dn');
    $('.floorTitBgUl').addClass('dn');
  }
})
//楼层标题背景选择
$('.floorTitBgUl>li').click(function(){
  $('.floorTitBgShow').removeClass('dn');
  //获取当前选择项信息
  var thisImg=$(this).find('img');
  var thisBgClass=thisImg.attr('class');
  var thisBgSrc=thisImg.attr('src');
  // 将选择的背景图片信息赋值给下拉框和显示图片
  $('.floorTitBgShow img,.floorTitBgShowLi img').attr({
    'class':thisBgClass,
    'src':thisBgSrc,
  });
  //将选择的背景图片信息赋值为楼层标题div
  $('.floorTitDiv1').attr({
    'class':'floorTitDiv1 width1200 '+thisBgClass,
    'style':'background:url(\''+thisBgSrc+'\')'
  });
  $('.floorTitBgUl').addClass('dn');
})
//取消更改楼层标题，将原来的标题信息撤回
$('.floorTitCancel').click(function(){
  $('.floorTitDiv1 span').text(floorTitChangeBefore);
  $('.floorTitDiv1').attr('class',floorTitBgClassChangeBefore);
  $('.floorTitDiv1').attr('style',floorTitBgStyleChangeBefore);
})
$('.floorTitCancel,.floorTitSave').click(function(){
  $('.floorAdDelIcon,.mc,.floorLocked .floorAdMc,.floorLocked .floorAdLockShow,.floorTitChange').removeClass('dn');
  $('.floorTitDivTc,.floorTitMc').addClass('dn');
})
//楼层广告标题输入完成后将新标题赋值
$('.floorTitInput').blur(function(){
  var thisVal=$(this).val();
  $('.floorTitDiv1 span').text(thisVal);
})





//字节判断(中文2，英文小写1，大写1.5)
function fontLenth(thisVal){
  var thisVLength=0;
  var thisA=thisVal.split('');
  var rep=/[^\x00-\xff]/;
  var repABC=/^[A-Z]+$/;
  for(var i=0;i<thisA.length;i++){
    if(rep.test(thisA[i])){
      thisVLength+=2;
    }else if(repABC.test(thisA[i])){
      thisVLength+=1.5;
    }else{
        thisVLength++;
    }
  }
  return thisVLength;
}

//字节截取(中文2，英文小写1，大写1.5)
function fontCut(thisVal,thisCutLength){
  var thisVlength=0;
  var thisB=[];
  var thisA=thisVal.split('');
  var rep=/[^\x00-\xff]/;
  var repABC=/^[A-Z]+$/;
  for(var i=0;i<thisA.length;i++){
    if(rep.test(thisA[i])){
      thisVlength+=2;
    }else if(repABC.test(thisA[i])){
      thisVlength+=1.5;
    }else{
        thisVlength++;
    }
    if(thisVlength>thisCutLength){
      return thisB.join('');
    }else{
      thisB.push(thisA[i]);
    }
  }
  return thisB.join('');
}
