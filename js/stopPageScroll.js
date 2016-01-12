// function for each section (page) scroll
$.fn.followTo = function ( pos , t) {
                var $this = this,
                    $window = $(window);

                $window.scroll(function(e){
                    if (($window.scrollTop() + t) > pos) {  
                        
                        $this.css({
                            position: 'fixed',
                            top: t
                        });
                    } else {
                        $this.css({
                            position: 'absolute',
                            top: pos
                        });
                    }
                    });
                };

$('#page2').followTo(h, 40);
$('#page3').followTo(h*1.7, (h-$('#page3').height()+40));

