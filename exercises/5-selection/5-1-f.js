"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

const width = window.innerWidth;
const height = window.innerHeight;
draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    drawFlag();
}

function drawFlag(){
    let width = window.innerWidth;
    let height = window.innerHeight;

    for(let i = 0;i<=100000;i++) {
        let posX = Math.floor(Math.random()*(width));
        let posy = Math.floor(Math.random()*height);
        let distance = Utils.calculateDistance(width/2, height/2,posX,posy);

        if (distance < 200) {  
            Utils.fillCircle(posX ,posy, 2, "red");
        }  else{
            Utils.fillCircle(posX ,posy, 2, "white");
        }

        
    }
}