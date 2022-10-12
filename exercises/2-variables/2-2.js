"use strict";

let cnv = document.querySelector("canvas");
cnv.width = window.innerWidth;
cnv.height = window.innerHeight;
let ctx = cnv.getContext("2d");

let width = ctx.canvas.width;
let height = ctx.canvas.height;

function drawrect(size){
let random1 = Math.floor(Math.random()*255);
let random2 = Math.floor(Math.random()*255);
let random3 = Math.floor(Math.random()*255);
let colors = "rgb("+random1+","+random2+","+random3+")";

ctx.beginPath();
ctx.fillStyle = colors; 
ctx.rect(width/2-size/2,height/2-size/2,size,size);
ctx.fill();
}

drawrect(400);
drawrect(350);
drawrect(300);
drawrect(250);
drawrect(200);
drawrect(150);
drawrect(100);
drawrect(50);