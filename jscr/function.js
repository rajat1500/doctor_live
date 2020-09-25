function myFunction() {
  var checkBox = document.getElementById("exampleCheck1");
  var text = document.getElementById("otpholder");
  var divforotp = document.getElementById("otpcheck")

  var pwd = document.getElementById("pwdholder");
  var pwdc = document.getElementById("pwdcheck");
  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.style.display = "block";
    checkBox.style.display = "none";
    divforotp.style.display = "none";

    pwd.style.display = "none"
    pwdc.style.display = "block"
    checkBox.checked = false
  } else {
    text.style.display = "none";
  }
}

function myFunction2() {
  var checkBox = document.getElementById("exampleCheck1");
  var checkbox2 = document.getElementById("exampleCheck2");
  var text = document.getElementById("otpholder");
  var divforotp = document.getElementById("otpcheck");
  var passholder = document.getElementById("pwdholder");
  var pwdc = document.getElementById("pwdcheck");
  if (checkbox2.checked == true) {
    text.style.display = "none";
    pwdc.style.display = "none";
    passholder.style.display = "block";
    divforotp.style.display = "block";
    checkBox.style.display = "block";
    checkbox2.checked =false
  }
}





function addmember(){
  var boxotp=document.getElementById("otpbox");
  var button=document.getElementById("verify");
  var v2=document.getElementById("verify2");
  if(boxotp.style.display == "none"){
    boxotp.style.display = "block";
    button.style.display = "none";
    v2.style.display = "inline";
  }
  else{
    button.style.display = "block";
  }
}


function addmember2(){
  var boxotp=document.getElementById("otpbox");
  var button=document.getElementById("verify");
  var v2=document.getElementById("verify2");
  if (v2.style.display == "inline"){
    v2.style.display = "none";
    button.style.display = "inline";
    boxotp.style.display = "none";
  }
}
