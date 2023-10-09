var result = '';
var sum = 0;
function appendValue(value) {
    document.getElementById('display').value += value;
}

function search_number(txt,i){
    let txt_sum = ''
    console.log('Принял',txt,i,txt[i])
    calculate1:for(;i<result.length;i++){
        switch(txt[i]){
            case '*':
            case '/':
            case '-':
            case '+':
                break calculate1;
            default:
                txt_sum+=txt[i]
        }
    }
    return [Number(txt_sum),i]
    
}

function calculate() {
    result = document.getElementById('display').value;
    
    let i = 0
    let main_number = 0

    //console.log('2MAIN',search_number(result,arr1[1]+1))
    let arr1 = search_number(result,0)
    let second_number = arr1[0]
    i=arr1[1]

    let next_number = 0;
    
    
    try {
        while(i<result.length){
            console.log('Main',main_number,'\n Second',second_number,'\n Next ',arr1[0],'\n Operation',result[i])
            switch(result[i]){
                case '*':
                    arr1= search_number(result,i+1)
                    second_number *= arr1[0];
                    i=arr1[1];
                    break;
                case '/':
                    arr1= search_number(result,i+1)
                    second_number /= arr1[0];
                    i=arr1[1];
                    break;
                case '-':
                    main_number += second_number;
                    arr1= search_number(result,i+1)
                    second_number = -1*arr1[0]; 
                    i=arr1[1];
                    break;
                case '+':
                    main_number += second_number;
                    arr1= search_number(result,i+1)
                    second_number = arr1[0];
                    i=arr1[1];
                    break;
                default:
            }
        }
        sum = main_number+second_number;
        console.log(sum);
        document.getElementById('display').value = sum;
        addToHistory(result, String(sum));
    } catch (error) {
        alert('Ошибка')
    }
}

function clearResult() {
    document.getElementById('display').value = '';
}

function addToHistory(result, sum) {
    var history = document.querySelector('.history');
    var operation = document.createElement('p');
    operation.textContent = result + ' = ' + sum;
    history.appendChild(operation);
}