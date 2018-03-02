

  $('#color').colpick({

      colorScheme:'dark',

      layout:'rgbhex',

      color:'ff8800',

      onSubmit:function(hsb,hex,rgb,el) {

          $('#export_input').css('background-color', '#'+hex);

          $(el).colpickHide();

      }

  })

  $('#ziti_color').colpick({

      colorScheme:'dark',

      layout:'rgbhex',

      color:'ff8800',

      onSubmit:function(hsb,hex,rgb,el) {

          $('#export_input').css('color', '#'+hex);

          $(el).colpickHide();


      }

  })

$("#tianjia_btn").click(function(){
    $("#text_edit").show();
    $("#tianjia_btn").hide();
});

  $("#hide_btn").click(function(){
      $("#text_edit").hide();
      $("#tianjia_btn").show();
  });


  $("#wenben").click(function(){
      $("#export").focus();
  });
  $("#queren").click(function(){
      var oSelect=$('#scale option:selected').text();
      var oTop=$("#text_edit").css("top");
      var oHight=$("#export_input").css("height");
      switch (oSelect)
      {
          case "1号字体":
              $("#export_input").css("font-size","13px");
              $("#export_input").css("width","52px");
              $("#export").css("width","52px");
              $("#wenben").css("visibility","hidden");
              $("#color").css("visibility","hidden");
              $(".toBig").css("visibility","hidden");
              $("#hide_btn").css("visibility","hidden");
              $("#text_edit").css("top",parseInt(oTop)-(15-parseInt(oHight))+'px');
              break;
          case "2号字体":
              $("#export_input").css("font-size","30px");
              $("#export_input").css("width","120px");
              $("#wenben").css("visibility","hidden");
              $("#color").css("visibility","hidden");
              $(".toBig").css("visibility","hidden");
              $("#hide_btn").css("visibility","hidden");
              $("#text_edit").css("top",parseInt(oTop)-(34-parseInt(oHight))+'px');
              break;
          case "3号字体":
              $("#export_input").css("font-size","50px");
              $("#export_input").css("width","200px");
              $("#wenben").css("visibility","hidden");
              $("#color").css("visibility","hidden");
              $(".toBig").css("visibility","hidden");
              $("#hide_btn").css("visibility","hidden");
              $("#text_edit").css("top",parseInt(oTop)-(58-parseInt(oHight))+'px');
              break;
          case "4号字体":
              $("#export_input").css("font-size","70px");
              $("#export_input").css("width","300px");
              $("#wenben").css("visibility","hidden");
              $("#color").css("visibility","hidden");
              $(".toBig").css("visibility","hidden");
              $("#hide_btn").css("visibility","hidden");
              $("#text_edit").css("top",parseInt(oTop)-(80-parseInt(oHight))+'px');
              break;
          case "5号字体":
              $("#export_input").css("font-size","100px");
              $("#export_input").css("width","390px");
              $("#wenben").css("visibility","hidden");
              $("#color").css("visibility","hidden");
              $(".toBig").css("visibility","hidden");
              $("#hide_btn").css("visibility","hidden");
              $("#text_edit").css("top",parseInt(oTop)-(115-parseInt(oHight))+'px');
              break;
      }

  });

  $("#export_input").hover(function(){
      $("#wenben").css("visibility","visible");
      $("#color").css("visibility","visible");
      $(".toBig").css("visibility","visible");
      $("#hide_btn").css("visibility","visible");
  });


    window.onload = function() {

        var oDiv = document.getElementById('text_edit');//编辑水印模块对象
        var oWarpDiv=document.getElementById('bannerPicDiv');//水印图片外部div

        drag(oDiv,oWarpDiv);

        function drag(moveObj,warpObj) {
          // moveObj--->可移动模块；warpObj--->可移动模块外部dom
            moveObj.onmousedown = function(ev) {
                var ev = ev || event;

                var disX = ev.clientX - this.offsetLeft;
                var disY = ev.clientY - this.offsetTop;
                var warpX = warpObj.clientWidth;
                var warpY = warpObj.clientHeight;
                if ( moveObj.setCapture ) {
                    moveObj.setCapture();
                }

                document.onmousemove = function(ev) {
                    var ev = ev || event;

                    var L = ev.clientX - disX;
                    var T = ev.clientY - disY;
                    if ( L < 0 ) {
                        L = 0;
                    } else if ( L > warpX - moveObj.offsetWidth ) {
                        L = warpX - moveObj.offsetWidth;
                    }

                    if ( T < -50 ) {
                        T = -50;
                    } else if ( T > warpY - moveObj.offsetHeight ) {
                        T = warpY - moveObj.offsetHeight;
                    }

                    moveObj.style.left = L + 'px';
                    moveObj.style.top = T + 'px';

                }

                document.onmouseup = function() {
                    document.onmousemove = document.onmouseup = null;
                    if ( moveObj.releaseCapture ) {
                        moveObj.releaseCapture();
                    }
                }



            }

        }


    }
