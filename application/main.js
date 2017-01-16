$(document).ready(function(){
    nlInput();
    blocksBg();
    // setting background over scroll
    $(window).scroll(blocksBg);
    mobileNav();
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


function mobileNav(){
  $(".trigger").click(function() {
    if(!$('body').hasClass("mmOpen")){
      $(".trigger").addClass("cross");
      $('body').addClass("mmOpen");
      navEleEffect();
      setTimeout(function(){
        $('.mn-header .logo').addClass('show');
        $('.mn-header .logo').addClass('animated zoomIn');
      }, 1000);
    }
    else {
      clearAni();
      setTimeout(function(){
        $('.mn-header .logo').removeClass('show');
        $('.mn-header .logo').removeClass('animated zoomIn');
      }, 1000);
      $(".trigger").removeClass("cross");
      $('body').removeClass("mmOpen");
    }
  });

  function navEleEffect(){
    var b = 0;
    $('.mn-nav').find('li a').each(function(i){
      b = (i == 5) ? 0 : 255 - 33*i;
      var getBg = $('.mn-header').css('background-color');
      var bgArr = getBg.split("rgb")[1].replace("(", "").replace(")", "").split(',');
      var bgC = 'rgb('+bgArr[0]+','+bgArr[1]+','+b+')';
      // console.log(bgC);
      setTimeout(function() {
        // console.log($(this));
        $('.mn-nav').find('li').eq(i).find('a').addClass('show');
        $('.mn-nav').find('li').eq(i).find('a').addClass('animated bounceInDown')
        $('.mn-nav').find('li').eq(i).find('a').css('background-color', bgC);
      }, i*200)
    });
  }

  function clearAni(){
    setTimeout(function(){
      $('.mn-nav li a').removeClass('show');
      $('.mn-nav').find('li a').removeClass('animated bounceInDown')
      $('.mn-nav').find('li a').css('background-color', '');
    }, 1000)

  }
}
