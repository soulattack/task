$(document).ready(function(){

     console.log(" recharge Ready");

    

     $(".btnRech").click(function(){

        console.log("我要充值");
        var sel=$("input.rd[type=radio]:checked").val();
        console.log(sel);

     })


      
})