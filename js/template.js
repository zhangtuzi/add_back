// 添加模板、编辑模板按钮事件
$('.templateAddBtn,.templateEdite').click(function(){
  $('.CzTemplateDiv,.mainDiv').toggle();
})
// 模板保存、模板取消按钮事件
$('.templateCode_save,.templateCode_cancel').click(function(){
  $('.templateAddName').val('15字以内').addClass('color999');
  $('.templateAddPs').val('50字以内').addClass('color999');
  $('.templateAddStyle').val('floorTemplate');
  $('.templateLi').hide();
  $('.floorTemplate').show();
  $('.templateAddForProInput,.templateAddForProInput1,.templateAddForProInput2').removeAttr('checked');
  $('.CzTemplateDiv,.mainDiv').toggle();
})
// 创建模板类型切换
$('.templateAddStyle').change(function(){
  var this_val=$(this).val();
  $('.templateLi').hide();
  $('.'+this_val+'').show();
})

tcInput1('templateAddName','15字以内');
tcInput1('templateAddPs','50字以内');

//模板查询添加开始时间
jeDateFun1('templateAddStart');
//模板查询添加结束时间
jeDateFun1('templateAddEnd');


// 弹层输入框清除默认提示语
function tcInput1(inputClass,DefaultValue){
  $('.'+inputClass+'').focus(function(){
    var this_val=$(this).val();
    if(this_val==DefaultValue){
      $(this).removeClass('color999');
      $(this).val('');
    }
  }).blur(function(){
    var this_val=$(this).val();
    if(this_val==''){
      $(this).addClass('color999');
      $(this).val(DefaultValue);
    }
  })
}


//记录类时间domID，时间YYYY-MM-DD hh:mm:ss
function jeDateFun1(domID){
  $('#'+domID+'').jeDate({
    isinitVal:true,
    ishmsVal:false,
      // minDate:$.nowDate({DD:0}),
      format:"YYYY-MM-DD hh:mm:ss",
      zIndex:3000,
  })
}
