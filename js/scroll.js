// scroll listener
$(window).scroll(function() {
        var winScroll = $(this).scrollTop(),
            header = $('header div'),
            secHeight = $('#page1').height(),
            fontColor = $(".mainNav li a");
    // will fade out logo if start scrolling down
    $(".logo").css({
                    opacity : 1 - (winScroll / 1000)
                });
    // moves navigation to left
    $(".mainNav").css({
                    marginRight : 60 + (winScroll / 8)
                });
    
            if(winScroll > (secHeight - 30)) {
                $('#arr1').fadeOut(300);
                $('#arr2').fadeIn(500);
                header.css({
                    "border-bottom": "1px solid #fff",
                    "background-color": "#fff"
                });
                fontColor.css({
                    "color": "#000",
                    "textShadow" : "2px -1px #DDD"
                });
            }
            else {
                $('#arr2').fadeOut(400);
                $('#arr1').fadeIn(500);
                header.css({
                    "border-bottom": "none",
                    "backgroundColor": "transparent"
                });
                fontColor.css({
                    "color": "#fff",
                    "textShadow" : "2px -1px #6C5E5E"
                });
            }
});
