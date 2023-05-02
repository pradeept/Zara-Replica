// Function to get url parameter
$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null) {
       return null;
    }
    return decodeURI(results[1]) || 0;
}

$(document).ready(()=>{
    const src = $.urlParam("src");
    console.log(src);
    const recData = localStorage.getItem("womenData");
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
        $(location).attr("href","/Collections/WbestSeller.html")
    })

});