
    var flag=true; 


$(document).ready(function(){

    console.log("ready!!");

    var ch=$(".sc").height();
    var ah=$(".list").height();

   
   

    $(".sc").scroll(function(){
           var hs=$(".sc").scrollTop();
           console.log(hs+"---"+ch+"---"+ah);

         if(flag==true && hs+ch>=ah-56){
               
          setTimeout(function(){
              loadData()
         },1000)          
            
         flag=false;
        }

    })

});

function loadData() {
   
   //setTimeout()  
  
   
       $(".list").append("<li>new</li>");
       
       flag=true;
  

   
}





