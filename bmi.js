const form = document.querySelector('form');

form.addEventListener('submit' , function(e) {
 e.preventDefault();
 const height = parseInt(document.querySelector('#Height').value);    
 const weight = parseInt(document.querySelector('#Weight').value);    
 const result = document.querySelector('.result');

 if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML= `please give a valid height ${height}`
 } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML= `please give a valid weight ${weight}`
 } else {
  const Bmi = (weight / ((height*height) / 10000)).toFixed(2);

  if(Bmi > 0 && Bmi < 18.6){
    result.innerHTML = `Underweight ${Bmi}`
  } else if(Bmi < 24.9 && Bmi > 18.6){
    result.innerHTML = `Normal ${Bmi}`
  }
  else {
    result.innerHTML = `Overweight ${Bmi}`
  }

 }
})