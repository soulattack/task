$(document).ready(function(){

     


     $("#bt").click(function(){

        console.log("11");
       
        tips("成功");
        window.location.href="http://www.baidu.com";

     })



});




function tips(txt){

   var tipStr="<div class='tipx'> <i></i><span>"+txt+"</span></div>";
  
      $("body").append(tipStr);
 
      setTimeout(function(){
        $(".tipx").hide()   
      },3000)
   

}