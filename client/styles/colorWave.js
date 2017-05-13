var intervalID = window.setInterval(colorWave, 20); // COMMENT/UN-COMMENT THIS LINE TO DISABLE/ENABLE COLORWAVE
var i = 1;
var j = 0;
var a = 1;
var b = 1;
var c = 1;
var switchy = 'positive';

function colorWave() {

  var newBackgroundColor = 'rgb(' + a + ',' + Math.floor(Math.abs(b-255)) + ',' + Math.floor(Math.abs(c)) + ')';
  var newTextColor = 'rgb(' + (a+127) + ',' + Math.floor(Math.abs(b-127)) + ',' + Math.floor(Math.abs(c+64)) + ')';
//  document.body.style.backgroundColor = newColor;  
  var elem = document.getElementById('tribelist');
  elem.style.backgroundColor = newBackgroundColor;
  elem.style.color = newTextColor;

  if (i >= 255) {
    switchy = 'negative';
  }
  if (i <= 0) {
    switchy = 'positive';
  }

  a = i;
  b = i*1.473;
  c = Math.cos(i * 0.05) * 255;

  if (switchy === 'negative') {
    i--;
  }
  if (switchy === 'positive') {
    i++;
  }
}