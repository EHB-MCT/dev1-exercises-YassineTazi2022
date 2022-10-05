"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

context.fillStyle = "white";
context.beginPath();
context.strokeStyle = "black";

//Y
context.moveTo(20,500);
context.lineTo(50,550);
context.lineTo(80,500);
context.moveTo(50,550);
context.lineTo(50,600);

//A
context.moveTo(150,500);
context.lineTo(120,600);
context.moveTo(150,500);
context.lineTo(180,600);
context.moveTo(165,550);
context.lineTo(135,550);

//S
context.moveTo(250,500);
context.lineTo(200,500);
context.lineTo(200,550);
context.lineTo(250,550);
context.lineTo(250,600);
context.lineTo(200,600);

//S
context.moveTo(350,500);
context.lineTo(300,500);
context.lineTo(300,550);
context.lineTo(350,550);
context.lineTo(350,600);
context.lineTo(300,600);

/*
//T
context.rect(20, 20, 300, 50);
context.rect(145, 20, 50, 300);

//A
context.rect(400, 20, 250, 50);
context.rect(400, 150, 250, 50);

context.rect(400, 20, 50, 300);
context.rect(600, 20, 50, 300);

//Z
context.rect(400, 20, 250, 50);
context.rect(400, 150, 250, 50);

context.rect(400, 20, 50, 300);
context.rect(600, 20, 50, 300);*/

context.fill();
context.stroke();