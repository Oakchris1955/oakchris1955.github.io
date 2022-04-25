  function add() {

  var num1 = document.getElementById("1st").value;

  var num2 = document.getElementById("2nd").value;

  var a = document.getElementById("+").checked;

  var b = document.getElementById("-").checked;

  var c = document.getElementById("*").checked;

  var d = document.getElementById(":").checked;

  var e = true;

  var x;

  if (a == e) {

   x = Number(num1) + Number(num2);

  } else if (b == e) {

   x = Number(num1) - Number(num2);

  } else if (c == e) {

   x = Number(num1) * Number(num2);

  } else if (d == e) {

   x = Number(num1) / Number(num2);

  } else {

   x = "Unknown value";

  }

  document.getElementById("result").value = x;

  }

   

  function rename() {

  var a = document.getElementById("+").checked;

  var b = document.getElementById("-").checked;

  var c = document.getElementById("*").checked;

  var d = document.getElementById(":").checked;

  var e = true;

  var x;

  if (a == e) {

   x = "Addition";

  } else if (b == e) {

   x = "Subtraction";

  } else if (c == e) {

   x = "Multiplication";

  } else if (d == e) {

   x = "Division";

  } else {

   x = "Unknown value";

  }

  document.getElementById("calculate_button").innerHTML = x;

  }



  function copy(a) {

  var copyText;

   if (a == 1) {

    document.getElementById("result").disabled = false;

    copyText = document.getElementById("result");

   } else {

    copyText = document.getElementById("notes");

   }

    copyText.select();

    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    document.execCommand("copy");

    document.getElementById("result").disabled = true;

    alert("Copied the notes with text: " + copyText.value);

  }