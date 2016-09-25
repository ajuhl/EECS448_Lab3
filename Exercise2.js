function Next(){
  var current = document.getElementById("photo");
  var source = current.src;
  var image=source.split('-');
  var num=parseInt(image[1]);
  if(num === 5){
    current.src = "-0-file.jpg";
  }
  else{
    current.src = "-"+(num+1)+"-file.jpg";
  }
}

function Back(){
  var current = document.getElementById("photo");
  var source = current.src;
  var image=source.split('-');
  var num=parseInt(image[1]);
  if(num === 0){
    current.src = "-5-file.jpg";
  }
  else{
    current.src = "-"+(num-1)+"-file.jpg";
  }
}
