let inputDir = { x: 0, y: 0 };
let hi=document.getElementById('hi');
let skr=document.getElementById('num');
const foodsound = new Audio('/music/food.mp3');
const gameoversound = new Audio('/music/gameover.mp3');
const movesound = new Audio('/music/move.mp3');
const musicsound = new Audio('/music/music.mp3');
let score=0;
let hiscore=0;

// board=document.getElementsByClassName('board');
let speed = 5;
let lastpainttime = 0;
let snakearray = [
    { x: 13, y: 15 }
]

food = { x: 6, y: 7 };
// functions

function main(ctime) {
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if ((ctime - lastpainttime) / 1000 < 1 / speed) {
        return;
    }
    lastpainttime = ctime;
    gameEngine();

}

function isCollide(snake)
{
    // self
    for (let i = 1; i < snakearray.length; i++) {
    if(snake[i].x===snake[0].x && snake[i].y===snake[0].y)
    {
        return true;
    }
    
}
// wall
if(snake[0].x>=18 || snake[0].x<=0 || snake[0].y>=18 || snake[0].y<=0)
{
    return true;
}
    
}

function update()
{
    skr.innerText=score;
  

}

function hiupdate()
{
    hi.innerText=hiscore;
}


function gameEngine() {

    // update snake array and food
if(isCollide(snakearray)){
    gameoversound.play();
    musicsound.pause();
    inputDir={x:0 , y:0};
    alert("Game over Press any key to play again!!!");
    snakearray=[{x:13,y:15}];
    musicsound.play();
    score=0;
    update();
}

// after eating food 

if(snakearray[0].y===food.y && snakearray[0].x===food.x)
{
    foodsound.play();
    score++;
    if(hiscore<score)
    {
        hiscore=score;
    }
hiupdate();
    update();
    let a=2;
    let b=16;
    snakearray.unshift({x:snakearray[0].x + inputDir.x ,y:snakearray[0].y + inputDir.y});
    // random number generator for food
    food= {x: Math.round(a+(b-a)*Math.random()) , y:Math.round(a+(b-a)*Math.random()) };
}






// move the snake

for (let i = snakearray.length-2; i >=0; i--) {
    // const element = array[i];
    snakearray[i+1]={...snakearray[i]};
    
}

snakearray[0].x += inputDir.x;
    snakearray[0].y += inputDir.y;



    // display snake array and food
    // displaysnake
    board.innerHTML = "";
    musicsound.play();
    snakearray.forEach((e, index) => {
        snakeele = document.createElement('div');
        snakeele.style.gridRowStart = e.y;
        snakeele.style.gridColumnStart = e.x;
        if (index === 0) {
            snakeele.classList.add('head');
        }
        else {
            snakeele.classList.add('snake');

        }
        board.appendChild(snakeele);


    });



    // food

    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);






}



















// main logic
window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    inputDir = {x: 0, y: 1}  //start the game
    movesound.play();
    switch (e.key) {
        case 'ArrowUp':
            console.log('Arrowup');
            inputDir.x=0;
            inputDir.y=-1;
            break;

        case 'ArrowDown':
            console.log('ArrowDown');
            inputDir.x=0;
            inputDir.y=1;
            break;

        case 'ArrowRight':
            console.log('ArrowRIght');
            inputDir.x=1;
            inputDir.y=0;
            break;

        case 'ArrowLeft':
            console.log('ArrowLeft');
            inputDir.x=-1;
            inputDir.y=0;
            break;
            
            default:break;

    }
});