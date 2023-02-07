function insert(num)
{
   var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function limpar()
{
    document.getElementById('resultado').innerHTML = "";
}
function back()
{
   var apagar = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = apagar.substring(0, apagar.length -1);
}
function calcular()
{
 var resultado = document.getElementById('resultado').innerHTML;
 if(resultado)
 {
    document.getElementById('resultado').innerHTML = eval(resultado); 
 }
 else
 {
    document.getElementById('resultado').innerHTML = "Nada...";
 }
}