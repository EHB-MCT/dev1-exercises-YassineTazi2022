"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawCross();
}

function drawCross() {
    let i = 0;
    while (i < 5) {
        let x = 150;
        let step = 25;
        Utils.drawLine(50, x+(step*i), 350, x+(step*i));
        Utils.drawLine(x+(step*i), 50, x+(step*i), 350);
        i += 1;
    }
}