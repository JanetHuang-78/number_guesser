const number = document.querySelector('.number')
const btn = document.querySelector('.btn')
const game = document.querySelector('.game')

let min_num = 1,
    max_num = 10,
    winning_num = getRandomNumber(),
    gameCount = 3;


game.addEventListener('mousedown',function(e){
    if (e.target.classList.contains('play_again')){
        window.location.reload();
    }
    
})

btn.addEventListener('click', checkNum)


function checkNum(e){    
    if (number.value === '' || number.value > max_num || number.value < min_num){
        showError(`Please enter the number between ${min_num} and ${max_num}`, 'red')
    } 
    else{

        if (parseInt(number.value) === winning_num){
            showError(`${winning_num} is corrent`, 'green')
            number.style.borderColor = 'green';
            number.disabled = true;
            btn.value = 'Play Again';
            btn.classList.add('play_again')
            // document.querySelector('.btn').value = 'Play Again';
            // document.querySelector('.btn').classList.add('play_again');
        }
        else{
            gameCount -=1;
            
            if(gameCount ===0){
                number.disabled = true;
                btn.value = 'Play Again';
                btn.classList.add('play_again')
                showError(`You lost, ${winning_num} is the number`, 'red');
                
            }
            else{
                
                number.value = '';
                showError(`try again, you have ${gameCount} guesses left`, 'green')
            }
        }

    }

    


    e.preventDefault()
}

function showError(error,color){
    const newError = document.createTextNode(error);
    const output = document.querySelector('.content p:last-child');
    output.style.color = color;
    output.style.fontSize = '12px';
    output.textContent = '';
    output.appendChild(newError);
    
    // setTimeout(function(){output.textContent = ''}, 3000);
    
}
function getRandomNumber(){
    return (Math.floor(Math.random()*10));
}