"use strict";

let cnv = document.querySelector("canvas");
cnv.width = window.innerWidth;
cnv.height = window.innerHeight;
let ctx = cnv.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.rect(50,50,150,150);
ctx.rect(200,200,150,150);
ctx.rect(275,75,50,50);
ctx.rect(75,275,50,50);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "black";
ctx.strokeStyle = "red";
ctx.rect(125,125,150,150);
ctx.rect(325,50,25,25);
ctx.rect(50,325,25,25);
ctx.stroke();
ctx.fill();