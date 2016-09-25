function checkPass(){
  var passOne = document.getElementById('fpwd').value;
  var passTwo = document.getElementById('spwd').value;
  var same = "Passwords are the same.";
  var dif = "";
  if(passOne.length !== passTwo.length){
    same = "Passwords are different lengths.";
    alert(same);
  }
  else if(passOne.length < 8){
    same = "Password needs at least "+(8-passOne.length)+" more characters to satisfy the minimum of 8.";
    alert(same);
  }
  else{
    for(var i=0; i<passOne.length; i++){
      if(passOne.charAt(i)!==passTwo.charAt(i)){
        dif = dif+": "+(i+1);
        same = "Passwords are different at character "+dif+".";
      }
    }
    alert(same);
  }
}
