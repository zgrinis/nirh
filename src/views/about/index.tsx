import './about.scss';
import { useViewContext } from '../../contexts/view';

export function ViewAbout(){
    const {setView} = useViewContext();
    return <div className="view-about">
        <div className="container text-white">
            <h1 className='view-about-heading'>About me</h1>
            <section>
                <h2>Summary</h2>
                <p>
                    I am a creative and detail-oriented Front-End Developer with more than 5 years of experience in building responsive websites and web applications. Strong expertise in HTML, CSS, and JavaScript, complemented by a solid foundation in graphic design principles. Passionate about creating user-friendly, visually appealing, and functional websites.
                </p>
            </section>
            <section>
                <h2>Technical Skills</h2>
               <ul>
                    <li>
                        <div><b>Front-End Development:</b></div>
                        HTML5, CSS3, JavaScript (ES6+), React.js, Vue.js, Sass/SCSS, Tailwind CSS, Bootstrap
                    </li>

                    <li>
                        <div><b>Graphic Design:</b></div>
                        Figma, Inkscape, Adobe Creative Suite (Photoshop, Illustrator, XD)
                    </li>

                    <li>
                        <div><b>Backend:</b></div>
                        PHP (basic), Node.js (basic to intermediate)
                    </li>

                    <li>
                        <div><b>Tools & Version Control:</b></div>
                        VS Code, Git, Webpack
                    </li>
               </ul>
            </section>
           <a href="#links" onClick={()=>{setView('links')}}>
            Contact me
           </a>
        </div>
    </div>
}