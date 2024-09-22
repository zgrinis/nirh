import React, { useMemo } from 'react';
import './App.scss';
import { Skybox } from './components/skybox/skybox';
import { interpolate } from './utils/interpolate';
import { useViewContext, ViewContextProvider } from './contexts/view';


import { views as viewsArr } from './views';

const App: React.FC = () => {
  return (
    <ViewContextProvider>
      <ViewRender />
    </ViewContextProvider>
  );
}


function ViewRender(){
  const {view} = useViewContext();
  const CurrentView = useMemo(()=>{
    let current = viewsArr.find((viewItem)=>viewItem.alias === view);
    if(!current) return () => <>Nerastas view: {view}</>
    return current.component;
  },[view])

  return <CurrentView />
}

export default App;
