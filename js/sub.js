var url="http://shop.xzwanqun.com";


var tid=0;
$(document).ready(function(){

    tid=getQueryVariable("id");

  

    userInfo();
    taskInfo();




    $(".uploadImgList").on("change","input",function(){



        var _this=$(this);
        var formdata=new FormData();        　
      　　　　formdata.append('file',$(this).get(0).files[0]);
      
      var _name, _fileName, personsFile;
     
      personsFile = $(this)[0];
      _name = personsFile.value;
      _fileName = _name.substring(_name.lastIndexOf(".") + 1).toLowerCase();
      if (_fileName !== "png" && _fileName !== "jpg" && _fileName !== "gif" ) {

          alert("上传图片格式不正确，请重新上传");

      }else{

        　$.ajax({
            　　　
                    url:url+"/task/upload",　　　　
                    
                    data: formdata,
                    　　　　type: "POST",
                    　　　　async: false,
                    　　　　cache: false,
                           dataType:"json",
                    　　　　contentType: false,
                    　　　　processData: false,
                    　　　　success: function(data) {
                    　          console.log("ok");
                                console.log(data.data.image_url);
                                _this.parents(".imgBox").css({
                                    "backgroundImage": "url(" +url+data.data.image_url+")"
                                });
                                _this.parents(".imgBox").attr("durl",data.data.image_url)
                        

                            var li=" <li><div class='imgBox'> <input type='file'></div></li>";

                            $(".uploadImgList").append(li);
                            
        
                    　　　　},
                    　　　　error: function(data) {
                    　　　      
                    　　　　}
                    　　});


      }

           

    })

     /*****/
     
     $(".publishBtn").click(function(){
              
        var stepArr=[];        
        $(".uploadImgList li").each(function(){
                  var li={};
                  var imgli=$(this).find(".imgBox").attr("durl"); 
                  console.log("changdu:"+imgli);   
                  li.pic_url=imgli;  

                 if(imgli!=" " && imgli!=undefined){

                     stepArr.push(li); 
                  }else{

                    return
                  }                  
                                   

            });

          var dess=$("#desc").val();
           console.log("数组长度"+stepArr.length);


          $.ajax({
            url:url+"/task/Task/submittask",
            dataType:"json",
            type:"post",
            data:{
               taskid:tid,
              step:stepArr,
              desc:dess
            },
            success:function(res){
                  
                console.log(res);
     
            }

          });




     })



});


function userInfo(){
  $.ajax({

    url:url+"/task/User/user",
    type:"post",
    dataType:"json",
    success:function(res){

         console.log(res);
         $("#usefull").html(res.result.user_money);
         $("#deposit").html(res.result.deposit);
         $("#username").html(res.result.nickname);
         $("#uid").html("ID:"+res.result.user_id);
         $("#headImg").attr("src",url+res.result.head_pic);


    }
 
 });

}

function taskInfo(){
  $.ajax({

    url:url+"/task/Task/taskinfo",
    type:"post",
    dataType:"json",
    data:{
      taskid:tid
    },
    success:function(res){

         console.log("renwu:");
         console.log(res);
        //  $("#usefull").html(res.result.user_money);
        //  $("#deposit").html(res.result.deposit);
        //  $("#username").html(res.result.nickname);
        //  $("#uid").html("ID:"+res.result.user_id);
        $("#taskId").html(res.result.taskinfo.id);
        $("#limit").html(res.result.taskinfo.limit_time);
        $("#headImg").attr("src",url+res.result.taskinfo.head_pic);


    }
 
 });

}







function isImg(str) 
{ 
    if(str.search("[.]+(jpg|jpeg|swf|gif|png|JPG|JPEG|SWF|GIF|PNG)$")) 
    { 
        return false;
    } 
    return true; 
}

function getUploadUrlSuffix(urlStr){
    var url = urlStr.substring(urlStr.lastIndexOf("\."),urlStr.length);
    return url;
}