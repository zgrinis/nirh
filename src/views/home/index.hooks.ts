import { useEffect } from "react";
import { throttle }  from 'underscore';
import { interpolate } from "../../utils/interpolate";

let fadeTimeout:NodeJS.Timeout ;
const SLEEP = 5000;
const MAX_ROTATE_X = 90;
const MAX_ROTATE_Y = 90;


const onMouseMove = ({ clientX, clientY }: MouseEvent): void => {
    // const {width:bodyWidth,height:bodyHeight} = document.body.getBoundingClientRect();
    const bodyWidth = document.documentElement.offsetWidth;
    const bodyHeight = document.documentElement.offsetHeight;

    const rx = interpolate(clientX, 0, bodyWidth, -MAX_ROTATE_X, MAX_ROTATE_X).toFixed(2);
    const ry = interpolate(clientY, 0, bodyHeight, -MAX_ROTATE_Y, MAX_ROTATE_Y).toFixed(2);

    clearTimeout(fadeTimeout);
    fadeTimeout = setTimeout(() => {
        document.documentElement.setAttribute('style', `--cube-rx:${ry}deg;--cube-ry:${rx}deg;--cube-opacity:0;`);
    }, SLEEP);
    document.documentElement.setAttribute('style', `--cube-rx:${ry}deg;--cube-ry:${rx}deg;--cube-opacity:1;`);
};
const onTouchMove = throttle((ev: TouchEvent): void => {
    onMouseMove(getTouchCoordinates(ev) as MouseEvent);
},50);

export function useMouseTrack(){
    useEffect(()=>{
        document.addEventListener('mousemove',onMouseMove);     
        document.addEventListener('touchmove',onTouchMove);
        document.body.style.overscrollBehavior = 'none';
        return () => {
            document.body.style.overscrollBehavior = '';
            document.documentElement.removeAttribute('style')
            document.removeEventListener('mousemove',onMouseMove);
            document.removeEventListener('touchmove',onTouchMove);
        }
    },[])

}

function getTouchCoordinates(event:TouchEvent) {
    // Ensure there is at least one touch point
    if (event.touches && event.touches.length > 0) {
        const touch = event.touches[0]; // Get the first touch point
        return {
            clientX: touch.clientX,
            clientY: touch.clientY
        };
    }
    return null; // Return null if no touch points
}