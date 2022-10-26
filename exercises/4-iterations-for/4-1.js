"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

let width = 600;
let height = 300;
draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(0, 0, width, height);
    drawWormhole();
}

function drawWormhole() {
    let step = height/30;
    for(let i=0;i < 60;i++) {
        Utils.drawLine(width/2,height/2 ,step*i ,height);
        Utils.drawLine(width/2,height/2 ,step*i ,0);    
    }
    for(let i=0;i <= 30;i++) {
        Utils.drawLine(width/2,height/2 ,0 ,step*i);
        Utils.drawLine(width/2,height/2 ,width-0 ,(step)*i);
    }
}