
//var url="http://www.task.com";
var url="http://shop.xzwanqun.com";
var flag=true;
var pageIndex=2;


var taskDiffCode=0;
//var idx=2;
var idx=0;
$(document).ready(function(){
  

      console.log("read");
     /*初始化数据 */
      getData(0,1,10,0);


    
      var ch=$(".lvCont").height();
      var ah=$(".lvList").height();


    $(".lvCont").scroll(function(){     
      var hs=$(".lvCont").scrollTop();
     //  console.log("DEDE:"+hs);
       console.log("FLAG:"+flag);
     
       if(flag==true && hs+ch+60>=ah){
          console.log("需要 请求新数据");
        
          console.log("当前页码："+pageIndex);
          setTimeout(function(){
             loadNewData(pageIndex); 
             // pageIndex++;
          },1000)          
        
         flag=false;
      }


    });
 
    /*等级选择*/ 
   $(".lvSelBtn").click(function(){

      console.log("开启选择面板");
      $(".bigcover").show();

   });



   $(".typeSelectList li").click(function(){

     console.log($(this).index());
     console.log($(this).attr("data-diff"));
     
     $(this).addClass("sel").siblings().removeClass("sel");
     console.log("ZZDE");
     taskDiffCode=$(this).attr("data-diff");


   });

  $(".lvTabs span.sbType").click(function(){
    pageIndex=1;
    $(this).addClass("sel").siblings().removeClass("sel");
     idx=$(this).attr("data-val");
    console.log("选择类型："+idx);
    reloadData(taskDiffCode,idx);

  })


   


   $(".btnTypeConfirm").click(function(){

     $(".bigcover").hide();
     console.log("当前类型"+taskDiffCode);
     var taskDiff=$(".typeSelectList li.sel").attr("data-diff");
     var taskType=$(".lvTabs span.sbType.sel").attr("data-val");
     console.log("级别代码"+taskDiff);
  
       if(taskDiff=="0"){
         $(".lvSelBtn").html("A级");

       }
       if(taskDiff=="1"){
        $(".lvSelBtn").html("B级");
       }
       if(taskDiff=="2"){
        $(".lvSelBtn").html("C级");
      }
      if(taskDiff=="3"){
        $(".lvSelBtn").html("D级");
      }
   /*
           switch(taskDiff){
    
            case "1":
            $(".lvSelBtn").empty();
            $(".lvSelBtn").html("B级");
            break;
            case "2":
              $(".lvSelBtn").html("C级");
              break;
              case "3":
                $(".lvSelBtn").html("D级");
                break;
              default:
             $(".lvSelBtn").html("A级");
           break;
      }

     */

 

    console.log("级别："+taskDiff+"类型："+taskType);
     reloadData(taskDiff,taskType);

   })


});




function reloadData(diff,type){

     $(".lvList").empty();   
     console.log("最终级别："+diff+"最终类型："+type);
     getData(diff,1,10,type);
}





function loadData() {
   
  //   $(".lvList").append("<li>new</li>");

     
      getData(taskDiffCode,pageIndex,10,idx);
     
      flag=true;


}
function loadNewData(pageindex) {
   

     console.log("当前页码："+pageindex)
     

     
    $.ajax({
      url:url+"/task/Task/tasklist",
            type:"post",
      dataType:"json",      
      data:{   
        difficulty:taskDiffCode,
        page:pageindex,
        pagesize:10,
        type:idx

      },                      
      success:function(res){

        console.log(res);
     


        
 
           if(res.result.length>0){
                console.log("有新数据！！！！");

                  var str="";
                  console.log(res.result.length);
                        for(var i=0;i<res.result.length;i++){
                          str+="<li class='taskItem'><a><dl><dt> <img src='"+url+res.result[i].head_pic+"'/></dt>";
                          str+="<dd class='d1'>";
                          str+="<div class='c1'><span>"+res.result[i].title+"</span></div>";
                          str+="<div class='c2'><span>"+res.result[i].create_time+"</span></div>";
                          str+="<div class='c3'><span>特色任务</span><span>绑定任务</span></div>";
                          str+="</dd>";
                          str+="<dd class='d2'><b>赏"+res.result[i].price+"元</b><i class='dico dico_money'></i></dd>";                            
                          str+="</dl></a></li>";
                          
                  }

                    $(".lvList").append(str);
               
                    pageIndex++;
          }
          flag=true;
       
          console.log("flag:"+flag+"-pageindex:"+pageindex);
      },
      error:function(){


      }

  })


    


}







function getData(diff,page,pagesize,type){

  if(diff==""||diff==undefined){
     diff=0;
    }else{
    diff=diff
    }
      if(page==""||page==undefined){
        page=1;
    }else{
      page=page
    }
    if(pagesize==""||pagesize==undefined){
      pagesize=10;
    }else{
     pagesize=pagesize
    }
    if(type==""||type==undefined){
      type=0;
    }else{
      type=type
    }
  
  $.ajax({
        url:url+"/task/Task/tasklist",
      //   url:url+"/task/Task/recomment",
        type:"post",
        dataType:"json",      
        data:{   
          difficulty:diff,
          page:page,
          pagesize:pagesize,
          type:type

        },                      
        success:function(res){

          console.log(res);
          var str="";
          console.log(res.result.length);

  
      
                for(var i=0;i<res.result.length;i++){

                  str+="<li class='taskItem'><a><dl><dt> <img src='"+url+res.result[i].head_pic+"'/></dt>";
                  str+="<dd class='d1'>";
                  str+="<div class='c1'><span>"+res.result[i].title+"</span></div>";
                  str+="<div class='c2'><span>"+res.result[i].create_time+"</span></div>";
                  str+="<div class='c3'><span>特色任务</span><span>绑定任务</span></div>";
                  str+="</dd>";
                  str+="<dd class='d2'><b>赏"+res.result[i].price+"元</b><i class='dico dico_money'></i></dd>";                            
                  str+="</dl></a></li>";
                  
          }

            $(".lvList").append(str);
          
            //pageIndex++;

        
        },
        error:function(){


        }

    })

}
