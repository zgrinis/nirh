import React, { useMemo } from 'react';
import './App.scss';
import { useViewContext, ViewContextProvider } from './contexts/view';


import { views as viewsArr } from './views';
import { Nav } from './components/nav';
import { Preloader } from './components/preloader';
import { facesLg, facesSm } from './facesPaths';
import { Logo } from './components/logo';

const facesArr = window.innerWidth > 1440 ? facesLg : facesSm;

const App: React.FC = () => {
  return (
    <Preloader imagePaths={facesArr}>
      <ViewContextProvider>
        <div className="container nav-wrap">
          {/* <div className="logo-wrap">
            <Logo />
          </div> */}
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
