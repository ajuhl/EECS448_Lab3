function changeStyle(){
  var red_border = document.getElementById('red').value;
  var green_border = document.getElementById("green").value;
  var blue_border = document.getElementById("blue").value;
  var width_border = document.getElementById("width").value;
  var red_bg = document.getElementById("red1").value;
  var green_bg = document.getElementById("green1").value;
  var blue_bg = document.getElementById("blue1").value;



  document.getElementById("B").style.border = width_border+'px solid rgb('+red_border+','+green_border+','+blue_border+')';
  document.getElementById("B").style.backgroundColor = 'rgb('+red_bg+','+green_bg+','+blue_bg+')';
}
