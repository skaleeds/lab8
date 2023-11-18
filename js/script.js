function init(){
  var button = document.getElementById('entrybutton');
  function textDisplay(){
	  var textBox = document.getElementById('entryinput').value;
	  document.getElementById('textoutput').innerHTML = textBox;
	  var alertBox = 'Sulaiman Kaleel: ' + textIn;
	  alert(alertBox);
  }
	button.addEventListener('click', textDisplay);  

}

 

window.addEventListener('load', init);
