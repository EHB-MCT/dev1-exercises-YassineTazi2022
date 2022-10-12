"use strict";

let cnv = document.querySelector("canvas");
cnv.width = window.innerWidth;
cnv.height = window.innerHeight;
let ctx = cnv.getContext("2d");

let width = ctx.canvas.width;
let height = ctx.canvas.height;
let random1 = Math.floor(Math.random()*255);
let random2 = Math.floor(Math.random()*255);
let random3 = Math.floor(Math.random()*255);
let color = "rgb("+random1+","+random2+","+random3+")";

console.log(random1,random2,random3);
ctx.beginPath();
ctx.fillStyle = color; 
ctx.rect(50,50,100,100);

ctx.fill();