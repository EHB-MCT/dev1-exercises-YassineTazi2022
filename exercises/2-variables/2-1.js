"use strict";

let cnv = document.querySelector("canvas");
cnv.width = window.innerWidth;
cnv.height = window.innerHeight;
let ctx = cnv.getContext("2d");

let width = ctx.canvas.width;
let height = ctx.canvas.height;
let margin = 50;

drawLines();

function drawLines(){
ctx.beginPath();

ctx.moveTo(margin,20);
ctx.lineTo(width-margin,20);
ctx.lineTo(margin,60);
ctx.lineTo(width-margin,60);
ctx.lineTo(margin,100);
ctx.lineTo(width-margin,100);
ctx.lineTo(margin,140);
ctx.lineTo(width-margin,140);
ctx.lineTo(margin,180);
ctx.lineTo(width-margin,180);
ctx.lineTo(margin,220);
ctx.lineTo(width-margin,220);
ctx.lineTo(margin,20);

ctx.stroke();
}