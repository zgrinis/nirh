import './home.scss';
import { Skybox } from "../../components/skybox/skybox";
import { LetterSpreader } from "../../components/letterSpreader";
import { useMouseTrack } from "./index.hooks";
import { useViewContext } from '../../contexts/view';

export function ViewHome(){
    useMouseTrack();
    const {setView} = useViewContext();
    return <section className="view-home">
        <Skybox />
        <div className="view-home-content-wrap">
            <div className="view-home-content">
                <ul className='view-home-skill-list'>
                    <li className="view-home-skill-list-item">
                        Learner
                    </li>
                    <li className="view-home-skill-list-item">
                        Teacher
                    </li>
                    <li className="view-home-skill-list-item">
                        Problem solver
                    </li>
                </ul>
                <div className="view-home-heading-wrap">
                    <h1 className='view-home-heading'>ŽYGIMANTAS GRINIS</h1>
                    <h2 className='view-home-subheading'>
                        <LetterSpreader text="FRONT-END" />
                        <LetterSpreader text="DEVELOPER" />
                    </h2>
                </div>
          
                <div className='view-home-cta'>
                    <a className='btn btn-neon --primary' href="#about" onClick={()=>{setView('about')}}>
                        Find out what i am about!
                    </a>
                </div>
            </div>
        </div>
    </section>
}