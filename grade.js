function abc() {
  var a = parseInt(document.getElementById('bookOne').value);
  var b = parseInt(document.getElementById('bookTwo').value);
  var c = parseInt(document.getElementById('bookThree').value);
  var d = parseInt(document.getElementById('bookFour').value);
  var e = parseInt(document.getElementById('bookFive').value);

  if (a > 100 || b > 100 || c > 100 || d > 100 || e > 100) {
      alert("Please enter a correct value");
  } else {
      var obtain = a + b + c + d + e;
      document.getElementById("Obtain").innerHTML = obtain;
      var per = obtain / 500 * 100;
      document.getElementById("per").innerHTML = per.toFixed(2) + "%";

      if (per >= 90) {
          document.getElementById("grade").innerHTML = "A";
      } else if (per >= 80) {
          document.getElementById("grade").innerHTML = "B";
      } else if (per >= 70) {
          document.getElementById("grade").innerHTML = "C";
      } else if (per >= 60) {
          document.getElementById("grade").innerHTML = "D";
      } else {
          document.getElementById("grade").innerHTML = "F";
      }

      if (a >= 40 && b >= 40 && c >= 40 && d >= 40 && e >= 40) {
          document.getElementById("remarks").innerHTML = "<span style='color:#292' >Pass</span>";
      } else {
          document.getElementById("remarks").innerHTML = "<span style='color:red'>Fail</span>";
      }
  }
}