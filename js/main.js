$(function(){
    // service tabs start
    $(".service-tabs").click(function(){
        if(! $(this).hasClass("active")){
            let tabId = $(this).data("toggle");
            $(".service-img").hide();
            $("#"+ tabId).fadeIn();
            $(".service-tabs").removeClass("active");
            $(this).addClass("active");
            console.log(tabId);
        }
    })
    // service tabs end

    // fav-room slider start
    $('.fav-room-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
    });
    // fav-room slider end

    // gellery slider start
    $('.gell-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
    });
    // gellery slider end
})