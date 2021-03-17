const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drops = [];
var maxDrops = 100

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    if(frameCount%150===0){
        for(var I = 0;I < 100;I++){
            drops.push(new createDrop(random(0,400),random(0,400)))
        }
    }
    
   
    
}

function draw(){
    Engine.update(engine);
    background(0);
    for(var I = 0;I < 100;I++){
        drops[I].showDrop();
        drops[I].updateY();
    }




    drawSprites();

    
}   

