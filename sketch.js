var canvas;
var music;
var box1,box2,box3,box4;
var cardboard
function preload(){
    music = loadSound("music.mp3");
    
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

box1=createSprite(0,580,360,30);
box1.shapeColor="red";


box2=createSprite(259,580,360,30);
box2.shapeColor="green"; 

box3=createSprite(550,580,360,30);
box3.shapeColor="blue";

box4=createSprite(740,580,360,30);
box4.shapeColor="yellow";
    //create box sprite and give velocity
cardboard=createSprite(random(20,750),360,30);
cardboard.shapeColor="brown"
cardboard.velocityX=8
cardboard.velocityY=7
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites();
cardboard.bounceOff(edges);

    //add condition to check if box touching surface and make  box
if(box1.isTouching(cardboard) && cardboard.bounceOff(box1)){
    cardboard.shapeColor="red"
  music.play()
}
if(box2.isTouching(cardboard)) {
    cardboard.shapeColor="green"
    cardboard.velocityX=0
   cardboard.velocityY=0;
   music.stop()
}

if(box3.isTouching(cardboard) && cardboard.bounceOff(box3)){
    cardboard.shapeColor="blue"
    music.play()
}
if(box4.isTouching(cardboard) && cardboard.bounceOff(box4)){
    cardboard.shapeColor="yellow"
    music.play()
}
drawSprites()
}
