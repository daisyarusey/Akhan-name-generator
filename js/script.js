var century, year, month, date;

document.getElementById('theform').onsubmit = function generateName(){
  console.log(document.getElementById('theform').value);
  var date = document.getElementById('date').value;
  alert('Your date of birth is ' + date);
  var month = document.getElementById('month').value;
  alert('Your date of birth is ' + month);
  var yearOfBirth = document.getElementById('year').value;
  alert('Your date of birth is ' + yearOfBirth);

  var century = yearOfBirth.slice(0,2);
  var year = yearOfBirth.slice(2,4);

  var genders = document.getElementById("gender");
  var gender = genders.options[genders.selectedIndex].text;
  alert(gender);
  

}