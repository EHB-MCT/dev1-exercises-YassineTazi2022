"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawGrid();
}

function drawGrid() {
    let x = 75;
        for(let i = 0;i<9;i++;){
        Utils.drawLine(x,x+(32*i) ,330 ,x+(32*i) );
        Utils.drawLine(x+(32*i),x ,x+(32*i) ,330);
    }
}