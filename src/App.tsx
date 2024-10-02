import React, { useMemo } from 'react';
import './App.scss';
import { useViewContext, ViewContextProvider } from './contexts/view';


import { views as viewsArr } from './views';
import { Nav } from './components/nav';
import { Preloader } from './components/preloader';

import bk from "./components/skybox/faces/corona_bk.png"
import dn from "./components/skybox/faces/corona_dn.png"
import ft from "./components/skybox/faces/corona_ft.png"
import lf from "./components/skybox/faces/corona_lf.png"
import rt from "./components/skybox/faces/corona_rt.png"
import up from "./components/skybox/faces/corona_up.png"


const App: React.FC = () => {
  return (
    <Preloader imagePaths={[
      bk,
      dn,
      ft,
      lf,
      rt,
      up,
    ]}>
      <ViewContextProvider>
        <div className="container nav-wrap">
          <Nav views={viewsArr} />
        </div>
        <ViewRender />
      </ViewContextProvider>
    </Preloader>
  );
}


function ViewRender(){
  const {view} = useViewContext();
  const CurrentView = useMemo(()=>{
    let current = viewsArr.find((viewItem)=>viewItem.alias === view);
    if(!current) return () => <>Nerastas view: {view}</>
    document.title = `${current.title} | Žygimantas Grinis`;
    return current.component;
  },[view])

  return <CurrentView />
}

export default App;
