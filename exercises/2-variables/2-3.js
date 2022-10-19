"use strict";

let cnv = document.querySelector("canvas");
cnv.width = window.innerWidth;
cnv.height = window.innerHeight;
let cntx = cnv.getContext("2d");

let width = cntx.canvas.width;
let height = cntx.canvas.height;
let sizeX = width/3;
let sizeY = height/3;


function drawrect(){

    cntx.beginPath();
    cntx.fillStyle = "Navy";
    cntx.rect(0,0,sizeX,sizeY*2);
    cntx.rect(sizeX*2,0,sizeX,sizeY*2);
    cntx.fill();

    cntx.beginPath();
    cntx.fillStyle = "DodgerBlue";
    cntx.rect(0,sizeY*2,sizeX,sizeY*2);
    cntx.rect(sizeX*2,sizeY*2,sizeX,sizeY*2);
    cntx.fill();

    cntx.beginPath();
    cntx.fillStyle = "LightGrey";
    cntx.rect(sizeX,0,sizeX,height);
    cntx.fill();

    cntx.beginPath();
    cntx.fillStyle = "FireBrick";
    cntx.rect(0,sizeX-sizeY,width,sizeY);
    cntx.fill();
}
drawrect();