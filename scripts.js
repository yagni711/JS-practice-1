function changeINR() {
	var a = document.getElementById('usd').value;
	var b=82;
	document.getElementById('INRvalue').innerHTML=a*b;
}
function changeUSD() {
	var a = document.getElementById('inr').value;
	var b=82;
	document.getElementById('USDvalue').innerHTML=a/b;
}
function multiplication() {
	var a = document.getElementById('value1').value;
  var b = document.getElementById('value2').value;
	document.getElementById('multiplicationValue').innerHTML=a*b;

}
function addition() {
  var a = Number(document.getElementById('value1').value); 
  var b = Number(document.getElementById('value2').value);
	document.getElementById('additionValue').innerHTML=a+b;
}
function changeImg() {
	document.getElementById('image').src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPiBzoCwB93vV6xoi5sLio8DeeN7kjsXAxdQ&usqp=CAU';
  document.getElementById('image').style.border='2px solid orange';
  document.getElementById('image').style.padding='10px';
}
function changeusaImg() {
	document.getElementById('image').src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo4Qw5iEQvcx-nO-Okmh8KvInvaMtYy68Kvg&usqp=CAU';
  document.getElementById('image').style.border='2px solid red';
  document.getElementById('image').style.padding='10px';
}