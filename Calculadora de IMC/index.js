
function calculate(){
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var text = document.getElementById("result")
    var result = (peso / (altura * altura));
    var finalresult = result.toFixed(1);

    if(finalresult <= 18.5){
        text.innerHTML = "THE RESULT IS: " + finalresult + "<br> You are underweight";
    }else if(finalresult >= 18.5 && finalresult <= 24.9){
        text.innerHTML = "THE RESULT IS: " + finalresult + "<br> Your weight is perfect!";
    }else if(finalresult >= 25 && finalresult <= 29.9){
        text.innerHTML = "THE RESULT IS: " + finalresult + "<br> Overweight";
}else{
    text.innerHTML = "THE RESULT IS: " + finalresult + "<br> Obesity: see a doctor";
  }
}