function tocheck() {
    const firstName = document.getElementById("firstname").value;
    const emailInput = document.getElementById("email").value;
    const passWord = document.getElementById("passWord1").value;
    const passWord2 = document.getElementById("password2").value;

 //error message for length
    if (passWord === "" || passWord.length < 6) {
      document.getElementById("passWord").innerHTML = "Password must be at least 6 characters";

      document.getElementById("passWord1").style.borderColor = "red";
    }
    else {

      document.getElementById("passWord1").style.borderColor = "green";
      document.getElementById("passWord").innerHTML = "";
    }

    //error message for passoword match
    if (passWord !== passWord2 || passWord2 === "" || passWord2.length < 6) {
      document.getElementById("passWord2").innerHTML = "Passwords do not match";

      document.getElementById("passWord1").style.borderColor = "red";
      document.getElementById("password2").style.borderColor = "red";
    }
    else {

      document.getElementById("password2").style.borderColor = "green";
      document.getElementById("passWord2").innerHTML = "";
    }

    //error message for firstName
    if (firstName === "") {
      document.getElementById("firstName").innerHTML = "Please enter a valid name";
      document.getElementById("firstname").style.borderColor = "red";
    }
    else {
      document.getElementById("firstname").style.borderColor = "green";
      document.getElementById("firstName").innerHTML = "";
    }

    //error message for email
    if (emailInput === "") {
      document.getElementById("emailInput").innerHTML = "Please enter a valid email";
      document.getElementById("email").style.borderColor = "red";
    }
    else {
      document.getElementById("email").style.borderColor = "green";
      document.getElementById("emailInput").innerHTML = "";
    }
  }
