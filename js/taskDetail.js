
var url="http://shop.xzwanqun.com";



 var tid=0;
$(document).ready(function(){

    // console.log("details");

    // console.log(getQueryVariable("id"));
    tid=getQueryVariable("id");
    console.log("任务id："+tid);

    datainit(tid);




});

// 

   $("#btnSign").click(function(){

           
           console.log("我要报名");

           $(".bigcover").show();

   }) 

 $("#btnCancel").click(function(){
      console.log("取消");

      $(".bigcover").hide();
 
 })

 $("#btnConfirm").click(function(){
     console.log("提交");

     $(".bigcover").hide();
  
     $.ajax({
      url:url+"/task/Task/jointask",
      type:"post",
      dataType:"json",
      data:{
          taskid:tid
      },
      success:function(res){
             console.log(res);
      },
      error:function(){

      }
      

     })





})

// btnCancle
$("#btnCancle").click(function(){
  console.log("fangqi");

 // $(".bigcover").hide();

  $.ajax({
   url:url+"/task/Task/Renounce",
   type:"post",
   dataType:"json",
   data:{
       taskid:tid
   },
   success:function(res){
          
          console.log(res);
          tips("取消任务");


   },
   error:function(){

   }
   

  })





})







function datainit(tid){
    
    $.ajax({
        url:url+"/task/Task/taskinfo",
        type:"post",
        dataType:"json",
        data:{
            taskid:tid
        },
        success:function(res){
          
          console.log(res);
     $("#userImg").attr("src",url+res.result.taskinfo.head_pic);
            //   $("#userImg").attr("src","https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2949430403,1132387607&fm=26&gp=011.jpg");


          $("#tid").html(res.result.taskinfo.id);
          $("#tTle").html(res.result.taskinfo.title);
   
          $(".sx01").html(res.result.taskinfo.type);
          $(".sx02").html(res.result.taskinfo.app_name);
          $("#tStatus").html(statusInfo(res.result.taskinfo.status));

           //var status=res.result.taskinfo.status;
           


          var dv=res.result.taskinfo.device;
          if(dv==0){

                 $("#device").html("所有设备");
          }
          if(dv==1){

            $("#device").html("安卓");
           }
           if(dv==2){

            $("#device").html("iOS");
          }
           $("#desc").html(res.result.taskinfo.desc);
         

          $("#price").html(res.result.taskinfo.price+"元");
          $("#settleNum").html(res.result.taskinfo.settle_num+"人");
          $("#checkTime").html(res.result.taskinfo.check_time+"天");
          $("#limitTime").html(res.result.taskinfo.limit_time+"小时");
          $("#depositFund").html("￥"+res.result.taskinfo.deposit);

      //    $("#time").html("("+timesInfo(res.result.taskinfo.times)+")");
          $("#time").html(timesInfo(res.result.taskinfo.times));
          



       
          /****
           * 底部按钮部分
           * 
           * ***/
          botActionCtrl(res.result.taskuser_status);
       

          /*循环主要步骤*/ 
         var str=""; 
         for(var i=0;i<res.result.stpeinfo.length;i++){             
               console.log(i);
               //alert(i);              
               str+="<li><dl><dt><i>"+(i+1)+"</i></dt>";
               str+="<dd><div class='dxDes'><p><span>"+res.result.stpeinfo[i].desc +"</span></p></div>";
               str+="<div class='imgbox'> <img src='"+res.result.stpeinfo[i].pic_url+"'/></div>";
               str+="</dl></li>";

            }
             $(".tStep").append(str);
           
            



    
      },
        error:function(){

        }
      })

    }
   /**/
   
   
   /*当前状态*/

    function statusInfo(st){
       var status="";    
      if(st==0){status="未领取"};
      if(st==1){status="待提交"};
      if(st==2){status="待审核"};
      if(st==3){status="已放弃"};
      if(st==4){status="审核通过"};

      return status;
    }

    function timesInfo(st){
      var times="";    
     if(st==0){times="每人一次"};
     if(st==1){times="每日一次"};
     if(st==2){times="每日三次"};
    

     return times;
   }


   function botActionCtrl(st){
         if(st==0){
           $(".statusType_sign").show();
         } 
         if(st==1){
          $(".statusType_cancle").show();
        } 
        if(st==3){
          $(".statusType_resign").show();
        }        
   }


   
function tips(txt){

    var tipStr="<div class='tipx'> <i></i><span>"+txt+"</span></div>";
 
     $("body").append(tipStr);

     setTimeout(function(){
       $(".tipx").hide()   
     },3000)
  

}