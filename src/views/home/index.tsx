import './home.scss';
import { Skybox } from "../../components/skybox/skybox";
import { useMouseTrack } from "./index.hooks";
const subheading = Array.from('FRONT-END DEVELOPER');
export function ViewHome(){
    useMouseTrack();
    return <section className="view-home">
        <Skybox />
        <div className="view-home-content-wrap">
            <div className="view-home-content">
                <h1 className='view-home-heading'>ŽYGIMANTAS GRINIS</h1>
                <h2 className='view-home-subheading'>
                    {[...subheading].map((letter,index)=><span key={index+letter}>{letter}</span>)}
                </h2>
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
                {/* <ul className='view-home-skill-list'>
                    <li className='view-home-skill-list-item'>React</li>
                    <li className='view-home-skill-list-item'>JavaScript/TypeScript</li>
                    <li className='view-home-skill-list-item'>HTML</li>
                    <li className='view-home-skill-list-item'>CSS/SCSS</li>
                </ul> */}
            </div>
        </div>
    </section>
}