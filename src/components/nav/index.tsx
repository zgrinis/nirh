import './nav.scss';
import { useViewContext } from "../../contexts/view"
import { useMemo } from 'react';

type NavProps ={
    views:View[]
}
export function Nav({views}:NavProps){
    const {view,setView} = useViewContext();

    return <nav className="nav-main" aria-label="Main">
        <ul className="nav-main-list">
            {views.map(({alias,title})=>{
                const active = view === alias;
                return <li key={alias} className="nav-main-list-item">
                    <a href={`#${alias}`} className={`nav-main-link${active?' --active':''}`} onClick={ev=>{
                        // ev.preventDefault();
                        setView(alias)
                    }}>
                        {title}
                    </a>
                </li>
            })}
        </ul>
    </nav>
}