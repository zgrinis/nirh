import './home.scss';
import { Skybox } from "../../components/skybox/skybox";
import { LetterSpreader } from "../../components/letterSpreader";
import { useMouseTrack } from "./index.hooks";

export function ViewHome(){
    useMouseTrack();
    return <section className="view-home">
        <Skybox />
        <div className="view-home-content-wrap">
            <div className="view-home-content">
                <div className="view-home-heading-wrap">
                    <h1 className='view-home-heading'>ŽYGIMANTAS GRINIS</h1>
                    <h2 className='view-home-subheading'>
                        <LetterSpreader text="FRONT-END" />
                        <LetterSpreader text="DEVELOPER" />
                    </h2>
                </div>
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
            </div>
        </div>
    </section>
}