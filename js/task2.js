let btn2El = document.getElementById('task2');

btn2El.addEventListener('click', function (){
    alert(getSymbol());
})

function getSymbol(){

    let userInput, number;
    do {
        userInput = prompt('Введите цифру на клавиатуре (от 0 до 9): ');
        number = parseInt(userInput);
        if(number > 9 || number < 0){
            number = null;
        }
        if (number === 0){
            break;
        }
    } while (!number);

    let  symbolsArr = [')','!','@','#','$','%','^','&','*','('];
    return symbolsArr[number];
}
