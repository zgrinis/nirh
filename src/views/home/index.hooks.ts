import { useEffect } from "react";
import { throttle }  from 'underscore';
import { interpolate } from "../../utils/interpolate";

let fadeTimeout:NodeJS.Timeout ;
const SLEEP = 5000;
const MAX_ROTATE_X = 90;
const MAX_ROTATE_Y = 90;

const doRotation = (rotate:{rx:number,ry:number}) =>{
    const rx = rotate.rx * .5;
    const ry = rotate.ry * .5;
    document.documentElement.setAttribute('style',`--cube-rx:${rx}deg;--cube-ry:${ry}deg;--cube-opacity:1`);
    clearTimeout(fadeTimeout);
    fadeTimeout = setTimeout(() => {
        document.documentElement.style.setProperty('--cube-opacity','0')
    }, SLEEP);
}

const onMouseMove = ({ clientX, clientY }: MouseEvent): void => {
    const bodyWidth = document.documentElement.offsetWidth;
    const bodyHeight = document.documentElement.offsetHeight;

    const ry = +interpolate(clientX, 0, bodyWidth, -MAX_ROTATE_X, MAX_ROTATE_X).toFixed(2);
    const rx = +interpolate(clientY, 0, bodyHeight, -MAX_ROTATE_Y, MAX_ROTATE_Y).toFixed(2);

    doRotation({rx,ry})
};

const firstTouchCoords = {
    x:0,
    y:0,
}
const rotationBackup = {
    x:0,
    y:0,
}
const lastRotation = {
    x:0,
    y:0,
}

const onTouchStart = (ev:TouchEvent) =>{
    const {clientX,clientY} = getTouchCoordinates(ev);
    firstTouchCoords.x = clientX;
    firstTouchCoords.y = clientY;
}

const onTouchMove = (ev:TouchEvent) =>{
    const {clientX,clientY} = getTouchCoordinates(ev)
    const dy = firstTouchCoords.x - clientX;
    const dx = firstTouchCoords.y - clientY;
    const rx = rotationBackup.x + dx;
    const ry = rotationBackup.y + dy;

    doRotation({rx,ry})

    lastRotation.x = rx;
    lastRotation.y = ry;
}
const onTouchEnd = () =>{
    rotationBackup.x = lastRotation.x;
    rotationBackup.y = lastRotation.y;
}

export function useMouseTrack(){
    useEffect(()=>{
        document.addEventListener('mousemove',onMouseMove);  

        document.addEventListener('touchmove',onTouchMove);
        document.addEventListener('touchstart',onTouchStart);
        document.addEventListener('touchend',onTouchEnd);
        document.body.style.overscrollBehavior = 'none';
        return () => {
            document.body.style.overscrollBehavior = '';
            document.documentElement.removeAttribute('style')
            document.removeEventListener('mousemove',onMouseMove);
            document.removeEventListener('touchmove',onTouchMove);
            document.removeEventListener('touchstart',onTouchStart);
            document.removeEventListener('touchend',onTouchEnd);
        }
    },[])

}

function getTouchCoordinates(event:TouchEvent) {
    // Check if there are any touches
    if (event?.touches && event.touches.length > 0) {
        // Get the first touch point (you can modify this if you want multi-touch)
        let touch = event.touches[0];
        
        // Return the clientX and clientY values
        return {
            clientX: touch.clientX,
            clientY: touch.clientY
        };
    }
    
    return {clientX:0,clientY:0}; // Return null if there are no touches
}