var fixedRect,movingRect;
var gameobject1,gameobject2,gameobject3,gameobject4;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
gameobject1=createSprite(200,300,23,23);
gameobject1.shapeColor="green";
gameobject2=createSprite(150,250,30,30);
gameobject2.shapeColor="green";
gameobject3=createSprite(250,100,40,40);
gameobject3.shapeColor="green";
gameobject4=createSprite(300,150,50,50);
gameobject4.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

if(isTouching(movingRect,gameobject4)){
  movingRect.shapeColor="red";
  gameobject4.shapeColor="red";
}
else{
  movingRect.shapeColor="green";
  gameobject4.shapeColor="green";
  
}
  drawSprites();
}
function isTouching(objact1,object2){
  if(objact1.x-object2.x<object2.width/2+objact1.width/2&&object2.x-objact1.x<object2.width/2+objact1.width/2&&objact1.y-object2.y<objact1.height/2+object2.height/2&&object2.y-objact1.y<object2.height/2+objact1.height/2 )
  {
  return true;


}
else{
 return false;

}
}
