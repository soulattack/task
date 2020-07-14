var url="http://www.task.com";


$(document).ready(function(){
  
   
       console.log(" indexready!!!");   
       getData();


      
});




function getData(){
      $.ajax({
    
       
            url:url+"/task/Task/recomment",
            type:"post",
            dataType:"json",      
            data:{   },                           
            success:function(res){
    
        
              var str="";
              console.log(res);             
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
    
                $(".taskList").append(str);                     
            },
            error:function(){  }

        }) 
    }