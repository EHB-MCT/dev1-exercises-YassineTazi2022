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


    for(let i = 0;i<=100000;i++) {
        let posX = Math.floor(Math.random()*(width/2));
        let posy = Math.floor(Math.random()*height);

        Utils.fillCircle(posX,posy, 2, "red");
    }
    for(let i = 0;i<=100000;i++) {
        let posX = Math.floor(Math.random()*(width/2)+width/2);
        let posy = Math.floor(Math.random()*height);

        Utils.fillCircle(posX,posy, 2, "green");
    }
}