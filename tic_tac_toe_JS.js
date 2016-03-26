var x = ""
var buttons = "";
var user = -1;
var computer = -1;
var max = 8;
var min = 0;
var c_pos = 0;
var u_pos = 0;
var usertry = "";
var count = 0;
var user_pattern = "";
var comp_pattern = "";
pattern = ["012", "345", "678", "036", "147", "248", "048", "246"];

$(document).ready(function() {
  
  $("#option").modal('show');
  $("#restart").click(function() {
$("#option").modal('show');    
  });
  $("#modal-button-X").click(function() {
  
    user = $(this).attr("value");
    computer = $("#modal-button-O").attr("value");
    
    game(user, computer);
      
  }); //modal click X
  $("#modal-button-O").click(function() {
    
    user = $(this).attr("value");
    computer = $("#modal-button-X").attr("value");
    game(user, computer);
    
  });// modal click O
  
  function game(user, computer) { 
    
    buttons = document.getElementById("tiles").children;
    compTry(buttons);
  } //end game
 
  
}); //end ready

function compTry(buttons) {
  c_pos = Math.floor(Math.random() * (max - min + 1)) + min;
    while($(buttons[c_pos]).attr("value") != "-1")
     {
       c_pos = Math.floor(Math.random() * (max - min + 1)) + min;
     }
  
  
  $(buttons[c_pos]).attr("value", computer);
  if(computer != -1)
    {
  $(buttons[c_pos]).text(computer);
    }
  count ++;
  comp_pattern += c_pos;
  
  if(count == 9)
    {
      evaluate(comp_pattern, computer, buttons);
  
      }
  if(comp_pattern.length >= 3)
    {
  
    evaluate(comp_pattern, computer, buttons);
      }
} //end user try

function gameplay(name, value) {
  
  if(value == "-1")
    {
    if(user != -1)
      {
      $(buttons[parseInt(name)]).text(user);
        }
      $(buttons[parseInt(name)]).attr("value", user);
      count ++;
      user_pattern += name;
  
      if(count == 9)
        {
        evaluate(user_pattern, user, buttons)
  
          }
      if(user_pattern.length >= 3)
        {
  
        evaluate(user_pattern, user, buttons);
          }
setTimeout(function() {
compTry(buttons);
},500);
 
  }
  }//end gameplay

function evaluate(funcPattern, player, buttons) {
  var temp = funcPattern.split('');
    temp.sort();
    funcPattern = temp.join('');
  
for(var i = 0; i < pattern.length; i ++)
  {
    
    if(funcPattern.indexOf(pattern[i]) !== -1)
        {
  
        $("#result_text").text(player+" Wins!");
          restart(buttons);
        }
  }
  x = funcPattern;
  x.replace('1','')
  x.replace('2','')
  x.replace('3','')
  x.replace('5','')
  x.replace('6','')
  x.replace('7','')
  if(x.indexOf(pattern[i]) !== -1)
        {
 
        $("#result_text").text(player+" Wins!");
          restart(buttons);
        }
  
  x = funcPattern;
  x.replace('0','')
  x.replace('1','')
  x.replace('3','')
  x.replace('5','')
  x.replace('7','')
  x.replace('8','')
  if(x.indexOf(pattern[i]) !== -1)
        {
 
        $("#result_text").text(player+" Wins!");
          restart(buttons);
        }
  
  if(count == 9)
    {
 
      $("#result_text").text("Drawn!");
      restart(buttons);
      }
} //end evaluate

function restart(buttons)
{
 
  for(var i = 0; i < buttons.length; i ++)
      {
        $(buttons[i]).attr("value", "-1");
        $(buttons[i]).text("");
      }
    buttons = "";
    user = -1;
    computer = -1;
    max = 8;
    min = 0;
    c_pos = 0;
    u_pos = 0;
    count = 0;
    user_pattern = "";
    comp_pattern = "";
 
  
  $("#result").modal('show');
 
}

