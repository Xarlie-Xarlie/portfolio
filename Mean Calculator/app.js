function calcular(nota1,nota2,nota3) {
  nota1 = parseFloat(nota1)
  nota2 = parseFloat(nota2)
  nota3 = parseFloat(nota3)
  var response = ((nota1+nota2+nota3)/3)
  if (response >=7 ){
    document.getElementById('responseNota').innerHTML = "Você foi aprovado com média: " + response.toFixed(2)
    document.getElementById('responseNota').className = 'aprovado'
  }
  
  else { document.getElementById('responseNota').innerHTML = "Você foi reprovado com média: " + response.toFixed(2)
    document.getElementById('responseNota').className = 'reprovado'
  }
}

function converter(unidade1, unidade2, temperatura) {
  if (!temperatura)
    temperatura = 0
  temperatura = parseFloat(temperatura);
  var tempInicial = parseFloat(temperatura);
  if (unidade1 == unidade2)
    document.getElementById('responseTemp').innerHTML = "Temperatura convertida: " + temperatura.toFixed(2) + " graus " + unidade2;
  
  
  else{
    if (unidade1 == 'celsius'){
      if (unidade2 == 'fahrenheit')
        temperatura = (temperatura * 1.8) + 32
      
      else
        temperatura += 273
    
    }else if(unidade1 == 'fahrenheit'){
      if (unidade2 == 'celsius')
        temperatura = (temperatura-32)/1.8
      
      else
        temperatura = (temperatura - 32)*(5/9) + 273
    
    }else if(unidade1 == 'kelvin'){
      if(unidade2 == 'celsius')
        temperatura -= 273
    
      else
        temperatura = (temperatura-273)/1.8 + 32
    }
    
  }
  document.getElementById('responseTemp').innerHTML = "Temperatura convertida de " + tempInicial.toFixed(2) + " graus " + unidade1 + " para " + temperatura.toFixed(2) + " graus " + unidade2;
    

}

