$(document).ready(function(){
    
    function menuscroll(){
        let navmenu= $('.nav-menu');

        if($(window).scrollTop() > 50){
            navmenu.addClass("is-scrolling");
        }
        else{
            navmenu.removeClass("is-scrolling");
        }
    }

    menuscroll();
    $(window).on('scroll' , menuscroll);

    let sidenav= $('#navbarcollapse');
    sidenav.on('show.bs.collapse' , function(){
        $(this).parents('.nav-menu').addClass('menu-is-opend');
        // console.log($(this).parents('.nav-menu'));
        
    });

    sidenav.on('hide.bs.collapse' , function() {
        $(this).parents('.nav-menu').removeClass('menu-is-opend');
    });



    //////////////////////////////////////////////////////////////////////

                                // my codes

    //////////////////////////////////////////////////////////////////////
    $(window).on('resize',function(){

        if($( window ).width() > 992){
            let navmenu= $('.nav-menu');
            navmenu.removeClass('menu-is-opend');
            $('#navbarcollapse').removeClass('show');
        }
        
    });

    
    //////////////////////////////////////////////////////////////////////

                                // Comments Carousel

    //////////////////////////////////////////////////////////////////////

    $('.comments').owlCarousel({
        rtl:true,
        nav:true,
        items:1,
        dots : false,
        navText:['<span class="ti-arrow-left"></span>' ,'<span class="ti-arrow-right"></span>']
        
    });

    $('.img-gallery').owlCarousel({
        rtl:true,
        nav:false,
        items:3,
        center : true,        
        margin : 20,
        loop : true,

        responsive:{
            0 :{
                items:1,
            },

            768 :{
                items:3
            }
        },
    });

    //////////////////////////////////////////////////////////////////////

                            // Navbar Scroll

    //////////////////////////////////////////////////////////////////////

    $('#navbarcollapse a').on('click' , function(e) {
    let target = $(this.hash);
    if(target.length) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop : target.offset().top
        },1000);
    }
    });

    // $('#navbar .navbar-nav a').on('click' ,function(e){
    //     console.log("clicked");
        
    // })
});

