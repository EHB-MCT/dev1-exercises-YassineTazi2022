"use strict";

let cnv = document.querySelector("canvas");
cnv.width = window.innerWidth;
cnv.height = window.innerHeight;
let ctx = cnv.getContext("2d");

ctx.beginPath();
ctx.fillStyle = "orange";
ctx.rect(15,15,175,100);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "yellow";
//ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.ellipse(100,75,50,50,0,0,360);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "blue";
ctx.rect(15,75,175,50);
ctx.fill();