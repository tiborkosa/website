$(document).ready(function() {
                  $("body").css("display" , "none");
                  $("body").fadeIn(2000);
                  var linkLocation;

                        // smooth transition to home page
                  $("#back").click(function(event){
                                   event.preventDefault();
                                   linkLocation = "index.html#page3";
                                   $("body").fadeOut(2000, redirectPage);
                                   });


                  function redirectPage() {
                  window.location = linkLocation;
                  }

                  $(".fish").hide().delay(2000).fadeIn(2000);


                  });