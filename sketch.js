var cat,catImg
var mouse,mouseImg


function preload() {
    cat1 = loadImage("cat1.png")
    cat2 = loadImage("cat2,png")
    mouse1 = loadImage("mouse1.png")
    mouse2 = loadImage("mouse2.png")
    

function setup(){
    createCanvas(1000,800);
    cat = createSprite(200,200,20,20)
    mouse = createSprite(200,250,20,20)

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

if(cat.x - mouse.x< (cat.width - mouse.width)/2){
cat.addAnimation(cat2)
cat.changeAnimation(cat1)
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
    mouse.addAnimation(mouse2)
    mouse.changeAnimation(mouse1)
    mouse.frameDelay = 25
}

}}
