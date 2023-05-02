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
            $(".item-row").append(
                "<figure class='col  d-flex justify-content-center  items-col product-item'>\
        <img src='"+item.imageURL+"' alt='Trulli' class='img-responsive '>\
           \
        </figure>"
            );
            $(".prod-desc").append(
                "<div >"+item.productName+"</div><div >"+item.price+"</div>"
            )
        }
    });

    $(".size-container").click((event)=>{
        const val = event.target.outerText;
        $(".selected-size").text(val);
    });

    $(".add-to-bag").click(()=>{
        let txt = $(".add-to-bag").text();
        if(txt === 'GO TO BAG'){
            localStorage.setItem('toBag',src);
            console.log(localStorage.getItem("toBag"));
            $(location).attr('href',"/cart.html?src="+src);
        }else{
            $(".add-to-bag").text('GO TO BAG');
        }
    });
});