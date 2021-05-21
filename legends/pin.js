// Disable checkboxes
$('input').click(function(){
  return false;
});

var pass = '1593',
    temp = '',
    pressed = 0,
    press_max = 4;

$('.button-num').click(function(){
  
  pressed++;
  
  if(pressed <= press_max){
    $($('input')[pressed-1]).prop('checked', true);
    temp += $(this).attr("id").split('-')[1];
  }
  
});
var timer,
    timerduration = 300,
    shake = 10;

$('#button-e').click(function(){
  
  if(pass == temp){
    
    pressed = 0;
    temp = '';
    $('input').prop('checked', false);
    
    clearTimeout(timer);
    timer = setTimeout(function(){
      $('#complete').transition({ rotateY : 180, duration: timerduration });
      $('#numpad').transition({ rotateY : 0, duration: timerduration });
    }, timerduration*10)
    
    $('#complete').transition({ rotateY : 0, duration: timerduration });
    $('#numpad').transition({ rotateY : 180, duration: timerduration });
      $('#notice').html("Enter passcode to Begin");
    
    pressed = 0;
    temp = '';
    $('input').prop('checked', false);
    
  } else {
    
    $('#numpad')
      .transition({ x: shake, duration: timerduration/5 })
      .transition({ x: -shake, duration: timerduration/5 })
      .transition({ x: shake, duration: timerduration/5 })
      .transition({ x: -shake, duration: timerduration/5 })
      .transition({ x: 0, duration: timerduration/5 });
    
      clearTimeout(timer);
      $('#notice').html("Wrong Passcode!");
    
      timer = setTimeout(function(){
        pressed = 0;
        temp = '';
        $('input').prop('checked', false);
      }, timerduration);
    
  }
});

$('#button-c').click(function(){
  
  if(pressed > 0){
    $($('input')[pressed-1]).prop('checked', false);
    pressed--;
    temp = temp.slice(0,pressed);
  }
  
});