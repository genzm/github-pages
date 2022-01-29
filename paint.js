let button;
function setup(){
    createCanvas(1000, 1000);
    button=createButton("Hello");
    button.mousePressed(greatBritania);
    background(50);
}

function draw(){
    if(mouseIsPressed){
        fill(0);
    }
    else{
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
}
function greatBritania(){
    fill(random(255));
    ellipse(random()*width, random()*height, random(400), random(400));
}