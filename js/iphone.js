  $(document).ready(function(){
    $("#a-cacher").toggle(false);
    $("#iPhone").css("height","60vh");
    $("#button_iPhone").click(function() { 
        $("#a-cacher").toggle("slow");

        if($("#a-cacher").toggle(true)){
        	$("#iPhone").css("height","100vh");
        }
        else{
        	$("#iPhone").css("height","60vh");
        }
      });
  });