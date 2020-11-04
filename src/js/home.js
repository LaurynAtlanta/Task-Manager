$(document).ready(function(){ 
    $(window).scroll(function(){ 
        $('.two').css("opacity", 1+ $(window).scrollTop() * 700);
        $('.three').css("opacity", 1+ $(window).scrollTop() * 700);
    }) 
}) 