window.onload = () => {
    const button = document.querySelector('#btn');
    button.addEventListener('click', calculateBMI)
}

function calculateBMI(){
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result');
    
    if(!height || height < 0 || isNaN(height) )
    {
        result.innerText = "Please provide a valid height"; 
        return;
    }
    else if(!weight || weight < 0 || isNaN(weight))
    {
        result.innerText = "Please provide a valid weight"; 
        return;
    }

     const bmi =  (weight / ((height * height) / 10000)) .toFixed(2);

     if(bmi < 18.5 )
     {
        result.innerText = 'Underweight : ' + bmi ;
     }
     else if(bmi >= 18.5 && bmi <= 25.0)
     {
        result.innerText = 'Normal weight : ' + bmi ;
     }
     else if(bmi > 25.0 && bmi < 30.0)
     {
        result.innerText = 'Overweight : ' + bmi ;
     }
     else if(bmi >30.0 && bmi <= 35)
     {
        result.innerText = 'Obese (Class I) : ' + bmi;
     }
     else if(bmi > 35.0 && bmi <= 40.0)
     {
        result.innerText = 'Obese (Class II) : ' + bmi;
     }
     else if(bmi >40.0) 
     {
        result.innerText = 'Obese (Class III) : ' +bmi; 
     }
  }