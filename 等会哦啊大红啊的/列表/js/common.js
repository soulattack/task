$(document).ready(function(){

   $(".tabs li").click(function(){
     var index=$(this).index();
     $(this).addClass("curr").siblings().removeClass("curr");

     $(".contW>div").eq(index).show().siblings().hide();

   })

  // console.log(getServerDate())

});



