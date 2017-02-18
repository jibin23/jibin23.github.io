$(function(){
    
    "use strict";
    
    var topoffset = 180; // variable for menu height
    
    //Activate Scrollspy
    $('body').scrollspy({
        target: '#main-nav',
        offset: topoffset
    })
    
    
    // Direct linking fix
        var hash = $(this).find('li.active a').attr('href');
        
        if(hash !== '#home'){
            $('header nav').addClass('inbody');
        } else{
            $('header nav').removeClass('inbody');
        }
   
    //Add inbody class to nav when scrollspyevent fires
    $('.navbar-fixed-top').on('activate.bs.scrollspy', function(){
        
        var hash = $(this).find('li.active a').attr('href');
        
        if(hash !== '#home'){
            $('header nav').addClass('inbody');
        } else{
            $('header nav').removeClass('inbody');
        }
        
    });
    
    //Collapsing Toggle Nav on link click
    $(".navbar-nav li a").click(function(event) {
        if (!$(this).parent().hasClass('dropdown'))
            $(".navbar-collapse").collapse('hide');
    });

    
       
    //Smooth Scroll
    $('a[href*="#"]:not([href="#"]):not([data-toggle])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname)
        { 
            var target = $(this.hash); 
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']'); 
            if (target.length) {
                $('html, body').animate({ scrollTop: target.offset().top }, 1000); 
                return false; 
            }
        }
    });
    
    //Carousel - Indicators
    var slideqty = $('#featured .item').length;
    
    //Automatically generate indicators
    for (var i=0; i < slideqty; i++){
        var insertText = '<li data-target="#featured" data-slide-to="' + i + '"></li>';
        $('#featured ol').append(insertText);
    }
    
    $('.carousel').carousel({
        interval: 2000
    });
    
    // Home height adjustments
    $(window).resize(function(){
       var wheight = $(window).height(); // getting the height of the window
        $('#home').css('height', wheight);
    });
    
    // Map 
//                      function initMap() {
//                        var uluru = {lat: 28.5906768, lng: 77.23100599999998};
//                        var map = new google.maps.Map(document.getElementById('map'), {
//                          zoom: 15,
//                          center: uluru
//                        });
//                        var marker = new google.maps.Marker({
//                          position: uluru,
//                          map: map,
//                        title:"Priyadarshani 2017"
//                        });
//
//                      }
   
    // Schedule
    $('#myTabs a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })

});
