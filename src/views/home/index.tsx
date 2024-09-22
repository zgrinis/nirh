import { Skybox } from "../../components/skybox/skybox";
import { interpolate } from "../../utils/interpolate";

let fadeTimeout:NodeJS.Timeout ;
const SLEEP = 5000;
document.addEventListener('mousemove',({clientX,clientY})=>{
  // const {width:bodyWidth,height:bodyHeight} = document.body.getBoundingClientRect();
  const bodyWidth = document.documentElement.offsetWidth;
  const bodyHeight = document.documentElement.offsetHeight;

  const rx = interpolate(clientX,0,bodyWidth,-180,180).toFixed(2);
  const ry = interpolate(clientY,0,bodyHeight,-180,180).toFixed(2);

  clearTimeout(fadeTimeout);
  fadeTimeout = setTimeout(()=>{
    document.body.setAttribute('style',`--cube-rx:${ry}deg;--cube-ry:${rx}deg;--cube-opacity:0;`)
  },SLEEP)
  document.body.setAttribute('style',`--cube-rx:${ry}deg;--cube-ry:${rx}deg;--cube-opacity:1;`)
})

export function ViewHome(){
    
    return <>
        <Skybox />
    </>
}