
$(document).ready(function(){

  // console.log(getServerDate());

//console.log(new Date())

//var o={0:{id:"dadad"},1:{id:6},2:{id:4},3:{id:2}};
//console.log(o[0]);

 console.log(getQueryVariable("id"));

})



function getServerDate(){
    return new Date($.ajax({
      //  url:"http://www.task.com//task/Task/tasklist",
        async: false
    
    }).getResponseHeader("Date"));
  }
  
  

  function getQueryVariable(variable){
       var query = window.location.search.substring(1);
       console.log(window.location);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}