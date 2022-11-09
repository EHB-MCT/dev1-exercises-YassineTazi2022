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
        let posX = Math.floor(Math.random()*(width));
        let posy = Math.floor(Math.random()*height);
        if (posy<=height/3) {
                Utils.fillCircle(posX,posy, 2, "red");       
            } else if (posy>height/3 && posy<= (height/3)*2) {
                Utils.fillCircle(posX,posy, 2, "white");
            } else {
                Utils.fillCircle(posX,posy, 2, "blue");
            }
        }
}