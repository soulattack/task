$(document).ready(function(){





  $("#bt").click(function(){

           // var formdata=new FormData($("#uploadImg"));
            var formdata=new FormData();
        
    　　　　formdata.append('file',$("#uploadImg").get(0).files[0]);

          //  console.log(formdata);


          　　$.ajax({
    　　　
            url:"http://www.task.com/task/upload",　　　　
          
          data: formdata,
          　　　　type: "POST",
          　　　　async: false,
          　　　　cache: false,
          　　　　contentType: false,
          　　　　processData: false,
          　　　　success: function(data) {
          　          console.log("ok");
                      console.log(data);
          　　　　},
          　　　　error: function(data) {
          　　　
          　　　　}
          　　});

  })


});


function upload(){


/*


    var formdata=new FormData($("#uploadImg"));
    　　　　formdata.append('formFile',$("#uploadImg").get(0).files[0]);


    　　$.ajax({
    　　　
      url:"http://www.shops.com/task/upload",　　　　
    
    data: formdata,
    　　　　type: "POST",
    　　　　async: false,
    　　　　cache: false,
    　　　　contentType: false,
    　　　　processData: false,
    　　　　success: function(data) {
    　
                console.log(data);
    　　　　},
    　　　　error: function(data) {
    　　　
    　　　　}
    　　});


*/   


  }
