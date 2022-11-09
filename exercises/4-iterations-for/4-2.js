"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillRect(0,0,window.innerWidth,window.innerHeight)
    drawCircles();
}

function drawCircles() {
    context.lineWidth = 2;
    let i = 0;
    let step = 15;

    while (i<50) {        
        let radius = Math.floor(Math.random()*40);
        let posx= Math.floor(Math.random()*(window.innerWidth-200));
        let posy=Math.floor(Math.random()*250);
        
        context.fillStyle = Utils.rgba(0.5);
        Utils.fillCircle(posx+200,posy+50 ,radius);
        i++;
    }
}