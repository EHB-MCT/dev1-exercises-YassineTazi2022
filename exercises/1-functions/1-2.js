"use strict";

let cnv = document.querySelector("canvas");
cnv.width = window.innerWidth;
cnv.height = window.innerHeight;
let ctx = cnv.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.moveTo(50,50);
ctx.lineTo(200,50);
ctx.lineTo(200,200);
ctx.lineTo(50,200);
ctx.lineTo(50,50);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(50,50);
ctx.lineTo(200,200);
ctx.moveTo(200,50);
ctx.lineTo(50,200);

ctx.stroke();