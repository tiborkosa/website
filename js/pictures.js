$(document).ready(function() {
            $("body").css("display", "none");
            $("body").fadeIn(2000);
            $("#travel").hide();
            
            var $naLink = $(".cat");
                  
            // var for 3 D
                  var trackX = 0;
                  var trackY = 0;
            // var for slide
                  var width = 460;
                  var animationSpeed = 1000;
                  var pause = 4000;
                  var currentSlide = 1;
                  var interval;
                  
                  var $slider = $('#slider');
                  var $slideContainer = $('.slides', $slider);
                  var $slides = $('.slidee', $slider);
                  
                  
                  $naLink.on('click', function(){
                        
                             if($(this).prop('id') === "sp")
                                    {
                                        $("#travel").hide();
                                        pauseSlider();
                                        $("#cube-section").show();
                             
                                    }
                                    else if($(this).prop('id') === "tr")
                                        {
                                            $("#cube-section").hide();
                                            $("#travel").show();
                                            startSlider();
                             
                                        }
                             
                             });
         
         // ----------->>>>>>>  3D cube   <<<<<-------------
                  $(document).on("click", "#o", function(){
                                 trackY -= 90;
                                 trackX -= 90;
                                 myRotationY(trackY);
                                 
                                 });
                  $(document).on("click", "#t", function(){
                                 trackX += 90;
                                 trackY += 90;
                                 myRotationX(trackX);
                                 
                                 });
                  $(document).on("click", "#th", function(){
                                 trackY += 90;
                                 trackX += 90;
                                 myRotationY(trackY);
                                 
                                 });
                  $(document).on("click", "#f", function(){
                                 trackX -= 90;
                                 trackY -= 90;
                                 myRotationX(trackX);
                                 
                                 });
      
//-----------      slider     -------------------------
                  function startSlider() {
                  interval = setInterval(function() {
                                         $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                                                                 if (++currentSlide === $slides.length) {
                                                                 currentSlide = 1
                                                                 $slideContainer.css('margin-left', 0);
                                                                 }
                                                                 });
                                         }, pause);
                  }
                  function pauseSlider() {
                  clearInterval(interval);
                  }
                  $slideContainer.on('mouseenter', pauseSlider);
                  $slideContainer.on('mouseleave', startSlider);
                  
});   // end of ready

// ----------->>>>>>>  3D cube   <<<<<-------------
//-------------------------------------------------

function myRotationX(trackX) {
    $('#cube').animate({  deg: trackX }, {
                       step: function(now,fx) {
                       $(this).css({'transform':'rotateX('+now+'deg)'});
                       },
                       duration:'slow'
                       },'linear');
}
function myRotationY(trackY) {
    $('#cube').animate({  deg: trackY }, {
                       step: function(now,fx) {
                       $(this).css({'transform':'rotateY('+now+'deg)'});
                       },
                       duration:'slow'
                       },'linear');
}






