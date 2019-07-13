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
  
  var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleName = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];
  var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Sunday"];
  var dayOfBirth = parseInt(((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10))) % 7;

}