// Function to get url parameter
$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#+]*)').exec(window.location.href);
    if (results==null) {
       return null;
    }
    return decodeURI(results[1]) || 0;
}

$(document).ready(()=>{
    const src = $.urlParam("src");
    const origin = $.urlParam("origin");
    console.log(src);
    let recData = "";
    if(origin === "manB"){
        recData =  localStorage.getItem("manB");
    }else if(origin === "manS"){
        recData = localStorage.getItem("manS");
    }else if(origin === "womanB"){
        recData = localStorage.getItem("womanB");
    }else if(origin === "womanS"){
        recData = localStorage.getItem("womanS");
    }else if(origin === "kidB"){
        recData = localStorage.getItem("boyData");
    }else if(origin === "kidG"){
        recData = localStorage.getItem("girlData");
    }else{
        $(".container").append("<h1 style='text-align:center;'>Cart is Empty :(</h1>");
        $(".container").append();
        $(".buy-btn").css("display","none");
        return
    }
    // recData = localStorage.getItem(origin);
    const wdata = JSON.parse(recData);
    wdata.filter((item)=>{
        if(item.imageURL == src){
            $(".show-product").append(" <img src='"+item.imageURL+"' alt='Trulli' class='img-responsive '>");
            $(".show-total-container").append(
                "<div class='show-total'>"+item.productName+"</div><div >"+item.price+"<br>Grand Total: "+item.price+"</div> <span>(Inc of all taxes)</span>"
            );
        }
    });

    $(".buy-btn").click(()=>{
        alert('Purchase Success!.\n\nProduct will be Delivered to your address.\nThank you.');
        $(location).attr("href","/Collections/"+origin+".html")
    })

});