// let firstcard = 10
// let secondcard = 11
// let sum = firstcard + secondcard
// let hasblackjack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById('message-el')
// let sumEl = document.getElementById('sum-el')
// let cardsEl = document.getElementById('cards-el')
// function startGame() {


// cardsEl.textContent = "cards:" + firstcard + "" + secondcard
// sumEl.textContent = 'sum:' + sum

// if(sum<=20){
//     message = "do you want to draw a new card?😀 "
// }
// else if(sum==21){
//     message='you win the Black Jack match 🤩'
//     hasblackjack = true
// }
// else{
//     message = "you out of the Black Jack match 😥"
//     isAlive = false
// }
// messageEl.textContent = mess:disappointed:age  
// }:rofl:

let sum = 0;
let x = [];
let n = 200;
let j =1;
function start()
{
    sum = 0;
    x = [];
    j =1;
    document.getElementById('add').onclick = add;
    document.getElementById('start').onclick ='';
    for(var i=0; i<j; i++)
    {
        x.push(Math.floor(Math.random() * 11) + 1);
        document.getElementById('cards').innerHTML = x;
        sum = sum+x[i];
    };
    document.getElementById('sum').innerHTML = sum;
}
function add()
{
    sum = sum;
    x = x;
    n = n;
    j =j;
    x.push(Math.floor(Math.random() * 11) + 1);
    document.getElementById('cards').innerHTML = x;
    sum = sum+x[j];
    document.getElementById('sum').innerHTML = sum;
    j = j+1;
    if(sum == 21)
    {
        document.getElementById('add').onclick = '';
        n = n+100;
        document.getElementById('money').innerHTML = n;
        document.getElementById('win').innerHTML = 'congo,You win the Game 🥳';
        document.getElementById('start').onclick = start;
        
        
    }
    else if(sum > 21)
    {
        document.getElementById('add').onclick = '';
        document.getElementById('win').innerHTML = 'better luck next time 🥺';
        n = n-10;
        document.getElementById('money').innerHTML = n;
        document.getElementById('start').onclick = start;
        
    }
}








