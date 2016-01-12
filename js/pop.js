// center the popup image 
jQuery.fn.center = function () {
    
    this.css("position","absolute");
    this.css("top", ( $(window).height()/2 - this.height()/2 ) + "px");
    this.css("left", ( $(window).width()/2 - this.width()/2 )  + "px");
    return this;

}

// page3 image click 
$(".thumbnail img").click(function(e){
    
		$('html, body').animate({
        scrollTop: $("#page3").offset().top
    }, 500);
    
        $("#background").css({"opacity" : "0.7"})
                        .fadeIn("slow");
    
        $('body').css('overflow', 'hidden');
						
        $("#large").html("<p>The following future is under construction!</p><br/><img src='"+$(this).attr("src")+"' alt='"+$(this).attr("alt")+"' />").center().fadeIn("slow");			
			
        return false;
    
});
// ESC for overlay to disapear 	
$(document).keypress(function(e){
    if(e.keyCode==27){
        $("#background").fadeOut("slow");
        $("#large").fadeOut("slow");
        $('body').css('overflow', 'scroll');
    }
});
		
$("#background").click(function(){
    $("#background").fadeOut("slow");
    $("#large").fadeOut("slow");
    $('body').css('overflow', 'scroll');
});
		
$("#large").click(function(){
    $("#background").fadeOut("slow");
    $("#large").fadeOut("slow");
    $('body').css('overflow', 'scroll');
});

