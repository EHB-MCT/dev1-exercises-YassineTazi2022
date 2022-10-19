"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawWormhole();
}

function drawWormhole() {
    let i = 0;
    let step = 12;
    while (i <= 25) {
        Utils.drawLine(200,200 ,50+(step*i) ,50);
        Utils.drawLine(200,200 ,50+(step*i),350);
        Utils.drawLine(200,200 ,50 ,50+(step*i));
        Utils.drawLine(200,200 ,350,50+(step*i));
        i++;
    }
}