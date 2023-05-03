import wBS from '../Data/womenB.js';

$(document).ready(()=>{

    wBS.map((item)=>{
        $(".items-row").append("<figure class='col-md-6 col-sm-12 col-lg-3 items-col product-item'>\
        <img src='"+item.imageURL+"' alt='Trulli' class='img-responsive '>\
            <figcaption>"+item.productName+"<br><span>"+item.price+"</span></figcaption>\
        </figure>");
    });
    
    $(".product-item").click((event)=>{
        const src = event.target.currentSrc;
        const recData = localStorage.getItem("womenData");
        const wdata = JSON.parse(recData);
        console.log(src)
        console.log(typeof(wdata));
        wdata.filter((item)=>{
            if(item.imageURL === src){
                return $(location).attr('href',"/product.html?src="+item.imageURL+"+?origin=woman");
            }
        });
        console.log(wdata)
        console.log(event)
    })
});