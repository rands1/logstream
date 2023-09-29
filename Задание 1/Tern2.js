function manyChecks() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);

  //if else 
  if(a%2==0){
    frase = ' and a is even '
  }else{
    frase = ' and a is odd'
  }
  if(a>5){
    frase = 'and a is greater than 5' + frase
  }else{
    frase = 'and a is less than or equal to 5 ' + frase
  }
  if(a>10){
    if(a===15){
      frase = 'but a is not 15' + frase
    }
    console.log('a is bigger than 10' + frase)
  }else{
    if(a===5){
      frase = 'an example of a special case' + frase
    }else{
      frase = '' + frase
    }
    console.log('a is less than or equal to 10 '+frase)
  }

  // switch()
  switch(a){
    case 1:
    case 3:
        console.log('a is less than or equal to 10 and a is less than or equal to 5  and a is odd')
        break
    
    case 2:
    case 4:
        console.log('a is less than or equal to 10 and a is less than or equal to 5  and a is even ')
        break
  
    case 5:
        console.log('a is less than or equal to 10 an example of a special caseand a is less than or equal to 5  and a is odd')
        break
  
    case 6:
    case 8:
    case 10:
        console.log('a is less than or equal to 10 and a is greater than 5 and a is even ')
        break
  
    case 7:
    case 9:
        console.log('a is less than or equal to 10 and a is greater than 5 and a is odd')
        break
  
    case 11:
    case 13:
    case 17:
    case 19:
        console.log('a is bigger than 10and a is greater than 5 and a is odd')
        break
  
    case 15:
        console.log('a is bigger than 10but a is not 15and a is greater than 5 and a is odd')
        break
  
    case 12:
    case 14:
    case 16:
    case 18:
    case 20:   
        console.log('a is bigger than 10and a is greater than 5 and a is even ')
  }


  return (
    a > 10 ? 'a is bigger than 10' : 'a is less than or equal to 10 ' + (a === 5 ? 'an example of a special case' : '')) + (a === 15 ? 'but a is not 15' : '')+ (a > 5 ? 'and a is greater than 5' : 'and a is less than or equal to 5 ') + (a % 2 ? ' and a is odd' : ' and a is even ');

    
}

manyChecks();

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()