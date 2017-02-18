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
      function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
    
   
    // Schedule
    $('#myTabs a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })

});