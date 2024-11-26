import './about.scss';
import { useViewContext } from '../../contexts/view';
import { TechWheel } from '../../components/techWheel';


export function ViewAbout(){
    const {setView} = useViewContext();
    return <div className="view view-about container">
        <h1 className='view-heading'>About me</h1>
        <section>
            <p>
                A creative and detail-oriented Front-End Developer with more than 5 years of experience in building responsive websites and web applications. This includes making components and widgets for in-house code base and programming entire websites from scratch. I have worked in teams developing multitude of various projects and technical solutions. These include websites for local companies, content management systems (cms), client relationship management systems (crm) as well as various non-standard web applications like scientific models and educational presentations.
            </p>
        </section>
        <section>
            <h2 className='view-heading'>Technical Skills</h2>
            <TechWheel />
        </section>
        <section className="text-center">
            <a className="btn btn-neon --primary" href="#links" onClick={()=>{setView('links')}}>
                More info
            </a>
        </section>
    </div>
}