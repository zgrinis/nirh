import './about.scss';
import { useViewContext } from '../../contexts/view';
import { TechWheel } from '../../components/techWheel';


export function ViewAbout(){
    const {setView} = useViewContext();
    return <div className="view view-about container">
        <h1 className='view-heading underlined'>About me</h1>
        <div className="card">
            <section>
                <div className="view-about-content">
                    <p className="view-about-content-fs-lg">
                        A creative and detail-oriented Front-End Developer with more than 5 years of experience in building responsive websites and web applications.
                    </p>
                    
                </div>
            </section>
        </div>

        <h2 className='view-heading underlined underline-delay-1'>Technical Skills</h2>
        <section>
            <div className="card">
                <div className="view-about-content">
                    <p>
                        I have worked in teams developing multitude of projects and technical solutions. These include websites for local companies, content management systems (cms), client relationship management systems (crm) as well as various non-standard web applications like scientific models and educational presentations for schools.
                    </p>
                </div>
                <TechWheel />
            </div>
        </section>
        <section className="text-center">
            <a className="btn btn-neon --primary" href="#links" onClick={()=>{setView('links')}}>
                Go to links and contacts
            </a>
        </section>
    </div>
}