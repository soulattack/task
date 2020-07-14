$(document).ready(function(){
  
   //   var url="http://shop.xzwanqun.com";
      var url="http://www.task.com";

      $(".publishBtn").click(function(){
             
            var tasktype=$(".taskType").val();
            var taskname=$(".taskName").val();
            var appname=$(".appName").val();
            var tasklimittime=$("#trigger1").val();
            var taskchecktime=$("#trigger2").val();
          
            var end=$("#date3").val();
            var price=$(".taskPrice").val();
            var num=$(".taskNum").val();
            var device=$(".deviceType span.on").attr("data-val");
            var fun=$(".funType span.on").attr("data-val");

            var des=$("#des").val();

          //  console.log("start:"+start+"device"+device+"FUN:"+fun);
            console.log("描述："+des);
          
           // var fdata=new FormData();
            //var file=$('#file1')[0].files[0];


             var stepArr=[];        
             $("#taskStepList li").each(function(){
                      var li={};
                       var imgli=$(this).find(".stImg").attr("durl");
                       var txtli=$(this).find(".steptxt").val();
                      li.pic_url=imgli;
                      li.desc=txtli;                     
                      stepArr.push(li);                   

                 })

              console.log(stepArr);

              var provArr=[];

              $("#taskProvList li").each(function(){
                var lix={};
                var imgli=$(this).find(".stImg").attr("durl");
                var txtli=$(this).find(".steptxt").val();

               lix.pic_url=imgli;
               lix.desc=txtli;            
               provArr.push(lix);

          })


          console.log(provArr); 
            //console.log("--"+taskchecktime);
           // console.log(tasktype);
 
    




              $.ajax({
               //  url:url+"/task/Task/putout_task",
                 url:url+"/task/Task/test",
                 type:"post",
               
                 data:{
                      user_id:1,
                      type:tasktype,
                      title:taskname,
                      price:price,
                      number:num,
                      limit_time:tasklimittime,
                      check_time:taskchecktime,
                      end_time:end,
                      divice:device,
                      times:fun,
                      app_name:appname,
                    //  step:stepArr.toString(),
                     // prove:stepArr.toString()
                     //  step: JSON.stringify(stepArr),
                     //  prove:JSON.stringify(provArr)
                     step: stepArr,
                     prove:provArr

                 },
                 dataType:"json",
                 success:function(res){

                    console.log(res);
                 
                  },
                error:function(){



                }
                
                 
                 
                

              })

     })
    //   


    $(".selectType span").click(function(){

        $(this).addClass("on");
        $(this).siblings().removeClass("on");
    });

    var istep=1; 
   $(".btnAddStep").click(function(){
     
      var lastitem=$("#taskStepList li:last-child").find("input.imgupload").val();
      var lastitemtxt=$("#taskStepList li:last-child").find("input.steptxt").val();
      console.log(typeof lastitem);
      console.log(lastitem+"--"+lastitemtxt);
      var flag1=$(".taskStepList li:last-child").find("input.imgupload").val();
      var flag2=$(".taskStepList li:last-child").find("input.steptxt").val();

    if(lastitem.length>0 && lastitemtxt.length>0){
      //  if(lastitem!=" " && lastitemtxt.length>0){


         //   alert("keyi");
          istep++;
         console.log("新增加");
         var str="";
          str+="<li><dl><dt><i>"+istep+"</i><b>删除</b></dt>";
          str+="<dd class='stepstep'>";
          str+="<div class='stImg'><input type='file' value='' class='imgupload'  />";
          str+="</div>";
          str+="<div class='stTxt'><input type='text' value='' class='steptxt'  />";
          str+="</div>";
          str+="</dd>";
          str+="</dl></li>";

         $("#taskStepList").append(str);


      }else{

        alert("不可以");


      }

   })




   var isprov=1; 
   $(".btnAddProv").click(function(){
     
      var lastitem=$("#taskProvList li:last-child").find("input.imgupload").val();
      var lastitemtxt=$("#taskProvList li:last-child").find("input.steptxt").val();
      console.log(typeof lastitem);
      console.log(lastitem+"--"+lastitemtxt);
      var flag1=$(".taskProvList li:last-child").find("input.imgupload").val();
      var flag2=$(".taskProvList li:last-child").find("input.steptxt").val();

    if(lastitem.length>0 && lastitemtxt.length>0){
      //  if(lastitem!=" " && lastitemtxt.length>0){


         //   alert("keyi");
         isprov++;
         console.log("新增加");
         var str="";
          str+="<li><dl><dt><i>"+isprov+"</i><b>删除</b></dt>";
          str+="<dd class='stepstep'>";
          str+="<div class='stImg'><input type='file' value='' class='imgupload'  />";
          str+="</div>";
          str+="<div class='stTxt'><input type='text' value='' class='steptxt'  />";
          str+="</div>";
          str+="</dd>";
          str+="</dl></li>";

         $("#taskProvList").append(str);


      }else{

        alert("buzhou bukeyi");



      }

   })






   // 绑定事件ain

     $("#taskStepList").on("change","input.imgupload",function(){
         console.log("改变");
          var _this=$(this);
         var formdata=new FormData();
        
       　　//　　formdata.append('file',$("#uploadImg").get(0).files[0]);
       　　　　formdata.append('file',$(this).get(0).files[0]);
   
             //  console.log(formdata);  
             　　$.ajax({
       　　　
               url:"http://www.task.com/task/upload",　　　　
             
                data: formdata,
             　　　　type: "POST",
             　　　　async: false,
             　　　　cache: false,
                    dataType:"json",
             　　　　contentType: false,
             　　　　processData: false,
             　　　　success: function(data) {
             　          console.log("ok");
                         console.log(data);
                         // console.log($(this));
                        // $(this).parent(".stImg").css("backgroudImage",url+data.image_url)
                      //   $(".stImg").css("backgroud-image", url+data.image_url)
                         //$(".stImg").css("backgroud-color", "green");
                          console.log(_this.parents(".stImg"));
                     
                          _this.parents(".stImg").css({
                            "backgroundImage": "url(" +url+data.data.image_url+")"
                             // "backgroundColor":"green"
                          });

                          _this.parents(".stImg").attr("durl",data.data.image_url);
                         // _this.parent(".stImg").css("backgroud-color", "green");

             　　　　},
             　　　　error: function(data) {
             　　　      
             　　　　}
             　　});

     });




     $("#taskProvList").on("change","input.imgupload",function(){
      console.log("改变");
       var _this=$(this);
      var formdata=new FormData();
     
    　　//　　formdata.append('file',$("#uploadImg").get(0).files[0]);
    　　　　formdata.append('file',$(this).get(0).files[0]);

          //  console.log(formdata);  
         　$.ajax({
    　　　
            url:"http://www.task.com/task/upload",　　　　
          
             data: formdata,
          　　　　type: "POST",
          　　　　async: false,
          　　　　cache: false,
                 dataType:"json",
          　　　　contentType: false,
          　　　　processData: false,
          　　　　success: function(data) {
          　          console.log("ok");
                      console.log(data);
           
                       console.log(_this.parents(".stImg"));
                  
                       _this.parents(".stImg").css({
                         "backgroundImage": "url(" +url+data.data.image_url+")"
                       
                       });

                       _this.parents(".stImg").attr("durl",data.data.image_url);
                   

          　　　　},
          　　　　error: function(data) {
          　　　      
          　　　　}
          　　});

  });




    


})