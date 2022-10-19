"use strict";
import context from "./context.js";

export function drawLine(x1,y1,x2,y2) {
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
}

export function rgb(r,g,b){
    let rgb = "rgb("+r+","+g+","+b+")";
    return rgb;
}

export function strokeCircle(x,y,radius){
    context.beginPath();
    context.ellipse(x,y,radius,radius,360,0,360);
    context.stroke();
}