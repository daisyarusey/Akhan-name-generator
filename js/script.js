var century, year, month, date;

document.getElementById('theform').onsubmit = function generateName(){
  console.log(document.getElementById('theform').value);
  var dob = document.getElementById('dob').value;
  alert('Your date of birth is ' + dob);
  
}