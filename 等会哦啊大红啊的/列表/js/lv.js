
//var url="http://www.task.com";
var url="http://shop.xzwanqun.com";
var flag=true;
$(document).ready(function(){
  

      console.log("read");
     /*初始化数据 */
      getData();


    
      var ch=$(".lvCont").height();
      var ah=$(".lvList").height();


    $(".lvCont").scroll(function(){     
      var hs=$(".lvCont").scrollTop();
       console.log("DEDE:"+hs);
     
       if(flag==true && hs+ch>=ah-56){
               
          setTimeout(function(){
           //   loadData()
         },1000)          
          
         flag=false;
      }


    });
 
    /*等级选择*/ 
   $(".lvSelBtn").click(function(){

      console.log("开启选择面板");
      $(".bigcover").show();


   })




});



function loadData() {
   
  //   $(".lvList").append("<li>new</li>");
     
      flag=true;
}



function getData(){
  $.ajax({

       url:url+"/task/Task/tasklist",
      //   url:url+"/task/Task/recomment",
        type:"post",
        dataType:"json",      
        data:{   },
                 
        
        success:function(res){

          console.log(res);
          var str="";
          console.log(res.result.length);

         /*    
         for(key in res.result){
             console.log(res.result[key])

          }
           */
        //  var objs=res.result;
       //   console.log(objs);
       //   let arr =  Object.values(objs);

        //  console.log(arr);
      
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
      
    

        
        },
        error:function(){


        }

    })

}
