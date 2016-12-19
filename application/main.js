$(document).ready(function(){
    projectColor();
    nlInput();
});

function projectColor(){
  var colors = ['#fffcb6', '#dcffb6', '#a6e3e9', '#faf3df'];
  var $projects = $('.project').not('.product');
  for(i = 0; i<$projects.length; i++ ){
      $projects.eq(i).css('background-color', colors[i]);
    }
  }

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
