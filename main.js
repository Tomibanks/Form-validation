 function tocheck() {
  var fn = document.getElementById("firstname").value;
  var ln = document.getElementById("lastname").value;
  var em = document.getElementById("email").value;
  var p1 = document.getElementById("password1").value;
  var p2 = document.getElementById("password2").value;

//error message for length
  if (p1 === "" || p1.length < 6) {
   document.getElementById("p1").innerHTML = "Password must be at least 6 characters";
   document.getElementById("password1").style.borderColor = "red";
  }
  else {
   document.getElementById("password1").style.borderColor = "green";
   document.getElementById("p1").innerHTML = "";
  }

  //error message for password match
  if (p1 !== p2 || p2 === "") {
   document.getElementById("p2").innerHTML = "Passwords do not match";
   document.getElementById("password1").style.borderColor = "red";
   document.getElementById("password2").style.borderColor = "red";
  }
  else {
   document.getElementById("password2").style.borderColor = "green";
   document.getElementById("p2").innerHTML = "";
  }

  //error message for first name
  if (fn === "") {
   document.getElementById("fn").innerHTML = "Please enter a valid name";
   document.getElementById("firstname").style.borderColor = "red";
  }
  else {
   document.getElementById("firstname").style.borderColor = "green";
   document.getElementById("fn").innerHTML = "";
  }

  //error message for last name
  if (ln === "") {
   document.getElementById("ln").innerHTML = "Please enter a valid name";
   document.getElementById("lastname").style.borderColor = "red";
  }
  else {
   document.getElementById("lastname").style.borderColor = "green";
   document.getElementById("ln").innerHTML = "";
  }

  //error message for email
  if (em === "") {
   document.getElementById("em").innerHTML = "Please enter a valid email";
   document.getElementById("em").style.borderColor = "red";
  }
  else {
   document.getElementById("email").style.borderColor = "green";
   document.getElementById("em").innerHTML = "";
  }
 }