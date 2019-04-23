function calculateTip() {
  var totalBill = document.getElementById("totalbill").value;
  var qualityOfServe = document.getElementById("quality").value;
  var billShare = document.getElementById("share").value;
  
//validate Bill Total and Service Quality
  if (totalBill === "" || qualityOfServe == 0) {
    alert("Please enter values");
    return;
  }
//Check to see if this input is empty or less than or equal to 1
  if (billShare === "" || billShare <= 1) {
    billShare = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Calculate tip
  var total = (totalBill * qualityOfServe) / billShare;
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  //Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() {
  calculateTip();

};