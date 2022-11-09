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

export function rgba(a){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let rgba = "rgba("+r+","+g+","+b+","+ a +")";
    return rgba;
}

export function strokeCircle(x,y,radius){
    context.beginPath();
    context.ellipse(x,y,radius,radius,360,0,360);
    context.stroke();
}

export function fillCircle(x,y,radius, color){
    context.beginPath();
    context.fillStyle = color;
    context.ellipse(x,y,radius,radius,360,0,360);
    context.fill();
}

/**
 * function that calculates the distance between 2 coordinates
 * @param {number} x1 x coordinate of the first point
 * @param {number} y1 y coordinate of the first point
 * @param {number} x2 x coordinate of the second point
 * @param {number} y2 y coordinate of the second point
 */
 export function calculateDistance(x1, y1, x2, y2) {
    return Math.hypot(x2 - x1, y2 - y1);
}   