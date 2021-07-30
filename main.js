var score=0;
console.log(score);
document.getElementById("scoreboard").innerHTML=score;
canvas=document.getElementById("player");
ctx=canvas.getContext("2d");
roverheight=50;
roverwidth=100;
roverx=10;
rovery=10;
coinheight=30;
coinwidth=30;
coin_x=300;
coin_y=300;
coin_image="coin.gif";
roverImage="rover.png";
canvasimage="mars.jpg";
function add(){
    backroundimage=new Image();
    backroundimage.onload=uploadbackround;
    backroundimage.src=canvasimage;

    roverimage=new Image();
    roverimage.onload=uploadrover;
    roverimage.src=roverImage;

    coinimage=new Image();
    coinimage.onload=uploadcoin;
    coinimage.src=coin_image;
}
function uploadbackround() {
    ctx.drawImage(backroundimage,0,0,canvas.width,canvas.height);
}
function uploadrover() {
    ctx.drawImage(roverimage,roverx,rovery,roverwidth,roverheight);
}
function uploadcoin(){
    ctx.drawImage(coinimage,coin_x,coin_y,coinwidth,coinheight);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "38"){
    up();
    console.log(up);
    if(roverx>=coin_x && roverx <= coin_x+30 && rovery>=coin_y && rovery<=coin_y+30){
        coin_x=Math.random()*700;
        coin_y=Math.random()*500;
        score=score+1;
        document.getElementById("scoreboard").innerHTML=score;
    }
    }
    if (keyPressed == "40"){
    down();
    console.log(down);
    if(roverx>=coin_x && roverx <= coin_x+30 && rovery>=coin_y && rovery<=coin_y+30){
        coin_x=Math.random()*700;
        coin_y=Math.random()*500;
        score=score+1;
        document.getElementById("scoreboard").innerHTML=score;
    }
}
    if (keyPressed == "39"){
    right();
    console.log(right);
    if(roverx>=coin_x && roverx <= coin_x+30 && rovery>=coin_y && rovery<=coin_y+30){
        coin_x=Math.random()*700;
        coin_y=Math.random()*500;
        score=score+1;
        document.getElementById("scoreboard").innerHTML=score;
    }
}
    if (keyPressed == "37"){
    left();
    console.log(left);
    if(roverx>=coin_x && roverx <= coin_x+30 && rovery>=coin_y && rovery<=coin_y+30){
        coin_x=Math.random()*700;
        coin_y=Math.random()*500;
        score=score+1;
        document.getElementById("scoreboard").innerHTML=score;
    }
}
}
function up(){
    if(rovery >=0){
        rovery = rovery-10;
        uploadbackround();
        uploadrover();
        uploadcoin();
    }
}
    function down(){
        if(rovery <=600){
            rovery = rovery+10;
            uploadbackround();
            uploadrover();
            uploadcoin();
        }
    }
    function left(){
        if(roverx >=0){
            roverx = roverx-10;
            uploadbackround();
            uploadrover();
            uploadcoin();
        }
    }
    function right(){
        if(roverx <=800){
            roverx = roverx+10;
            uploadbackround();
            uploadrover();
            uploadcoin();
        }
    }