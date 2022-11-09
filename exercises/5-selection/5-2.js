"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

const width = window.innerWidth;
const height = window.innerHeight;
draw();

function draw() {
    
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.fillStyle = "grey";
    context.fillRect(0, 0, width, height);
    drawMaze();
}

function drawMaze(){
    let dBetween = 10;
    context.lineWidth = 5;
        for(let i = 0; i <(width/dBetween);i++){
            for(let j = 0; j < (height/dBetween);j++){
                let endPosX = dBetween*(i+1);
                let startPosX = dBetween*i;
                let endPosY = dBetween*(j+1);
                let startPosY = dBetween*j;
                let random = Math.round(Math.random());
                if (random == 0){
                    Utils.drawLine(startPosX,startPosY,endPosX,endPosY);
                } else {
                    Utils.drawLine(startPosX,endPosY,endPosX,startPosY);
                }
            }
        
    }
}