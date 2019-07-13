var century, year, month, date;

document.getElementById('theform').onsubmit = function generateName(){
  console.log(document.getElementById('theform').value);
  var date = document.getElementById('date').value;
  alert('Your date of birth is ' + date);
  var month = document.getElementById('month').value;
  alert('Your date of birth is ' + month);

  

}