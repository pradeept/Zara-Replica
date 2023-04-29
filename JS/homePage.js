$(document).ready(function(){
    let scrollCounter=0;
    $(window).on('scroll', "#myVideo", function () {
        scrollCounter++;
        console.log("scrolled");
      });

    $("#myVideo").hover(()=>{
        console.log('hovered');
    })
})