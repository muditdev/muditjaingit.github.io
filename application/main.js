$(document).ready(function(){
    nlInput();
    blocksBg();
    // setting background over scroll
    $(window).scroll(blocksBg);
});



function nlInput(){
  $('.nl-input input').on('focus', function(){
    $(this).parent('.nl-input').addClass('active');
  });
  $('.nl-input input').on('blur', function(){
    if($(this).val() == ''){
      $(this).parent('.nl-input').removeClass('active');
    }
  });
}


//project product and service block background -------------------
function blocksBg() {
  // prevent to run if element not exist
  if($('[data-bgcolor]').length){
    var topScroll = $(window).scrollTop();
    var topOffset = $('[data-bgcolor]').parent().offset().top;
    var offsetTolr = $(window).innerHeight()/2;
      // running each function on project product and service block
      console.log(offsetTolr);
      $('[data-bgcolor]').each(function(i){
        var $block = $(this);
        var bgColor = $(this).data('bgcolor');

        if(topScroll > topOffset - offsetTolr ){
          setTimeout(function(){
            $block.css({
              'background-color': bgColor,
              'opacity' : 1
            });
          }, i*400);
        }//if statement ends
      });//each event ends
  }
}//blocksBg function ends
