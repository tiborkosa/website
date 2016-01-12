// my scroller for the paragraphs
$.fn.myParScroller = function (c) {
    
    var $artHeight = $('#text_box article').height() / 4.5;
    this.animate({
        marginTop : - ($artHeight * c) +'px'
    }, 500);
    
};

var count = 1;
var arr = ['about me', 'about education', 'about future','about this', 'start over'];

// bind mOver, mLeave and click to button
$("#moreText").bind ({
        mouseover: function(){
            $('#moreText').text(arr[count -1]);
        },
        mouseleave: function(){
            $('#moreText').text('Read more');
        },
        click: function() {
    
            if(count > 4) {
                count = 0;
                $('#text_box article').myParScroller(count);
                }
            else {
                $('#text_box article').myParScroller(count);
            }
            count++;
        }
});