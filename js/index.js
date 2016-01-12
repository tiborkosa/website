// JavaScript Document
'use strict'
//paste this code under head tag or in a seperate js file.
	// Wait for window load
$(window).load(function() {
    
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");
});

// adjusting the position of page4, because page3 height is auto
$(document).ready(function(){

    
});

var h = $('#page1').height();
var page3Height = $('#page3').height();
$('#page4').css(
        "top" , (h*1.7 + page3Height -40)
    );
console.log('page1 height: '+h);
console.log('height of page 3: ' + $('#page3').height());
console.log('diff bitween h and pg3 : '+ (h-$('#page3').height()-40));

var pageTopPos = [0, (h - 20), (h * 1.7 -40), (h * 1.6 + page3Height)];
// scroll function
$("ul li a").click(function(){
                        
                    if(this.hash) {
                        var hash = this.hash.substr(1),
                            $toElement = $("section[id="+hash+"]");
                        try {
                        var num = parseInt(hash.substr(4));
                        }
                        catch (e) {
                            alert("Sorry. Something not working");
                        }
                        var toPosition = pageTopPos[num - 1];
                        
                        $toElement.scrollPageTo(toPosition);
                        return false;
                        }
                    });

$.fn.scrollPageTo = function (pos) {
    
    $('body, html').animate({
        scrollTop : pos
        },800);
    
};

// arrow click to top
$("#arr1").click(function(){
    $(window).scrollPageTo(pageTopPos[1]);
});
$("#arr2").click(function(){
    $(window).scrollPageTo(0);
});





