$(document).ready(function() {
                  $("body").css("display", "none");
                  $("body").fadeIn(2000);
                  var prevVal = 0;
                  var radio;
                  var $javaContainer = $("#one.container");
                  var $phpContainer = $("#two.container");
                  var $sqlContainer = $("#three.container");
                  var $radios = $("input[type='radio']");
                  var $pradios = $("input[name='pRadio']");
                  var $jradios = $("input[name='jRadio']");
                  var $javaPics = $(".java");
                  var $phpPics = $(".ph");
                  var $sqlPics = $(".sq");
                  var linkLocation;
                  $(".arrow").click(function(event){
                                          event.preventDefault();
                                          linkLocation = "index.html#page3";
                                          $("body").fadeOut(1500, redirectPage);
                                          });
                  
                  function redirectPage() {
                  window.location = linkLocation;
                  }
                  
                  $("#java").click(function(){
                                   prevVal = 0;
                                   $radios.eq(prevVal).prop( "checked", true );
                                   $phpContainer.fadeOut(100);
                                   $sqlContainer.fadeOut(100);
                                   $javaContainer.fadeIn(500);
                                   radio = "radio1";
                                   });
                  $("#php").click(function(){
                                  prevVal = 0;
                                  $radios.eq(6).prop( "checked", true );
                                   $sqlContainer.fadeOut(100);
                                   $javaContainer.fadeOut(100);
                                   $phpContainer.fadeIn(500);
                                   radio = "radio2";
                                   });
                  $("#sql").click(function(){
                                  prevVal = 0;
                                  $radios.eq(13).prop( "checked", true );
                                   $phpContainer.fadeOut(100);
                                   $javaContainer.fadeOut(100);
                                   $sqlContainer.fadeIn(500);
                                   radio = "radio3";
                                   });
                  $radios.click(function(){
                                if(radio === "radio1" ){
                                    $javaPics.eq($(this).val()).show(500);
                                    $javaPics.eq(prevVal).hide();
                                    prevVal= $(this).val();
                                    }
                                    else if(radio === "radio2"){
                                        $phpPics.eq($(this).val()).show(500);
                                        $phpPics.eq(prevVal).hide();
                                        prevVal= $(this).val();
                                        }
                                        else if(radio === "radio3"){
                                            $sqlPics.eq($(this).val()).show(500);
                                            $sqlPics.eq(prevVal).hide();
                                            prevVal= $(this).val();
                                            }
                                            else {alert("something no good!");}
                                });
});
