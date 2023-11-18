function init(){
  var button = document.getElementById('entrybutton');
  function textDisplay(){
    var textbox = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = textbox.value;
    alert("Sulaiman Kaleel: " + textbox.value);
	
  }
  button.addEventListener('click', textDisplay);  

  }
window.addEventListener('load', init);
