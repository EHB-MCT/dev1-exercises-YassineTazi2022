"use strict";

let cnv = document.querySelector("canvas");
cnv.width = window.innerWidth;
cnv.height = window.innerHeight;
let ctx = cnv.getContext("2d");

ctx.beginPath();
ctx.fillStyle = "LightBlue";
ctx.lineWidth = 2;
ctx.rect(50,50,300,300);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.moveTo(100,50);
ctx.lineTo(100,250);
ctx.lineTo(300,250);
ctx.lineTo(300,50);
ctx.moveTo(150,100);
ctx.lineTo(150,250);
ctx.moveTo(150,100);
ctx.lineTo(300,100);
ctx.moveTo(150,150);
ctx.lineTo(250,150);
ctx.lineTo(250,250);
ctx.moveTo(300,250);
ctx.lineTo(300,300);
ctx.lineTo(50,300);
ctx.stroke();