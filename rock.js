var myScore=0;
let drawScore=0;
let botScore=0;
let botMoves;
let myMoves;
var userName;
  const moves ={
    rock: 1,
paper:2,
scissor:3
  }
let game=document.getElementById('gameArea');
gameArea.style.display="none";
function starts(){
   userName=document.getElementById('playerName').value;
   hideStart();
 
}

function hideStart(){
    let hides=document.getElementById('startScreen');
    hides.style.display="none";
    gameArea.style.display="block";
document.getElementById('mySide').innerHTML=""+userName;
    
}
function myMove(m){
myMoves=moves[m];
document.getElementById('myMove').innerHTML= `${m}`;

}
function botMove(m){
    botMoves=moves[m];
    document.getElementById('botMove').innerHTML= `${m}`;
    
    }
    function play(){
botMoves=Math.floor(Math.random()*3+1);
let action = Object.keys(moves).find((move) => moves[move] == botMoves);
        botMove(action);
        if(myMoves===""){
            alert("Please Pick");
        }
if(myMoves===botMoves){
    ++drawScore;
}
if(myMoves===1 && botMoves===3){
    ++myScore;
}
if(myMoves===3 && botMoves===1){
    ++botScore;}
    if(myMoves===2 && botMoves===3){
        ++botScore;}
        if(myMoves===3 && botMoves===2){
            ++myScore;} 
            if(myMoves===1 && botMoves===2){
                ++botScore;}  
                if(myMoves===2 && botMoves===1){
                    ++myScore;} 
if(myScore===5 ){
    alert("You Win");   
    location.reload();
}
if(botScore===5){
    alert("you Loss");
    location.reload();
}
document.getElementById("myScores").innerHTML = `${myScore}`;
document.getElementById("drawScore").innerHTML = `${drawScore}`;
document.getElementById("botScore").innerHTML = `${botScore}`;
    }
   
  