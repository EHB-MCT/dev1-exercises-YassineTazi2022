"use strict";
import context from "../scripts/context.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalSquares();
}

function drawDiagonalSquares() {
    let i = 0;
    let x = 100;
    let step = 25;
    while (i<7) {
        context.strokeRect(75+(step*i),75+(step*i),x,x);
        i += 1;
    }
}