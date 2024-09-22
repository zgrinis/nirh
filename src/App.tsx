import React from 'react';
import './App.scss';
import { Skybox } from './components/skybox/skybox';
import { interpolate } from './utils/interpolate';




document.addEventListener('mousemove',({clientX,clientY})=>{
  // const {width:bodyWidth,height:bodyHeight} = document.body.getBoundingClientRect();
  const bodyWidth = document.documentElement.offsetWidth;
  const bodyHeight = document.documentElement.offsetHeight;

  const rx = interpolate(clientX,0,bodyWidth,-180,180).toFixed(2);
  const ry = interpolate(clientY,0,bodyHeight,-180,180).toFixed(2);

  console.log({rx,ry,bodyHeight})

  document.body.setAttribute('style',`--cube-rx:${ry}deg;--cube-ry:${rx}deg;--cube-opacity:1;`)
})

const App: React.FC = () => {
  return (
    <Skybox />
  );
}

export default App;
