$(document).ready(function(){
    let slideCounter = 1;

    var videoID = 'myVideo';
    var sourceID = 'mp4video';
    var newmp4 = "Videos/women's makeup.mp4";
    let gender = $(".gender");

    function handleCounterChange(){
        if(slideCounter >=5){
            $(".arrow-down").attr("disabled","true");
        }else if(slideCounter <=0){
            $(".arrow-down").attr("disabled","true");
        }else{
            $(".arrow-down").removeAttr("disabled");
            $(".arrow-up").removeAttr("disabled");
        }

        switch(slideCounter){
            
            case 1:gender.text("Woman");
                $("nav, .nav-white").css("color","black");
            break;
            case 2:gender.text("Woman");
                $("nav, .nav-white").css("color","white");
            break;
            case 3:gender.text("Man");
                $("nav, .nav-white").css("color","black");
            break;
            case 4:gender.text("Kids");
            break;
            case 5:gender.text("Beauty");
            break;
        }
    }
   
    $('.arrow-down').click(function(event) {
        
        slideCounter++;
        console.log(slideCounter)
        
        $(".slider-list li:nth-child("+(slideCounter-1)+")").fadeOut(500,"linear",()=>{
            $(".slider-list li:nth-child("+(slideCounter-1)+")").css({"visibility":"hidden","display":"none","opacity":0});
            $(".slider-list li:nth-child("+slideCounter+")").css({"visibility":"visible","display":"block","opacity":0}).animate({"opacity":1},500);
        });
        
        slideCounter >=5?$(".arrow-down").attr("disabled","true"):null;
        handleCounterChange()
        
    });

    $('.arrow-up').click(function(event) {
        if(slideCounter <= 1){
            $(".arrow-up").attr("disabled","true");
            return
        }
       
        slideCounter--;
        console.log("--"+slideCounter)

        $(".slider-list li:nth-child("+(slideCounter+1)+")").fadeOut(500,"linear",()=>{
            $(".slider-list li:nth-child("+(slideCounter+1)+")").css({"visibility":"hidden","display":"none","opacity":0})
            $(".slider-list li:nth-child("+(slideCounter)+")").css({"visibility":"visible","display":"block","opacity":0}).animate({"opacity":1},500);
        });
        handleCounterChange()
    });
});